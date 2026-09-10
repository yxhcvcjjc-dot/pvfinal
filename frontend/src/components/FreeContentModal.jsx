import React from "react";
import { X, Gift, Atom, Sigma } from "lucide-react";

// A very simple info card that lists the content currently free to access.
// Shown when a locked/coming-soon subject (e.g. Chemistry) opens "Similarity".
export default function FreeContentModal({ onClose = () => {} }) {
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm p-4 sm:items-center">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 px-6 pb-7 pt-7 text-center text-white">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
            <Gift className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight">Free for now</h2>
          <p className="mt-1 text-sm text-emerald-50">These chapters are open — no subscription needed</p>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6 py-6">
          {/* Physics */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Atom className="h-4 w-4" />
              </span>
              <p className="text-sm font-extrabold text-slate-900">Physics</p>
            </div>
            <div className="pl-9">
              <p className="text-[13px] font-semibold text-slate-700">Electric Charges &amp; Field</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {["2M", "3M", "5M", "Numeric"].map((t) => (
                  <span key={t} className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-bold text-blue-700">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Maths */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-white">
                <Sigma className="h-4 w-4" />
              </span>
              <p className="text-sm font-extrabold text-slate-900">Maths</p>
            </div>
            <ul className="space-y-2 pl-9">
              {[
                { name: "Relation and Function", mark: "5M" },
                { name: "Matrix", mark: "5M" },
                { name: "Linear Programming", mark: "6M" },
                { name: "Determinant", mark: "4M" },
              ].map((r) => (
                <li key={r.name} className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-slate-700">{r.name}</span>
                  <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-[11px] font-bold text-violet-700">{r.mark}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 px-6 pb-6 pt-4">
          <button
            onClick={onClose}
            className="w-full rounded-2xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
