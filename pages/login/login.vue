<template>
	<view class="container">
		<view class="" style="padding-top: 5px; padding-left: 5px;" @click="handleBackPage"><uni-icons style="color: #fff; font-size:24px; " type="back"></uni-icons></view>
		<view class="login">
			<view class="login-inp">
				<view class="" style="font-size: 30px;">{{ handleStatus === true ? '注册' : '登录' }}</view>
				<uni-forms class="inps">
					<uni-forms-item><uni-easyinput v-model="form.username" placeholder="请输入用户名" /></uni-forms-item>
					<uni-forms-item><uni-easyinput v-model="form.password" placeholder="请输入密码" /></uni-forms-item>
					<uni-forms-item v-if="handleStatus"><uni-easyinput v-model="form.repassword" placeholder="请输入确认密码" /></uni-forms-item>
				</uni-forms>
				<button class="inps" @click="handleSubmitForm" style="background-color: #5ccc84; color:#fff; ">{{ handleStatus === true ? '注册' : '登录' }}</button>
			</view>
			<view class="login-text">
				<view class="" @click="handleRegister">{{ handleStatus === true ? '去登录' : '立即注册' }}</view>
				<view class="">忘记密码？</view>
			</view>
			<view class="wx">
				<span class="iconfont icon-weixin"></span>
				<checkbox-group v-if="!handleStatus" @change="handleCheckboxStatus">
					<label>
						<checkbox class="checkbox" :checked="check" />
						<text>已阅读并同意用户协议 & 隐私声明</text>
					</label>
				</checkbox-group>
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
				username: '',
				password: '',
				repassword: ''
			},
			handleStatus: false,
			check: false
		};
	},
	methods: {
		// 注册登录取反
		handleRegister() {
			this.handleStatus = !this.handleStatus;
			this.handleStatus == true ? '登录' : '注册';
		},
		// 返回上一级
		handleBackPage() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 提交表单数据
		handleSubmitForm() {
			uni.showLoading({ title: '提交中...', mask: false });
			this.handleStatus == true ? this.handleRegisterAccont() : this.handleLoginAccont();
		},
		// 注册
		async handleRegisterAccont() {
			try {
				const data = this.loadsh.cloneDeep(this.form);
				const res = await UserModel.userRegister(data);
				// console.log(res);
				uni.showToast({
					title: '注册成功',
					icon: 'none'
				});
				this.removeForm();
				this.handleStatus = false;
			} catch (e) {
				console.log(e);
			} finally {
				uni.hideLoading();
			}
		},
		//登录
		async handleLoginAccont() {
			if (!this.check) {
				return uni.showToast({
					title: '请勾选阅读并同意用户协议&隐私声明',
					icon: 'none'
				});
			}
			try {
				const data = this.loadsh.cloneDeep(this.form);
				delete data.repassword;
				const res = await UserModel.userLogin(data);
				this.removeForm();
				this.$store.dispatch('setUser', res);
				this.handleToBindPhonePage();
				uni.navigateBack({
					delta: 1
				});
			} catch (e) {
				console.log(e);
			} finally {
				uni.hideLoading();
			}
		},

		handleToBindPhonePage() {
			const user = this.$store.state.user;
			if (!user.phone) {
				setTimeout(() => {
					uni.redirectTo({
						url: '/pages/phone/phone'
					});
				}, 350);
				return;
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
