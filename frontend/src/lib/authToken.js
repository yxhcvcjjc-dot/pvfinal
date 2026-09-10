// Session token fallback (used when third-party cookies are blocked).
const KEY = "session_token";

export const getToken = () => {
  try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; }
};

export const setToken = (t) => {
  try { if (t) localStorage.setItem(KEY, t); } catch (e) { /* ignore */ }
};

export const clearToken = () => {
  try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
};

// Returns Authorization header object when a token is present, else empty.
export const authHeaders = () => {
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
};
