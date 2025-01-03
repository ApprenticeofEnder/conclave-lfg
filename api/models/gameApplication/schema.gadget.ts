import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "gameApplication" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "mOSIb95X4HNx",
  fields: {
    game: {
      type: "belongsTo",
      parent: { model: "game" },
      storageKey: "xdWXGO_QXCV0",
    },
    player: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "ZLy6j2Cm9ND_",
    },
  },
};
