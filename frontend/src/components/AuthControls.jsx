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
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-700"
      >
        <LogIn className="h-4 w-4" /> Sign in with Google
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
