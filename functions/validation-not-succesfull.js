/**
 * Mock lambda function that send a message to the owner that the validation failed.
 *
 * @param {Object} event - Input event to the Lambda function
 * { ownerName: 'Marcia', ownerSSN: '12345567', ownerPhone: '358440404040', country: 'Finland', city: 'Helsinki', address: 'Katu 1234', propertyName: 'La casita', validation: [ true, true ] }
 * @param {Object} context - Lambda Context runtime methods and attributes
 *
 * @returns {Object} object - if the validation is good or not
 *
 */
exports.lambdaHandler = async (event, context) => {
  console.log("validation-not-succesfull");
  console.log(event);

  // CAN ADD SOME CODE BASED ON THE INPUTS
  // LATER ON WE CAN SEND MESSAGE TO THE MICROSERVICE OF MESSAGING

  return true;
};
