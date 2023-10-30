// import { paths } from 'api/paths'
export const apiPath = {
  login: `${import.meta.env.VITE_API_BASE_PATH}/api/login`,
  signup: `${import.meta.env.VITE_API_BASE_PATH}/api/signup`,
  // login: `${import.meta.env.VITE_API_BASE_PATH}/api${paths.login}`,
  // signup: `${import.meta.env.VITE_API_BASE_PATH}/api${paths.signup}`,
}
