/**
 * Mock lambda function that returns if a property is valid.
 *
 * @param {Object} event - Input event to the Lambda function
 *  eg:
 * {
 *   ownerName: 'Marcia',
 *   ownerSSN: '12345567',
 *   ownerPhone: '358440404040',
 *    country: 'Finland',
 *    city: 'Helsinki',
 *    address: 'Katu 1234',
 *    propertyName: 'La casita'
 * }
 * @param {Object} context - Lambda Context runtime methods and attributes
 *
 * @returns {Object} object - if the validation is good or not
 *
 */
exports.lambdaHandler = async (event, context) => {
  console.log("validate-property");
  console.log(event);

  // validate if all the mandatory owner fields are there
  if (event.country && event.city && event.address && event.propertyName)
    return true;

  console.log("something failed");
  return false;
};
