<template>
	<view class="container">
		<view class="login">
			<view class="login-inp">
				<view class="" style="font-size: 30px;">{{ handleStatus === true ? '注册' : '登录' }}</view>
				<uni-forms ref="baseForm" class="inps" :modelValue="baseFormData">
					<uni-forms-item><uni-easyinput v-model="baseFormData.uname" placeholder="请输入用户名" /></uni-forms-item>
					<uni-forms-item><uni-easyinput v-model="baseFormData.pwd" placeholder="请输入密码" /></uni-forms-item>
					<uni-forms-item v-if="handleStatus"><uni-easyinput v-model="baseFormData.pwd" placeholder="请输入确认密码" /></uni-forms-item>
				</uni-forms>
				<button class="inps" style="background-color: #5ccc84; color:#fff; ">{{ handleStatus === true ? '注册' : '登录' }}</button>
			</view>
			<view class="login-text">
				<view class="" @click="handleRegister">{{ handleStatus === true ? '去登录' : '立即注册' }}</view>
				<view class="">忘记密码？</view>
			</view>
			<view class="wx">
				<span class="iconfont icon-weixin"></span>
				<view class="checkbox">
					<checkbox />

					<span>已阅读并同意用户协议&隐私声明</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			baseFormData: {
				uname: '',
				pwd: ''
			},
			handleStatus: false
		};
	},
	methods: {
		handleRegister() {
			this.handleStatus = !this.handleStatus;
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
		top: 100px;
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
		.wx{
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-top: 50px;
			.icon-weixin{
				font-size: 50px;
				color: #5ccc84;
			}
			.checkbox{
				
				margin-top: 30px;
				font-size: 16px;
				color: #666;
			}
		}
	}
}
</style>
