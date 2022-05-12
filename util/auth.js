export function createAuthToken() {
    const authString =
        process.env.HTTP_AUTH_USERNAME + ':' + process.env.HTTP_AUTH_PASSWORD;
    return 'Basic ' + Buffer.from(authString).toString('base64');
}
