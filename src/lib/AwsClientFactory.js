class AwsClientFactory {

   static getInstance(AWS) {
      if (theInstance === undefined) {
         theInstance = new AwsClientFactory(AWS);
      }
      return theInstance;
   }

   constructor(AWS) {
      this.AWS = AWS;
   }

   getDynamoDbDocClient() {
      if (this.docClient === undefined) {
         this.docClient = new AWS.DynamoDB.DocumentClient();
      }
      return this.docClient;
   }

   getS3Client() {
      if (this.s3Client === undefined) {
         this.s3Client = new AWS.S3({apiVersion: '2006-03-01'});
      }
      return this.s3Client;
   }

   getSnsClient() {
      if (this.snsClient === undefined) {
         this.snsClient = new AWS.SNS({apiVersion: '2010-03-31'});
      }
      return this.sqsClient;
   }

   getSqsClient() {
      if (this.sqsClient === undefined) {
         this.sqsClient = new AWS.SQS({apiVersion: '2012-11-05'});
      }
      return this.sqsClient;
   }

}

let theInstance;
module.exports = AwsClientFactory;