import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "gameTags" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "RUZuGEAY5UUr",
  fields: {
    game: {
      type: "belongsTo",
      parent: { model: "game" },
      storageKey: "s9eux5Pozq89",
    },
    tag: {
      type: "belongsTo",
      parent: { model: "tag" },
      storageKey: "8trmI-N9web8",
    },
  },
};
