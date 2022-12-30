import { config } from './config';

/**
 * This is the configuration you should consume through 'Amplify.configure'
 */
const amplifyConfig = {
  Auth: {
    mandatorySignIn: true,
    region: 'ap-southeast-2',
    userPoolId: 'ap-southeast-2_GTUUH850K',
    identityPoolId: 'ap-southeast-2:342bde33-d1b4-4559-8c9b-75460b4ee29b',
    userPoolWebClientId: '323i7llgt6t5vehrlsbvvsn4mb',
    oauth: {
      redirectSignIn: 'http://localhost:3000/signin',
      redirectSignOut: 'http://localhost:3000/signout',
      scope: ['email', 'openid', 'aws.cognito.signin.user.admin'],
      responseType: 'code',
    },
  },
  aws_appsync_graphqlEndpoint: 'https://tkd23fw3fbhaxdumsd7zjzqpau.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  aws_appsync_region: 'ap-southeast-2',
  aws_appsync_authenticationType: 'AWS_IAM',
  federationTarget: 'COGNITO_USER_POOLS',
};

export default amplifyConfig;
