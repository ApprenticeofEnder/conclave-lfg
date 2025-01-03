import { Client } from "@gadget-client/conclave-lfg";

export const api = new Client({ environment: window.gadgetConfig.environment });
