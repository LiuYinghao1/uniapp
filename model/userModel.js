import Http from '@/utils/http.js'

class UserModel extends Http {
	/**
	 * 用户注册接口
	 */
	static userRegister(data) {
		return Http.request({
			url: '/mobile/reg',
			method: "POST",
			data
		})
	}

	/**
	 * 用户登录接口
	 */
	static userLogin(data) {
		return Http.request({
			url: '/mobile/login',
			method: 'POST',
			data
		})
	}
}
export default UserModel
