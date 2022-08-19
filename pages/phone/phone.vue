<template>
	<view class="container">
		<view class="" style="padding-top: 5px; padding-left: 5px;" @click="handleBackPage"><uni-icons style="color: #fff; font-size:24px; " type="back"></uni-icons></view>
		<view class="login">
			<view class="login-inp">
				<view class="" style="font-size: 30px;">绑定手机号</view>
				<uni-forms class="inps">
					<uni-forms-item><uni-easyinput v-model="form.phone" placeholder="请输入手机号" /></uni-forms-item>
					<uni-forms-item><uni-easyinput v-model="form.code" placeholder="验证码" /></uni-forms-item>
					
				</uni-forms>
				<button class="inps" @click="handleSubmitForm" style="background-color: #5ccc84; color:#fff; ">绑定</button>
			</view>
		</view>
	</view>
</template>

<script>
import UserModel from '@/model/userModel.js';
export default {
	data() {
		return {
			form: {
				phone: '',
				code: '',
			}
		};
	},
	methods: {
		
		// 返回上一级
		handleBackPage() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 提交表单数据
		handleSubmitForm() {
			uni.showLoading({ title: '提交中...', mask: false })
		},
		//登录
		async handleLoginAccont() {
			
			try {
				const data = this.loadsh.cloneDeep(this.form);
				const res = await UserModel.userLogin(data);
				this.removeForm();
				// this.$store.dispatch("setUser", res)
				console.log('1');
				uni.navigateTo({
					url: '/pages/phone/phone'
				});
			} catch (e) {
				console.log(e);
			} finally {
				uni.hideLoading();
			}
		},
		// 清空表单

		removeForm() {
			this.form = {
				username: '',
				password: '',
				repassword: ''
			};
		},

		// 获取checkbox状态
		handleCheckboxStatus(event) {
			this.check = Boolean(event.detail.value.length);
			console.log(this.check);
		}
	}
};
</script>

<style lang="scss">
.container {
	padding: 0;
	margin: 0;
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(to right, #3efcb2, #6cd9ed);

	.login {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 150px;
		background-color: #fff;
		border-radius: 20px 20px 0 0;

		.login-inp {
			margin-top: 40px;
			margin-left: 30px;
			.inps {
				margin-top: 20px;
				margin-right: 50px;
				.uni-input-input {
					label-width: 100;
				}
			}
		}
		.login-text {
			display: flex;
			margin-left: 30px;
			justify-content: space-between;
			margin-right: 50px;
			margin-top: 20px;
		}
		.login-text :nth-child(1) {
			color: #5ccc84;
		}
		.login-text :nth-child(2) {
			color: #ccc;
		}
		.wx {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-top: 50px;
			.icon-weixin {
				font-size: 50px;
				color: #5ccc84;
			}
			.checkbox {
				margin-top: 30px;
				font-size: 16px;
				color: #666;
			}
		}
	}
}
</style>
