import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

interface BucketProps extends Omit<s3.BucketProps, 'enforceSSL' | 'encryption' | 'blockPublicAccess' > {
    bucketName: string;
}


export class Bucket extends s3.Bucket {

    constructor(parent: Construct, id: string, props: BucketProps) {

        const thisProps: s3.BucketProps = {
            ...props,
            enforceSSL: true,
            encryption: s3.BucketEncryption.S3_MANAGED,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
         }
         super(parent, id, thisProps)
    }
}