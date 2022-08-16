<template>
	<view>
		<view class="group">
			<h2>拼团</h2>
			<scroll-view scroll-x="true" >
				<view class="total-group" v-for="(item,index) in data" :key="index">
				<view class="total total-left" >
					<image class="null" :src="item.cover"></image>
					<view class="text">
						<p>{{item.title}}</p>
						<span>￥{{item.price}}</span><s>￥{{item.t_price}}</s>
					</view>
				</view>
			</view>
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: "i-group",
		props: {
			data:{
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
	.group{
		background-color: #fff;
		margin-top: 10px;
		padding-top: 10px;
		padding-left: 10px;
	}
	scroll-view{
		white-space: nowrap;
		width: 100%;
	}
	.total-group {
		padding-top: 5px;
		padding-right: 10px;
		// display: flex;
		// width: 100%;
		// justify-content: space-around;
		background-color: #fff;
		display: inline-flex;
		
		image{
			width: 170px;
			height: 90px;
		}

		.text :nth-child(3) {
			// font-weight: bold;
			font-size: 12px;
			color: #ccc;
		}

		.text :nth-child(2) {
			color: red;
			font-size: 18px
		}

		.text :nth-child(4) {
			color: #ccc;
			font-size: 12px
		}
		p{
			margin: 0;
			padding: 0;
		}
	}
</style>
