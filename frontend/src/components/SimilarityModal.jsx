import React from "react";
import { X, Star, Repeat, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { MathText } from "@/components/MathText";
import FreeContentModal from "@/components/FreeContentModal";

const DIFF_COLORS = {
  easy: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

// Full-screen (mobile-first) overlay listing questions grouped by "similarity".
export default function SimilarityModal({ groups, chapterName, markLabel, hideAnswer = false, onClose }) {
  const [open, setOpen] = React.useState({}); // { key: bool } -> answer revealed
  const [showFree, setShowFree] = React.useState(false); // locked chapters -> "Free for now" card
  const [gi, setGi] = React.useState(0); // current similar-group index
  const bodyRef = React.useRef(null);
  const total = groups ? groups.length : 0;
  const goTo = (n) => { setGi(n); if (bodyRef.current) bodyRef.current.scrollTo(0, 0); };

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
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#F8FAFC]">
      <div className="flex h-full w-full flex-col">
        {/* header */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 px-4 py-3">
          <Star className="h-4 w-4 fill-amber-600 text-amber-700" />
          <div className="min-w-0">
            <p className="truncate text-sm font-black uppercase tracking-wide text-amber-900">Similar Questions</p>
            <p className="truncate text-[11px] font-semibold text-amber-800/80">{chapterName}{markLabel ? ` · ${markLabel}` : ""}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-amber-900 transition hover:bg-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* body */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto px-3 py-4 md:px-5">
          {!groups || groups.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
              <p className="text-sm font-semibold text-slate-600">No similar questions added yet.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {[groups[Math.min(gi, total - 1)]].map((grp) => (
                <section key={grp.sim}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-amber-950 shadow-sm">{grp.sim}</span>
                    <span className="text-xs font-bold text-amber-700">{grp.items.length} similar</span>
                  </div>
                  <div className="space-y-3">
                    {grp.items.map((q, i) => {
                      const key = `${grp.sim}-${i}`;
                      return (
                        <div key={key} className={`rounded-xl border p-3 shadow-sm ${q.imp ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white"}`}>
                          <div className="mb-2 flex flex-wrap items-center gap-1.5">
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 text-[11px] font-black text-blue-700">
                              {i + 1}
                            </span>
                            <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${DIFF_COLORS[q.difficulty] || DIFF_COLORS.easy}`}>
                              {q.difficulty}
                            </span>
                            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">{q.marks}</span>
                            {q.imp && (
                              <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-red-600 ring-1 ring-inset ring-red-300">
                                Imp
                              </span>
                            )}
                            <span className="ml-auto inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">
                              <Repeat className="h-3 w-3" /> ×{q.total}
                            </span>
                          </div>

                          <MathText value={q.question} className="text-[12px] leading-relaxed text-slate-900" />

                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {q.repetitions.map((r, ri) => (
                              <span key={ri} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                                {r.year} · {r.exam}
                              </span>
                            ))}
                          </div>

                          {(q.answer || hideAnswer) && (
                          <button
                            type="button"
                            onClick={() => (hideAnswer ? setShowFree(true) : setOpen((o) => ({ ...o, [key]: !o[key] })))}
                            className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-3.5 py-1.5 text-[11px] font-bold text-white shadow-sm ring-1 ring-inset ring-white/25 transition hover:from-blue-600 hover:to-blue-700"
                          >
                            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open[key] && !hideAnswer ? "rotate-180" : ""}`} />
                            {open[key] && !hideAnswer ? "Hide Answer" : "View Answer"}
                          </button>
                          )}
                          {open[key] && !hideAnswer && (
                            <div className="mt-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5">
                              <p className="mb-1 text-[10px] font-black uppercase tracking-wide text-amber-700">Answer</p>
                              <MathText value={q.answer} className="text-[12px] leading-relaxed text-slate-800" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>

        {/* footer: Previous / Next between similar groups */}
        {groups && total > 1 && (
          <div className="flex items-center gap-2 border-t border-slate-200 bg-white px-4 py-3">
            <button
              disabled={gi === 0}
              onClick={() => goTo(gi - 1)}
              className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <span className="mx-auto text-xs font-bold text-slate-400">{Math.min(gi, total - 1) + 1} / {total}</span>
            <button
              disabled={gi >= total - 1}
              onClick={() => goTo(gi + 1)}
              className="flex items-center gap-1 rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-amber-600 disabled:opacity-40"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      {showFree && <FreeContentModal onClose={() => setShowFree(false)} />}
    </div>
  );
}
