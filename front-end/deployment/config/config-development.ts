/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'ap-southeast-2',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '323i7llgt6t5vehrlsbvvsn4mb',
  USER_POOL_ID: 'ap-southeast-2_GTUUH850K',
  IDENTITY_POOL_ID: 'ap-southeast-2:342bde33-d1b4-4559-8c9b-75460b4ee29b',
  GRAPHQL_ENDPOINT: 'https://tkd23fw3fbhaxdumsd7zjzqpau.appsync-api.ap-southeast-2.amazonaws.com/graphql',
};

export default configDevelopment;
