/** Global `pendo` agent defined by the Novus by Pendo install script in index.html. */

type PendoMetadataValue = string | number | boolean;

interface PendoIdentity {
  visitor: { id: string; [field: string]: PendoMetadataValue };
  account?: { id: string; [field: string]: PendoMetadataValue };
}

interface PendoAgent {
  initialize: (options: PendoIdentity) => void;
  identify: (identity: PendoIdentity) => void;
  track: (eventName: string, metadata?: Record<string, PendoMetadataValue>) => void;
  // Not stubbed by the install script, so it only exists once the agent has loaded.
  clearSession?: () => void;
}

// Undefined when the install script did not run (for example, blocked by a CSP or an extension).
declare var pendo: PendoAgent | undefined;
