// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:1337/',
  url_api_google:'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=',
  url_api_google_ip:'http://ip-api.com/json',
  url_viacep:'https://viacep.com.br/ws/'
};
