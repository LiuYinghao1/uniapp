<template>
	<view class="container">
		<!-- 搜索框 -->
		<uni-search-bar placeholder="请输入内容" />

		<!-- 轮播图 -->
		<i-swiper :data="swiper"></i-swiper>

		<!-- 宫格 -->
		<i-nav :data="navList"></i-nav>

		<!-- 优惠券 -->
		<i-coupon :data="couponList"></i-coupon>

		<!-- 拼团 -->
		<i-group :data="groupList"></i-group>

		<!-- 最新列表 -->
		<i-newList :data="newList"></i-newList>

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
				swiper: [{
					src: "/static/demo/banner/banner1.png"
				}, {
					src: "/static/demo/banner/banner2.png"
				}],


				navList: [{
					src: "/static/demo/icon/hd.png",
					name: "活动",
				}, {
					src: "/static/demo/icon/test.png",
					name: "考试",
				}, {
					src: "/static/demo/icon/ms.png",
					name: "秒杀",
				}, {
					src: "/static/demo/icon/pt.png",
					name: "拼团",
				}, {
					src: "/static/demo/icon/course.png",
					name: "直播",
				}, {
					src: "/static/demo/icon/column.png",
					name: "专栏",
				}, {
					src: "/static/demo/icon/book.png",
					name: "电子书",
				}, {
					src: "/static/demo/icon/ask.png",
					name: "社区",
				}],

				couponList: [{
						c_num: 300000,
						end_time: "2025-08-22T16:00:00.000Z",
						goods_id: 1636,
						id: 83,
						isgetcoupon: true,
						price: "4.00",
						received_num: 19,
						start_time: "2022-07-14T16:00:00.000Z",
						type: "course",
						value: {
							id: 1636,
							title: "中级经济法-知识点精讲课"
						}
					},
					{
						c_num: 10000,
						end_time: "2034-10-16T16:00:00.000Z",
						goods_id: 184,
						id: 39,
						isgetcoupon: false,
						price: "8.90",
						received_num: 141,
						start_time: "2021-09-09T16:00:00.000Z",
						type: "column",
						value: {
							id: 184,
							title: "VueCli 实战商城后台管理系统"
						}
					},
					{
						c_num: 100000,
						end_time: "2035-07-28T16:00:00.000Z",
						goods_id: 6,
						id: 33,
						isgetcoupon: false,
						price: "5.00",
						received_num: 121,
						start_time: "2021-06-28T17:58:01.000Z",
						type: "course",
						value: {
							id: 6,
							title: "VueCli 实战在线教育后台系统"
						}
					},
					{
						c_num: 100000,
						end_time: "2032-06-29T16:00:00.000Z",
						goods_id: 11,
						id: 19,
						isgetcoupon: false,
						price: "50.00",
						received_num: 88,
						start_time: "2021-05-15T17:03:00.000Z",
						type: "course",
						value: {
							id: 11,
							title: "uni-app实战直播app全栈开发"
						}
					},
					{
						c_num: 10000,
						end_time: "2032-06-29T16:00:00.000Z",
						goods_id: 12,
						id: 18,
						isgetcoupon: false,
						price: "5.00",
						received_num: 82,
						start_time: "2021-05-15T17:02:00.000Z",
						type: "course",
						value: {
							id: 12,
							title: "unicloud商城全栈开发"
						}
					}
				],

				groupList: [{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/6dccd3181a1b973480ec.jpg",
						end_time: "2022-08-28T16:00:00.000Z",
						group_id: 184,
						id: 269,
						price: "0.10",
						start_time: "2022-07-20T16:00:00.000Z",
						t_price: "0.10",
						title: "33213",
						type: "column"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/f64e4441378d85f5df7a.png",
						end_time: "2022-08-21T16:00:00.000Z",
						group_id: 182,
						id: 1604,
						price: "0.10",
						start_time: "2022-07-13T16:00:00.000Z",
						t_price: "2.00",
						title: "123",
						type: "media"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/d1c2fbe07e31d1e78b5a.png",
						end_time: "2024-06-01T13:26:31.000Z",
						group_id: 123,
						id: 1432,
						price: "43442.00",
						start_time: "2022-05-31T13:26:31.000Z",
						t_price: "0.00",
						title: "231",
						type: "media"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png",
						end_time: "2024-06-29T16:00:00.000Z",
						group_id: 31,
						id: 25,
						price: "0.10",
						start_time: "2021-05-16T08:31:00.000Z",
						t_price: "10.00",
						title: "uni-app实战在线教育类app开发",
						type: "audio"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png",
						end_time: "2024-06-22T16:00:00.000Z",
						group_id: 30,
						id: 3,
						price: "50.00",
						start_time: "2021-05-15T17:05:00.000Z",
						t_price: "9.98",
						title: "uni-app实战仿微信app开发",
						type: "column"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png",
						end_time: "2024-06-29T16:00:00.000Z",
						group_id: 29,
						id: 6,
						price: "5.00",
						start_time: "2021-05-15T17:04:00.000Z",
						t_price: "9.98",
						title: "VueCli 实战在线教育后台系统",
						type: "media"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png",
						end_time: "2024-06-29T16:00:00.000Z",
						group_id: 21,
						id: 11,
						price: "8.00",
						start_time: "2021-04-15T16:00:00.000Z",
						t_price: "90.00",
						title: "uni-app实战直播app全栈开发",
						type: "video"
					}

				],

				newList: [{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png",
						id: 6,
						price: "9.98",
						t_price: "20.00",
						title: "VueCli 实战在线教育后台系统",
						try: "<p>VueCli 实战在线教育后台系统试看内容</p>",
						type: "media"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/47d1aa930177515cd95e.png",
						id: 7,
						price: "9.98",
						t_price: "20.00",
						title: "uni-app实战视频点播app小程序",
						try: "<p>uni-app实战视频点播app小程序试看内容</p>",
						type: "media"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png",
						id: 11,
						price: "90.00",
						t_price: "100.00",
						title: "uni-app实战直播app全栈开发",
						try: "<p>uni-app实战直播app全栈开发介绍</p>",
						type: "video"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png",
						id: 3,
						price: "9.98",
						t_price: "20.00",
						title: "uni-app实战仿微信app开发",
						try: "uni-app实战仿微信app开发描述"
					},
					{
						cover: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png",
						id: 25,
						price: "10.00",
						t_price: "20.00",
						title: "uni-app实战在线教育类app开发",
						try: "<p>uni-app实战在线教育类app开发</p>",
						type: "audio"
					}
				]
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


	.total-group {
		padding-top: 5px;
		display: flex;
		justify-content: space-around;
		background-color: #fff;

		.null {
			width: 100%;
			background-color: #000;
			height: 80px;
		}

		.text :nth-child(2) {
			// font-weight: bold;
			font-size: 12px;
			color: #ccc;
		}

		.text :nth-child(3) {
			color: red;
			font-size: 18px
		}

		.text :nth-child(4) {
			color: #ccc;
			font-size: 12px
		}
	}

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

			.img {
				width: 150px;
				height: 80px;
				background-color: #000;
			}

			.new-text :nth-child(2) {
				// font-weight: bold;
				font-size: 12px;
				color: #ccc;
			}

			.new-text :nth-child(3) {
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
