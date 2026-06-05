import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { AWS_REGION } from '$env/static/private';

const client = new DynamoDBClient({
	region: AWS_REGION
});

export const db = DynamoDBDocumentClient.from(client);
