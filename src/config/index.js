const DEV_API_BASEURL = 'http://localhost:8000/';
const PRODUCTION_API_BASEURL = '';

let apiBaseUrl;

switch (process.env.NODE_ENV) {
  case 'development':
    apiBaseUrl = DEV_API_BASEURL;
    break;

  default:
    apiBaseUrl = PRODUCTION_API_BASEURL;
    break;
}

export const API_BASEURL = apiBaseUrl;
