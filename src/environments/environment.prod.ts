import auth_config from '../../auth_config.json';
//
export const environment = {
  production: true,
  auth: {
    ...auth_config,
    redirectUri: window.location.origin,
  },
};
