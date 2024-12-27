export default ({ env }) => ({
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                baseUrl: env('R2_CDN_URL'),
                rootPath: env('R2_ROOT_PATH'),
                credentials: {
                    accessKeyId: env('R2_ACCESS_KEY_ID'),
                    secretAccessKey: env('R2_ACCESS_SECRET'),
                },
                region: env('R2_REGION'),
                endpoint: env('R2_ENDPOINT'),
                params: {
                    Bucket: env('R2_BUCKET'),
                },
            },
        },
    },
});
