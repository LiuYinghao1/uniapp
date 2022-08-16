<template>
	<view class="container">
		<view class="login">
			<view class="login-inp">
				<view class="" style="font-size: 30px;">
					登录
				</view>
				<uni-forms ref="baseForm" class="inps" :modelValue="baseFormData">
					<uni-forms-item >
						<uni-easyinput  v-model="baseFormData.uname" placeholder="请输入用户名" />
					</uni-forms-item>
					<uni-forms-item >
						<uni-easyinput v-model="baseFormData.pwd" placeholder="请输入密码" />
					</uni-forms-item>
					
				</uni-forms>
				<button class="inps" style="background-color: #5ccc84; color:#fff; ">
					登录
				</button>
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
					pwd: '',
				}


			}
		},
		methods: {

		}
	}
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
				.inps{
					margin-top: 20px;
					margin-right: 50px;
					.uni-input-input{
						label-width:100
					}
				}
			}
		}
	}
</style>
