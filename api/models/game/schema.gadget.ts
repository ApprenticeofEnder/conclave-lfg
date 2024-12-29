import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "game" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "OaI3til2inhh",
  fields: {
    characterDetails: {
      type: "richText",
      storageKey: "uWzC2yr9qMl9",
    },
    description: { type: "richText", storageKey: "49qQN6Nou2GM" },
    frequency: {
      type: "enum",
      default: "WEEKLY",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["WEEKLY", "BI_WEEKLY", "MONTHLY", "ONE_SHOT"],
      storageKey: "IAoThIxKAxvZ",
    },
    nextSession: {
      type: "dateTime",
      includeTime: true,
      storageKey: "TwdBTkAauFYj",
    },
    owner: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "ETuPQWKy97Ly",
    },
    title: {
      type: "string",
      validations: { stringLength: { min: 5, max: 200 } },
      storageKey: "0LNY_QnJsPDY",
    },
  },
};
