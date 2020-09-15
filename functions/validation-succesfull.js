const AWS = require("aws-sdk");
const eventbridge = new AWS.EventBridge();

/**
 * Mock lambda function that send a message to the owner that the validation succedeed and adds the owner and property to the system.
 *
 * @param {Object} event - Input event to the Lambda function
 * Eg:
 * { ownerName: 'Marcia', ownerSSN: '12345567', ownerPhone: '358440404040', country: 'Finland', city: 'Helsinki', address: 'Katu 1234', propertyName: 'La casita', validation: [ true, true ] }
 * @param {Object} context - Lambda Context runtime methods and attributes
 *
 * @returns {Object} object - if the validation is good or not
 *
 */
exports.lambdaHandler = async (event, context) => {
  console.log("validation-succesfull");
  console.log(event);

  // CAN ADD SOME CODE BASED ON THE INPUTS
  // LATER ON WE CAN SEND MESSAGE TO THE MICROSERVICE OF MESSAGING

  // SENDS A MESSAGE TO THE PROPERTY MICROSERVICE TO ADD THE PROPERTY
  console.log("send a message to the property microservice");

  const data = await putEventInEventBridge(event);
  console.log(data);
  console.log("message sent");
  return true;
};

function putEventInEventBridge(event) {
  const detail = {
    ownerName: event.ownerName,
    ownerSSN: event.ownerSSN,
    ownerPhone: event.ownerPhone,
    country: event.country,
    city: event.city,
    address: event.address,
    propertyName: event.propertyName,
  };

  var params = {
    Entries: [
      {
        Detail: JSON.stringify(detail),
        DetailType: "property",
        Source: "custom.addProperty",
      },
    ],
  };

  console.log(params);
  return eventbridge.putEvents(params).promise();
}
