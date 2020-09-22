import request from '@/plugins/request.ts';

const APIS = {
  login: '/login',
};

export function login(data: object) {
  return request.post(APIS.login, data);
}
