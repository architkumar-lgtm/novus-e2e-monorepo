/** Browser track events for the admin portal, sent through the Pendo agent when it is loaded. */

declare global {
  interface Window {
    pendo?: {
      track: (eventName: string, metadata?: Record<string, string | boolean | number>) => void;
    };
  }
}

export function trackAdminEvent(
  eventName: string,
  metadata: Record<string, string | boolean | number>
): void {
  window.pendo?.track(eventName, metadata);
}
