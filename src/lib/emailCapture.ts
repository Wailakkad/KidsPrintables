export const EMAIL_FORM_URL: string =
  (import.meta.env.VITE_EMAIL_FORM_URL as string | undefined) || '';

export const EMAIL_POPUP_STORAGE_KEY = 'kp_email_capture_v1';
export const EMAIL_POPUP_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
