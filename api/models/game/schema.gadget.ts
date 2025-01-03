import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "game" model, go to https://conclave-lfg.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Tqs6WfDYoCKF",
  fields: {
    applicationFormLink: {
      type: "url",
      validations: {
        run: ["api/models/game/validations/validate.ts"],
      },
      storageKey: "bhoEXcdC9byt",
    },
    characterDetails: {
      type: "richText",
      storageKey: "Nlz366W_YkRV",
    },
    description: {
      type: "richText",
      validations: { required: true },
      storageKey: "Ygen04W-wd9v",
    },
    descriptionEmbedding: {
      type: "vector",
      storageKey: "l0diYa7RWfZY",
    },
    durationInHours: { type: "number", storageKey: "rHJqrpjsn_95" },
    frequency: {
      type: "enum",
      default: "Weekly",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["Weekly", "Bi-Weekly", "Monthly", "One Shot"],
      storageKey: "2owQydXLYDC3",
    },
    gameApplications: {
      type: "hasMany",
      children: { model: "gameApplication", belongsToField: "game" },
      storageKey: "lnvXEpM7iGmK",
    },
    host: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "vJj29dkKEx1Z",
    },
    players: {
      type: "hasManyThrough",
      sibling: { model: "user", relatedField: "playing" },
      join: {
        model: "gamePlayer",
        belongsToSelfField: "game",
        belongsToSiblingField: "player",
      },
      storageKey: "gQaWhNSYvZyL",
    },
    sampleStartTime: {
      type: "dateTime",
      includeTime: true,
      storageKey: "fDSH2Iw9I4nc",
    },
    sessions: {
      type: "hasMany",
      children: { model: "gameSession", belongsToField: "game" },
      storageKey: "DUv7XBinX3qG",
    },
    title: {
      type: "string",
      validations: {
        required: true,
        stringLength: { min: 5, max: 150 },
      },
      storageKey: "n975FDcprvnf",
    },
    titleEmbedding: { type: "vector", storageKey: "oI9bawERO4kx" },
  },
};
