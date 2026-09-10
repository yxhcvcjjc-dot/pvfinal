import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
export default function AuthCallback() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current) return;
    hasProcessed.current = true;
    const hash = window.location.hash || "";
    const m = hash.match(/session_id=([^&]+)/);
    const sessionId = m ? m[1] : null;
    (async () => {
      if (!sessionId) { navigate("/", { replace: true }); return; }
      try {
        const res = await fetch(`${API}/auth/session`, {
          method: "POST",
          credentials: "include",
          headers: { "X-Session-ID": sessionId },
        });
        if (res.ok) setUser(await res.json());
      } catch (e) { /* ignore */ }
      window.history.replaceState(null, "", "/");
      navigate("/", { replace: true });
    })();
  }, [navigate, setUser]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
      <p className="text-sm font-semibold text-slate-600">Signing you in\u2026</p>
    </div>
  );
}
