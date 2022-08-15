<template>
	<view class="container">
		<!-- 搜索框 -->
		<uni-search-bar @confirm="" @input="" placeholder="请输入内容" />
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item style="background-color: aqua;">
				<view class="swiper-item"></view>
			</swiper-item>
			<swiper-item style="background-color: antiquewhite;">
				<view class="swiper-item"></view>
			</swiper-item>
			<swiper-item style="background-color: blue;">
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		<!-- 宫格 -->
		<uni-section padding>
			<uni-grid :show-border="false" :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 8" :index="index" :key="index">
					<view class="grid-item-box " style="background-color: #fff;">
						<uni-icons type="image" :size="40" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<!-- 优惠券 -->
		<view class="quan">
			<view class="box box-l">
				<view class="left">
					<text class="left-top">￥100</text>
					<text class="left-bottom">满￥200可用</text>
				</view>
				<view class="right">
					<text>领取</text>
				</view>
			</view>
			<view class="box box-r">
				<view class="left">
				<text class="left-top">￥20</text>
				<text class="left-bottom">满￥100可用</text>
				</view>
				<view class="right">
				<text>领取</text>
				</view>
			</view>
		</view>
		<!-- 拼团 -->
		<view class="group">
			<h2>拼团</h2>
			<view class="total-group">
				<view class="total total-left">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
				<view class="total total-right">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
			</view>
		</view>
		<!-- 最新列表 -->
		<view class="new">
			<h2>最新列表</h2>
			<span class="see">查看全部</span>
			<view class="new-info">
				<view class="img">
					
				</view>
				<view class="new-text">
					<p>uni-app实战直播app开发</p>
					<p>一句话推荐</p>
					<span>￥100</span><s>￥299</s>
				</view>
			</view>
			<view class="new-info">
				<view class="img">
					
				</view>
				<view class="new-text">
					<p>uni-app实战直播app开发</p>
					<p>一句话推荐</p>
					<span>￥100</span><s>￥299</s>
				</view>
			</view>
			<view class="new-info">
				<view class="img">
					
				</view>
				<view class="new-text">
					<p>uni-app实战直播app开发</p>
					<p>一句话推荐</p>
					<span>￥100</span><s>￥299</s>
				</view>
			</view>
		</view>
		<!-- 热门推荐 -->
		<view class="group">
			<h2>热门推荐</h2>
			<view class="total-group">
				<view class="total total-left">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
				<view class="total total-right">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
			</view>
			
			<view class="total-group">
				<view class="total total-left">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
				<view class="total total-right">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
			</view>
			
			<view class="total-group">
				<view class="total total-left">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
				<view class="total total-right">
					<view class="null" style="background-color: black;"></view>
					<view class="text">
						<p>uni-app实战直播app开发</p>
						<p>10人已抢</p>
						<span>￥100</span><s>￥299</s>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import homeSwiper from '@/api/api.js'

	export default {
		data() {
			return {

			}
		},
		mounted() {

		},

		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		height: 100vh;
		// background-color: #fff;
		padding: 5px;
		font-size: 14px;
		line-height: 24px;
	}

	.grid-item-box {
		padding-top: 10px;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		height: 40px;
		line-height: 40px;
	}

	.quan {
		background-color: #fff;
		width: 100%;
		height: 80px;
		padding-bottom: 8px;
		display: flex;
		justify-content: space-around;

		.box {
			display: flex;
			width:170px ;
			height: 90%;
			background-color: #fec007;
			.left{
				display: flex;
				flex-direction: column;
				text-align: center;
				align-items: center;
				padding-top: 10px;
				color: #fff;
				flex: 2;
				background-color: #d39e00;
				border-right: #fff 1px dashed ;
				.left-top{
					font-size: 22px
				}
			}
			.right{
				flex: 1;
				background-color: #fec007;
				color: #fff;
				text-align: center;
				line-height: 80px;
				font-size: 16px
			}
		}
		
	}
	.total-group{
		padding-top: 5px;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		.null{
			width: 100%;
			background-color: #000;
			height: 80px;
		}
		.text :nth-child(2){
			// font-weight: bold;
		font-size: 12px;
		color: #ccc;
		}
		.text :nth-child(3){
			color: red;
			font-size: 18px
		}
		.text :nth-child(4){
			color: #ccc;
			font-size: 12px
		}
	}
	
	.new{
		margin-top: 10px;
		padding: 10px;
		background-color: #fff;
		position: relative;
		.see{
			position: absolute;
			top: 10px;
			right: 10px;
		}
		.new-info{
			display: flex;
			justify-content: space-around;
			margin-top: 10px;
			.img{
				width: 130px;
				height: 80px;
				background-color: #000;
			}
			
			.new-text :nth-child(2){
				// font-weight: bold;
			font-size: 12px;
			color: #ccc;
			}
			.new-text :nth-child(3){
				color: red;
				font-size: 18px
			}
			.new-text :nth-child(4){
				color: #ccc;
				font-size: 12px
			}
		}
	}
	
	
	
</style>
