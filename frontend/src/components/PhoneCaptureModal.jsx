import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Phone } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Shown once after first login when the user has no phone saved. No OTP.
export default function PhoneCaptureModal() {
  const { user, setUser } = useAuth();
  const [digits, setDigits] = useState("");
  const [saving, setSaving] = useState(false);

  const show = user && (!user.phone || user.phone.trim() === "");
  if (!show) return null;

  const save = async () => {
    const clean = digits.replace(/\D/g, "");
    if (clean.length < 10) return;
    setSaving(true);
    try {
      const res = await fetch(`${API}/user/phone`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `+91 ${clean}` }),
      });
      if (res.ok) setUser(await res.json());
    } catch (e) { /* ignore */ }
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 px-6 pb-6 pt-7 text-center text-white">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
            <Phone className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-extrabold tracking-tight">One quick step</h2>
          <p className="mt-1 text-sm text-blue-100">Enter your phone number to continue</p>
        </div>
        <div className="px-6 py-6">
          <div className="flex items-center gap-2 rounded-xl border-2 border-slate-200 px-3 py-3 focus-within:border-blue-500">
            <span className="text-sm font-bold text-slate-700">+91</span>
            <span className="h-5 w-px bg-slate-200" />
            <input
              autoFocus
              inputMode="numeric"
              value={digits}
              onChange={(e) => setDigits(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="Phone number"
              className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          <button
            onClick={save}
            disabled={digits.replace(/\D/g, "").length < 10 || saving}
            className="mt-4 w-full rounded-2xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {saving ? "Saving\u2026" : "Save & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
