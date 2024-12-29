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
    durationInHours: {
      type: "number",
      default: 3,
      decimals: 1,
      validations: { numberRange: { min: 0, max: 6 } },
      storageKey: "3cn-GjOr0GPf",
    },
    frequency: {
      type: "enum",
      default: "WEEKLY",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: ["WEEKLY", "BI_WEEKLY", "MONTHLY", "ONE_SHOT"],
      storageKey: "IAoThIxKAxvZ",
    },
    owner: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "ETuPQWKy97Ly",
    },
    sessions: {
      type: "hasMany",
      children: { model: "gameSession", belongsToField: "game" },
      storageKey: "1jtfAp3xnUsv",
    },
    startHour: { type: "string", storageKey: "vo5Nzj-tI7cq" },
    startMinute: { type: "string", storageKey: "TiZxSUYREEcS" },
    system: {
      type: "belongsTo",
      parent: { model: "system" },
      storageKey: "03M8Z6qYP7gl",
    },
    tags: {
      type: "hasManyThrough",
      sibling: { model: "tag", relatedField: "games" },
      join: {
        model: "gameTags",
        belongsToSelfField: "game",
        belongsToSiblingField: "tag",
      },
      storageKey: "hqRI7HPMuY2-",
    },
    title: {
      type: "string",
      validations: { stringLength: { min: 5, max: 200 } },
      storageKey: "0LNY_QnJsPDY",
    },
    weekday: {
      type: "enum",
      acceptMultipleSelections: false,
      acceptUnlistedOptions: false,
      options: [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY",
      ],
      storageKey: "MfP59tM7s3aK",
    },
  },
};
