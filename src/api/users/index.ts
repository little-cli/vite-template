import axiosServer from '@/utils/axios'

function fetchUsers(params?: {}) {
  return axiosServer({
    method: 'GET',
    url: '/users/wokemeiyoukong',
    params
  })
}

function other() {}

export { fetchUsers, other }
