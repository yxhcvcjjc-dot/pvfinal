import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Header } from "@/components/Header";
import { Switch } from "@/components/ui/switch";
import { Users, ShieldCheck } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function AdminPage() {
  const { user, loading, isOwner } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({ count: 0, users: [] });
  const [busy, setBusy] = useState(true);

  const load = async () => {
    try {
      const res = await fetch(`${API}/admin/users`, { credentials: "include" });
      if (res.ok) setData(await res.json());
    } catch (e) { /* ignore */ }
    setBusy(false);
  };

  useEffect(() => {
    if (loading) return;
    if (!user || !isOwner) { navigate("/", { replace: true }); return; }
    load();
  }, [loading, user, isOwner]);

  const toggle = async (u) => {
    const next = !u.access;
    setData((d) => ({ ...d, users: d.users.map((x) => x.user_id === u.user_id ? { ...x, access: next } : x) }));
    try {
      await fetch(`${API}/admin/users/${u.user_id}/access`, {
        method: "PATCH", credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access: next }),
      });
    } catch (e) { load(); }
  };

  const fmt = (s) => { try { return new Date(s).toLocaleDateString(); } catch (e) { return ""; } };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header showBack title="Admin" bgClass="bg-indigo-700" onBack={() => navigate("/")} />
      <main className="mx-auto max-w-3xl px-4 py-8 md:px-6">
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white"><Users className="h-6 w-6" /></span>
          <div>
            <p className="text-sm text-slate-500">Total users</p>
            <p className="text-2xl font-extrabold text-slate-900">{data.count}</p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700"><ShieldCheck className="h-3.5 w-3.5" /> Owner</span>
        </div>

        {busy ? (
          <p className="py-10 text-center text-sm text-slate-500">Loading users\u2026</p>
        ) : data.users.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-500">No users yet.</p>
        ) : (
          <div className="space-y-3">
            {data.users.map((u) => (
              <div key={u.user_id} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-900">{u.name || "\u2014"} {u.is_owner && <span className="ml-1 rounded bg-indigo-100 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700">OWNER</span>}</p>
                  <p className="truncate text-xs text-slate-500">{u.email}</p>
                  <p className="truncate text-xs text-slate-500">{u.phone || "no phone"} \u00b7 joined {fmt(u.created_at)}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Switch checked={!!u.access} onCheckedChange={() => toggle(u)} disabled={u.is_owner} />
                  <span className={`text-[10px] font-bold ${u.access ? "text-emerald-600" : "text-slate-400"}`}>{u.access ? "ON" : "OFF"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
