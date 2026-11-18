/** Novus by Pendo lifecycle calls: initialize at entry, identify on sign-in, clear on sign-out. */
import type { Profile } from "../api/client";

/** Boots the agent once per page load as an anonymous visitor (or the visitor it remembers). */
export function initializePendo(): void {
  window.pendo?.initialize({ visitor: { id: "" } });
}

/** Registers the signed-in user and their organization with the agent. */
export function identifyPendoVisitor(profile: Profile): void {
  window.pendo?.identify({
    visitor: {
      id: profile.id,
      email: profile.email,
      full_name: profile.name,
      role: profile.role,
      organizationId: profile.organization.id,
      active: profile.active,
      createdAt: profile.createdAt,
    },
    account: {
      id: profile.organization.id,
      name: profile.organization.name,
      plan: profile.organization.plan,
    },
  });
}

/** Resets the agent to a new anonymous visitor so the next user isn't tracked as this one. */
export function clearPendoSession(): void {
  window.pendo?.clearSession?.();
}
