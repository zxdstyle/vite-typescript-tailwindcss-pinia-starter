// @ts-ignore
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: 'http://api.tianyou.test',
	timeout: 8000,
})

instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// config.headers['authorization'] = store.state.system.userInfo.token
		return config
	},
	(error: any) => {
		return Promise.reject(error)
	},
)

instance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response.data.data
	},
	(error: any) => {
		const { code, message } = error || {}
		const err = error?.toString?.() ?? ''
		let errMessage = ''

		if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
			errMessage = '请求超时'
		}
		if (err?.includes('Network Error')) {
			errMessage = '服务器维护中'
		}

		if (errMessage) {
			return Promise.reject(error)
		}

		return Promise.reject(error)
	},
)

export function get(url: string, params = {}, options = {}) {
	return instance.get(url, {
		params,
		...options,
	})
}

export function post(url: string, params = {}, options = {}) {
	return instance.post(url, params, options)
}

export function put(url: string, params = {}, options = {}) {
	return instance.put(url, params, options)
}

export function destroy(url: string, options = {}) {
	return instance.delete(url, options)
}
