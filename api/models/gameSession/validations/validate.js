/**
* Validation code for field durationInHoursUpperBound on gameSession
* @param {import("gadget-server").GameSessionDurationInHoursUpperBoundFieldValidationContext } context - All the useful bits for running this validation.
*/
export default async ({api, record, errors, logger, field}) => {
  if(record.durationInHoursMax < record.durationInHoursMin){
    errors.add("durationInHoursMax", "The maximum duration must be at least as high as the minimum duration.")
  }
  // TODO: implement validation
  // access things like `record.durationInHoursUpperBound` to get the fields's data
  // add to the `errors` with `errors.add('durationInHoursUpperBound', "did not pass the validation")`
};