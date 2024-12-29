import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "gameInvites" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Qi1eqcYrmK8C",
  fields: {
    game: {
      type: "belongsTo",
      parent: { model: "game" },
      storageKey: "4O5v0aH5YZ8E",
    },
    player: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "rDFZ5QkTQfs6",
    },
  },
};
