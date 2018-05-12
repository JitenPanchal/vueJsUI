import Vue from 'vue'

export function loginService(username, password) {
  return Vue.http
    .post('http://www.localapi.com/api/security/login', {
      username,
      password
    })
}
