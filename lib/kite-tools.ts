export const KITE_TOOLS = [
  {
    name: "kpass_get_user",
    description: "Returns information about the currently logged-in kpass user",
    inputSchema: {},
  },
  {
    name: "kpass_list_sessions",
    description: "Lists agent sessions for the current user",
    inputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["active", "pending", "expired"] },
      },
    },
  },
  {
    name: "kpass_get_wallet_balance",
    description: "Returns the KITE and USDC.e balance for the user's wallet",
    inputSchema: {
      type: "object",
      properties: {
        address: { type: "string" },
      },
    },
  },
  {
    name: "kpass_health_check",
    description: "Checks the Kite Passport backend health",
    inputSchema: {},
  },
];
