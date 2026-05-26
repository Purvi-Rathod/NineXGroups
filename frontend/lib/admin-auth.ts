const ADMIN_AUTH_KEY = "admin_authenticated";

export const ADMIN_EMAIL = "admin@ninex-group.com";
export const ADMIN_PASSWORD = "admin123";

export function validateAdminCredentials(email: string, password: string): boolean {
  return email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export function setAdminAuthenticated(): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(ADMIN_AUTH_KEY, "true");
  }
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export function clearAdminAuth(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
  }
}
