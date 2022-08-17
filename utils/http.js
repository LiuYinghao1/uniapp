import APIConfig from '@/config/config.js'
import exexptionMessage from '@/config/exception-message.js'


class Http {
	//请求拦截器
	static async _beforeRequest(config) {
		config.header = {
			appid: APIConfig.appid
		}
		return config
	}


	//http请求
	static async request({
		url,
		method = "GET",
		data = {},
		header = {},
		...options
	}) {
		const config = await Http._beforeRequest({
			url,
			method,
			data,
			header,
			...options
		})
		config.url = APIConfig.baseURL + config.url
		const response = await uni.request(config)
		return await Http._beforeResponse(response)
	}


	//响应拦截器
	static async _beforeResponse(response) {
		const [error, res] = response

		//请求失败
		if (res.statusCode !== 200 || res.data.msg === 'fail') {
			Http._showError(res.statusCode, res.data.data)
		}

		//token过期处理
		
		
		return res.data.data
	}

	//请求失败信息提示
	static _showError(code, mag) {
		let title = ""
		title = exexptionMessage[code] || msg || '发生未知错误'
		uni.showToast({
			title,
			icon: 'none',
			duration: 3000
		})
	}

}

export default Http
