
import axios from 'axios'
import { APIMAP } from './ApiMap'

axios.defaults.baseURL = "https://cuntabusines.mx5918.com/index.php/api/"
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 20000

const initApiConfig = (key, params) => {
  let url = APIMAP[key]
  if (params && params['uid'] && url.indexOf(':uid') > -1) {
    return url.replace(':uid', params['uid'])
  } else if (url.indexOf(':uid') > -1) {
    return url.replace(':uid', '')
  }
  return url
}

// loading


axios.interceptors.request.use((config) => {
  if ((config.params && config.params.hl) || (config.data && config.data.hl)) {
    console.log(111)
  }
  if (config.method === 'get' || config.method === 'delete') {
    config.params = Object.assign(config.params || {})
  } else {
    config.data = Object.assign(config.data || {})
  }
  if (localStorage.getItem('admin_token')) {
    config.headers['Api-Access-Token'] = localStorage.getItem('admin_token')
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  if (res.data.code === 301 || res.data.code === 302) {
    return
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

export default {
  get: (key, params) => {
    const url = initApiConfig(key, params)
    return axios.get(url, { params: params })
  },

  post: (key, data) => {
    const url = initApiConfig(key, data)
    return axios.post(url, data)
  },

  put: (key, data) => {
    const url = initApiConfig(key, data)
    return axios.put(url, data)
  },

  delete: (key, params) => {
    const url = initApiConfig(key, params)
    return axios.delete(url, { params: params })
  },

  download: (key, params) => {
    const url = initApiConfig(key, params)
    return axios({
      url: url,
      params: params,
      method: 'GET',
      responseType: 'blob'
    })
  }
}