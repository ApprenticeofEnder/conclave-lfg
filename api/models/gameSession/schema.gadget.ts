import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "gameSession" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "1w7VO68Uzdsu",
  fields: {
    game: {
      type: "belongsTo",
      parent: { model: "game" },
      storageKey: "PsSt57HJjk-K",
    },
    sessionNumber: {
      type: "number",
      default: 0,
      decimals: 0,
      storageKey: "rtbUSeR5aHZU",
    },
    startTime: {
      type: "dateTime",
      includeTime: true,
      storageKey: "AQJPIMLJcOVf",
    },
  },
};
