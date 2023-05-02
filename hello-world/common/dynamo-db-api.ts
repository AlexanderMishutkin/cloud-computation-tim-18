import AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';



export class DynamoDB_API {
    ddb: AWS.DynamoDB;

    constructor() {
        AWS.config.update({ region: "eu-central-1" })
        this.ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"});
    }

    getUser(id: number): Promise<PromiseResult<AWS.DynamoDB.GetItemOutput, AWS.AWSError>> {
        const params = {
            TableName:"Users",
            Key: {
                id:{
                    S: String(id)
                }
            }
        }

        return this.ddb.getItem(params).promise()
    }
}
