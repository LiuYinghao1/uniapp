<template>
	<view class="container">
		<block v-for="(item, index) in template" :key="index">
			<!-- 搜索框 -->
			<uni-search-bar v-if="item.type === 'search'" placeholder="请输入内容" />

			<!-- 轮播图 -->
			<i-swiper v-else-if="item.type === 'swiper'" :data="item.data"></i-swiper>

			<!-- 宫格 -->
			<i-nav v-else-if="item.type === 'icons'" :data="item.data"></i-nav>

			<!-- 优惠券 -->
			<i-coupon v-else-if="item.type === 'coupon'" :data="couponList"></i-coupon>

			<!-- 拼团 -->
			<i-group v-if="item.type === 'promotion'"  :data="groupList"></i-group>

			<!-- 最新列表 -->
			<i-newList  v-if="item.type === 'list'" :data="item.data"></i-newList>

			<view class="btm-img"  v-if="item.type === 'imageAd'"><image :src="item.data" mode=""></image></view>
		</block>
	</view>
</template>

<script>
import IndexModel from '@/model/indexModel';
export default {
	data() {
		return {
			template: [],

			couponList: [],

			groupList: [
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/6dccd3181a1b973480ec.jpg',
					end_time: '2022-08-28T16:00:00.000Z',
					group_id: 184,
					id: 269,
					price: '0.10',
					start_time: '2022-07-20T16:00:00.000Z',
					t_price: '0.10',
					title: '33213',
					type: 'column'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/f64e4441378d85f5df7a.png',
					end_time: '2022-08-21T16:00:00.000Z',
					group_id: 182,
					id: 1604,
					price: '0.10',
					start_time: '2022-07-13T16:00:00.000Z',
					t_price: '2.00',
					title: '123',
					type: 'media'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/d1c2fbe07e31d1e78b5a.png',
					end_time: '2024-06-01T13:26:31.000Z',
					group_id: 123,
					id: 1432,
					price: '43442.00',
					start_time: '2022-05-31T13:26:31.000Z',
					t_price: '0.00',
					title: '231',
					type: 'media'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
					end_time: '2024-06-29T16:00:00.000Z',
					group_id: 31,
					id: 25,
					price: '0.10',
					start_time: '2021-05-16T08:31:00.000Z',
					t_price: '10.00',
					title: 'uni-app实战在线教育类app开发',
					type: 'audio'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png',
					end_time: '2024-06-22T16:00:00.000Z',
					group_id: 30,
					id: 3,
					price: '50.00',
					start_time: '2021-05-15T17:05:00.000Z',
					t_price: '9.98',
					title: 'uni-app实战仿微信app开发',
					type: 'column'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png',
					end_time: '2024-06-29T16:00:00.000Z',
					group_id: 29,
					id: 6,
					price: '5.00',
					start_time: '2021-05-15T17:04:00.000Z',
					t_price: '9.98',
					title: 'VueCli 实战在线教育后台系统',
					type: 'media'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png',
					end_time: '2024-06-29T16:00:00.000Z',
					group_id: 21,
					id: 11,
					price: '8.00',
					start_time: '2021-04-15T16:00:00.000Z',
					t_price: '90.00',
					title: 'uni-app实战直播app全栈开发',
					type: 'video'
				}
			],

			newList: [
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png',
					id: 6,
					price: '9.98',
					t_price: '20.00',
					title: 'VueCli 实战在线教育后台系统',
					try: '<p>VueCli 实战在线教育后台系统试看内容</p>',
					type: 'media'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/47d1aa930177515cd95e.png',
					id: 7,
					price: '9.98',
					t_price: '20.00',
					title: 'uni-app实战视频点播app小程序',
					try: '<p>uni-app实战视频点播app小程序试看内容</p>',
					type: 'media'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png',
					id: 11,
					price: '90.00',
					t_price: '100.00',
					title: 'uni-app实战直播app全栈开发',
					try: '<p>uni-app实战直播app全栈开发介绍</p>',
					type: 'video'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png',
					id: 3,
					price: '9.98',
					t_price: '20.00',
					title: 'uni-app实战仿微信app开发',
					try: 'uni-app实战仿微信app开发描述'
				},
				{
					cover: 'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png',
					id: 25,
					price: '10.00',
					t_price: '20.00',
					title: 'uni-app实战在线教育类app开发',
					try: '<p>uni-app实战在线教育类app开发</p>',
					type: 'audio'
				}
			]
		};
	},
	mounted() {},
	onLoad() {
		this.getIndexData();
		this.getCouponData()
	},
	methods: {
		//获取首页数据
		async getIndexData() {
			const res = await IndexModel.getMobileIndex();
			console.log(res);
			this.template = res;
			// console.log(this.template);
		},
		
		//获取优惠券数据
		async getCouponData(){
			const res=await IndexModel.getMobileICoupon()
			this.couponList=res
			console.log(res);
		}
		
		//
	}
};
</script>

<style lang="scss">
.container {
	height: 100vh;
	// background-color: #fff;
	padding: 5px;
	font-size: 14px;
	line-height: 24px;
}
.btm-img {
	margin-top: 10px;

	image {
		width: 100%;
		height: 200px;
		background-color: #fff;
		margin-bottom: 50px;
	}
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
		font-size: 18px;
	}

	.text :nth-child(4) {
		color: #ccc;
		font-size: 12px;
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
			font-size: 18px;
		}

		.new-text :nth-child(4) {
			color: #ccc;
			font-size: 12px;
		}
	}
}
</style>
