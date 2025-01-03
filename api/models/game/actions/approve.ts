import { deleteRecord, ActionOptions } from "gadget-server";

export const run: ActionRun = async ({ params, record, logger, api, connections }) => {
  // TODO: Add logic to add player to game
  await deleteRecord(record);
};

export const options: ActionOptions = {
  actionType: "delete",
};