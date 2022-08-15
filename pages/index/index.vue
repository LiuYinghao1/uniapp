<template>
	<view class="container">
		<!-- #ifdef H5 -->
		<view style="text-align: center;">hello uni-app</view>
		<!-- #endif -->
		
		
		<!-- #ifdef APP-PLUS -->
		<view style="text-align: center;">今天八月十五日</view>
		<!-- #endif -->
		
		<!-- #ifndef MP-WEIXIN -->
		<image src="../../static/logo.png" mode=""></image>
		<!-- #endif -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
