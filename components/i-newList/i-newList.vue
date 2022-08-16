<template>
	<view>
		<view class="new">
			<h2>最新列表</h2>
			<span class="see">查看全部</span>
			<view class="new-info" v-for="(item,index) in data" :key="index">
				<image :src="item.cover" mode="" class="img"></image>
				<view class="new-text">
					<p>uni-app实战直播app开发</p>
					<!-- <p>一句话推荐</p> -->
					<span>￥100</span><s>￥299</s>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "newList",
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
	.new {
		margin-top: 10px;
		padding: 10px;
		padding-top: 10px;
		background-color: #fff;
		position: relative;
		
		.see {
			position: absolute;
			top: 10px;
			right: 10px;
		}

		.new-info {
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
			width: 100%;
			height: 100px;
			.img {
				width: 170px;
				height: 90px;
				background-color: #000;
			}

			.new-text :nth-child(3) {
				// font-weight: bold;
				font-size: 12px;
				color: #ccc;
			}

			.new-text :nth-child(2) {
				color: red;
				font-size: 18px
			}

			.new-text :nth-child(4) {
				color: #ccc;
				font-size: 12px
			}
		}
	}
</style>
