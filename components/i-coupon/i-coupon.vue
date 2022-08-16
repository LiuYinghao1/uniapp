<template>
	<view>
		<view class="quan" scroll-x="true">
			<scroll-view scroll-x="true" >
				<view class="box box-l" v-for="(item,index) in data" :key="index">
				<view class="left">
					<text class="left-top">￥{{item.price}}</text>
					<text class="left-bottom">{{item.value.title}}</text>
				</view>
				<view class="right">
					<text>领取</text>
				</view>
			</view>
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-coupon",
		props: {
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.quan {
		background-color: #fff;
		width: 100%;
		height: 80px;
		padding-bottom: 8px;
		display: flex;
		justify-content: space-around;
		scroll-view {
			white-space: nowrap;
			width: 100%;
		}
		.box {
			display: inline-flex;
			// min-width: 330rpx;
			color: #fff;
			margin-right: 30rpx;
			width: 250px;
			background-color: #fec007;
			
			.left {
				display: flex;
				flex-direction: column;
				text-align: center;
				align-items: center;
				padding-top: 10px;
				color: #fff;
				flex: 2;
				background-color: #d39e00;
				border-right: #fff 1px dashed;

				.left-top {
					font-size: 22px
				}
			}

			.right {
				width: 50px;
				background-color: #fec007;
				color: #fff;
				text-align: center;
				line-height: 80px;
				font-size: 16px
			}
		}

	}
</style>
