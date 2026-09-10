import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { LogIn, LogOut, ShieldCheck, Lock, Unlock } from "lucide-react";

// Login button (logged out) or user chip + admin/logout (logged in).
export default function AuthControls() {
  const { user, loading, login, logout, unlocked, isOwner } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  if (loading) return null;

  if (!user) {
    return (
      <button
        onClick={login}
        className="inline-flex items-center gap-3 rounded-md border border-[#dadce0] bg-white px-4 py-2.5 text-sm font-medium text-[#3c4043] shadow-sm transition-all hover:bg-[#f8faff] hover:shadow-md"
        style={{ fontFamily: "'Roboto', -apple-system, sans-serif" }}
      >
        <svg className="h-[18px] w-[18px]" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        Sign in with Google
      </button>
    );
  }

  const initial = (user.name || user.email || "?").trim().charAt(0).toUpperCase();
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 shadow-sm transition hover:shadow-md"
      >
        {user.picture ? (
          <img src={user.picture} alt="" className="h-7 w-7 rounded-full object-cover" />
        ) : (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">{initial}</span>
        )}
        <span className="max-w-[110px] truncate text-xs font-bold text-slate-700">{user.name || user.email}</span>
        <span className={`flex h-5 w-5 items-center justify-center rounded-full ${unlocked ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
          {unlocked ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
        </span>
      </button>
      {open && (
        <div className="absolute right-0 top-11 z-50 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="truncate text-sm font-bold text-slate-900">{user.name}</p>
            <p className="truncate text-xs text-slate-500">{user.email}</p>
            <p className={`mt-1 text-[11px] font-bold ${unlocked ? "text-emerald-600" : "text-slate-400"}`}>
              {unlocked ? "Access: ON \u2014 all unlocked" : "Access: OFF \u2014 locked"}
            </p>
          </div>
          {isOwner && (
            <button
              onClick={() => { setOpen(false); navigate("/admin"); }}
              className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <ShieldCheck className="h-4 w-4 text-indigo-600" /> Admin panel
            </button>
          )}
          <button
            onClick={() => { setOpen(false); logout(); }}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}
