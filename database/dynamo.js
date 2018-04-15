const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const db = {
  scan: params => {
    return new Promise((resolve, reject) => {
      dynamoDb
        .scan(params)
        .promise()
        .then(data => resolve(data.Items))
        .catch(err => reject(err));
    });
  },
  get: params => {
    return new Promise((resolve, reject) => {
      dynamoDb
        .get(params)
        .promise()
        .then(data => resolve(data.Item))
        .catch(err => reject(err));
    });
  },
  create: params => {
    return new Promise((resolve, reject) => {
      dynamoDb
        .put(params)
        .promise()
        .then(data => resolve(data.Item))
        .catch(err => reject(err));
    });
  },
  update: params => {
    return new Promise((resolve, reject) => {
      dynamoDb
        .update(params)
        .promise()
        .then(data => resolve(data.Item))
        .catch(err => reject(err));
    });
  },
  delete: (params, id) => {
    return new Promise((resolve, reject) => {
      dynamoDb
        .delete(params)
        .promise()
        .then(data => resolve(id))
        .catch(err => reject(err));
    });
  },
};
module.exports = { db };
