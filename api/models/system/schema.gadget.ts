import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "system" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "QkMGi8ofINPK",
  fields: {
    defaultCharacterDetails: {
      type: "richText",
      storageKey: "9-7Bfva-F4k6",
    },
    games: {
      type: "hasMany",
      children: { model: "game", belongsToField: "system" },
      storageKey: "Krje6iNVqG5A",
    },
    name: { type: "string", storageKey: "xXEwmpiINkqi" },
  },
};
