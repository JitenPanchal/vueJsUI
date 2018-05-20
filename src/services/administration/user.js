import Vue from 'vue'

export function getUsers(search,pageNumber,pageSize) {
  return Vue.http
    .post('http://www.localapi.com/api/users', {
        "search": search,
        "pageNumber": pageNumber,
        "pageSize": pageSize
    })
}
