import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "gameSession" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "wsWIFsrGmgef",
  fields: {
    durationInHoursMax: {
      type: "number",
      default: 4,
      decimals: 1,
      validations: {
        numberRange: { min: 0, max: 6 },
        run: ["api/models/gameSession/validations/validate.js"],
      },
      storageKey: "oQGbDq2nd8Vh",
    },
    durationInHoursMin: {
      type: "number",
      default: 3,
      decimals: 1,
      validations: { numberRange: { min: 0, max: 6 } },
      storageKey: "oKVyI734um21",
    },
    game: {
      type: "belongsTo",
      parent: { model: "game" },
      storageKey: "igbYZjuhwYnO",
    },
    startTime: {
      type: "dateTime",
      includeTime: true,
      storageKey: "TDZmsqfTPlY5",
    },
  },
};
