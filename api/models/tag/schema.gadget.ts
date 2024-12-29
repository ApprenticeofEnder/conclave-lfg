import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "tag" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "RMGb1TOg1N_x",
  fields: {
    games: {
      type: "hasManyThrough",
      sibling: { model: "game", relatedField: "tags" },
      join: {
        model: "gameTags",
        belongsToSelfField: "tag",
        belongsToSiblingField: "game",
      },
      storageKey: "eJOmSbj-1Jzq",
    },
    tag: { type: "string", storageKey: "w_gpx_J1Kdsu" },
  },
};
