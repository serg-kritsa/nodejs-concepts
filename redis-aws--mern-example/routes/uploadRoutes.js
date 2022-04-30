const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');

//          AMAZON S3 Overview
// Identity and Access Management
// IAM -> User Credentials -> AMAZON S3 
  // create S3 bucket
  // create IAM policy for aws service
  // create user and attach policy to him
  // put object in S3 bucket
    // get signed url 
    // send file using provided url

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});

module.exports = app => {
  app.get('/api/upload', requireLogin, (req, res) => {
    const key = `${req.user.id}/${uuid()}.jpeg`;
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'some-net-bucket',
        ContentType: 'image/jpeg',
        Key: key
      },
      (err, url) => res.send({ key, url })
    );
  });
};
