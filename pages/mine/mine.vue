<template>
	<view class="container">
		<view class="con-top">
			<view class="login-img" @click="handleLogin">
				<view class="header-img" style="border-radius: 50%; width: 80px; height: 80px; background-color: #fff;">

				</view>
				<view class="header-text">
					<p>立即登录</p>
					<p>登录解锁更多功能</p>
				</view>
			</view>
			<view class="top-nav">
				<view class="icon">
					<span class="iconfont icon-iconhuaban1-14"></span>
					<text>订单</text>
				</view>
				<view class="icon">
					<span class="iconfont icon-iconhuaban1-05"></span>
					<text>消息</text>
				</view>
				<view class="icon">
					<span class="iconfont icon-iconhuaban1-01"></span>
					<text>收藏</text>
				</view>
				<view class="icon">
					<span class="iconfont icon-iconhuaban1-20"></span>
					<text>在学</text>
				</view>

			</view>
		</view>
		<view class="con-btm">
			<view class="btm btm-one">
				<view class="">
					<span class="iconfont icon-nav-16"></span>
					<text>我的优惠券</text>
				</view>
				>
			</view>
			<view class="btm btm-two">
				<view class="">
					<span class="iconfont icon-nav-01"></span>
					<text>常见问题</text>
				</view>
				>
			</view>
			<view class="btm btm-three">
				<view class="">
					<span class="iconfont icon-nav-03"></span>
					<text>设置</text>
				</view>
				>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					iconfont: '',
					text: ''
				}]
			};
		},
		methods:{
			handleLogin(){
				uni.navigateTo({
					url: '/pages/login/login',
				});
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #fff;
		display: flex;
		padding: 0;
		flex-direction: column;
		width: 100vw;
		height: 100vh;

		.con-top {
			position: relative;
			height: 200px;
			background-color: #5ccc84;
			border-radius: 0 0 70px 70px;

			.login-img {
				margin-left: 30px;
				display: flex;
				align-items: center;
				flex-direction: row;

				// text-align: center;
				.header-img {
					// flex: 1;
				}

				.header-text {
					margin-left: 30px;
				}

				.header-text :nth-child(1) {
					color: #fff;
					font-size: 18px;
					margin-bottom: 10px;

				}

				.header-text :nth-child(2) {
					color: #fff;
					font-size: 14px;
					margin-bottom: 10px;

				}
			}

			.top-nav {
				position: absolute;
				bottom: 2px;
				left: 40px;
				display: flex;
				justify-content: space-around;
				width: 300px;
				height: 80px;
				// line-height: 80px;
				background-color: #fff;
				border-radius: 5px;
				text-align: center;
				margin: 0 auto;

				.icon {
					margin-top: 20px;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;

					span {
						color: #fed048;
						font-size: 28px
					}
				}
			}
		}

		.con-btm {
			flex: 1;
			padding: 0 20px;

			.btm {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 50px;
				line-height: 50px;
				align-items: center;
				text-align: center;
				border-bottom: 1px solid #f8f8f8;
				span{
					color:#75b1f0;
					font-size: 20px
				}
				text{
					margin-left: 10px;
					font-size: 16px
				}
			}

			.btm-one {
				width: 100%;
				height: 50px;
				
			}
		}
	}
</style>
