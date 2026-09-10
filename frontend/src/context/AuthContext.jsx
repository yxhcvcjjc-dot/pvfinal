import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext) || {};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch(`${API}/auth/me`, { credentials: "include" });
      if (!res.ok) throw new Error("not authenticated");
      setUser(await res.json());
    } catch (e) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // CRITICAL: returning from OAuth callback -> skip /me, let AuthCallback run first.
    if (window.location.hash?.includes("session_id=")) { setLoading(false); return; }
    checkAuth();
  }, [checkAuth]);

  const logout = async () => {
    try { await fetch(`${API}/auth/logout`, { method: "POST", credentials: "include" }); } catch (e) { /* ignore */ }
    setUser(null);
  };

  const login = () => {
    // REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
    const redirectUrl = window.location.origin + "/";
    window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
  };

  const value = {
    user, setUser, loading, checkAuth, logout, login,
    unlocked: !!user?.access,
    isOwner: !!user?.is_owner,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
