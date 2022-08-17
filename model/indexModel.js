import Http from '@/utils/http.js'

class IndexModel extends Http {
	/**
	 * 获取首页数据接口
	 */
	static getMobileIndex() {
		return Http.request({
			url: '/mobile/index'
		})

	}
	/**
	 * 获取优惠券数据接口
	 */
	static getMobileICoupon() {
		return Http.request({
			url: '/mobile/coupon',
			method: 'GET',
			header: {
				appid: 'bd9d01ecc75dbbaaefce'
			}
		})
	}
	/**
	 * 获取可用拼团列表	
	 */
	static getMobileICoupon() {
		return Http.request({
			url: '/mobile/coupon',
			method: 'GET'
		})
	}


	/**
	 * 获取可用秒杀列表
	 */
	static getMobileActivity(type, data) {
		return Http.request({
			url: '/mobile/' + type,
			method: 'GET',
			data
		})
	}
}
export default IndexModel
