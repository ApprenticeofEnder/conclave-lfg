import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "userAvailability" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "zPDd1zmywz_6",
  fields: {
    endTime: {
      type: "dateTime",
      includeTime: true,
      storageKey: "MTCwgTNLFuzp",
    },
    startTime: {
      type: "dateTime",
      includeTime: true,
      storageKey: "XqFLSImstiq4",
    },
    weekday: { type: "number", storageKey: "_0MtcM_BRnPF" },
  },
};
