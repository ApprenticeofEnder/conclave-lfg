import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "gamePlayers" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Eve8rDhZiwaj",
  fields: {
    game: {
      type: "belongsTo",
      parent: { model: "game" },
      storageKey: "nUuSx9g4xsEh",
    },
    player: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "BYHxfQrFiqPn",
    },
  },
};
