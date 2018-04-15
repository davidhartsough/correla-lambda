const uuid = require('uuid/v1');
const { db } = require('../database/dynamo');
const TableName = process.env.DYNAMODB_TABLE;
const connectors = {
  getPersonById: id => {
    return db.get({
      TableName,
      Key: { id },
    });
  },
  getPeople: () => {
    return people;
  },
  createPerson: person => {
    person.id = uuid();
    return db.create({
      TableName,
      Item: person,
    });
  },
  updatePerson: (id, updatedPerson) => {
    return db.update({
      TableName,
      Key: { id },
      ExpressionAttributeValues: {
        ':username': updatedPerson.username,
        ':email': updatedPerson.email,
      },
      UpdateExpression: 'SET username = :username, email = :email',
      ReturnValues: 'ALL',
    });
  },
  deletePerson: id => {
    return db.delete(
      {
        TableName,
        Key: { id },
      },
      id,
    );
  },
};
module.exports = { connectors };
