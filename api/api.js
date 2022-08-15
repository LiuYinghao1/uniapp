import api from './request.js'

export default {
	//获取首页数据
	getIndexData() {
		return api.get('/mobile/index')
	},
	//获取可用秒杀列表
	getFlashsale(params = {}) {
		return api.get("/mobile/falshsale", params)
	},
	// 获取可用拼团列表
	getGroup(params = {}) {
		return api.get('mobile/group', params)
	}
}
