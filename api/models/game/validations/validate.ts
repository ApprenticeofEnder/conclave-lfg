import type { GameApplicationFormLinkFieldValidationContext } from "gadget-server";

/**
 * Validation code for field applicationFormLink on game
 */
export default async ({api, record, errors, logger, field}: GameApplicationFormLinkFieldValidationContext) => {
  // TODO: implement validation
  // Add an allowlist of URLs to compare against
  // access things like `record.applicationFormLink` to get the fields's data
  // add to the `errors` with `errors.add('applicationFormLink', "did not pass the validation")`
};