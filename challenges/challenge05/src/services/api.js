import axios from 'axios';

const URL = 'https://my-json-server.typicode.com';
const USER_NAME = 'joserubensveiga';
const REPO_NAME = 'go-stack-rocketseat';

const api = axios.create({
  baseURL: `${URL}/${USER_NAME}/${REPO_NAME}`,
});

export default api;
