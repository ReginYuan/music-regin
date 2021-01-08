<template>
	<view>
		<button type="default" @click="input">按钮</button>
		<input type="text" v-model="value" />
		<view>当前的值是:{{value}}</view>
	</view>
</template>

<script>
	export default {

		// 数据初始化方法
		data() {
			return {
				value: "hello  uni-app"
			}
		},
		// 初始化页面
		onLoad() {

		},
		// 方法
		methods: {
			input() {
				this.value = "hello  vue";
			}

		}
	}
</script>

<style>
	.height {
		height: 500px;
		border: 1px solid red;
	}

	.active {
		border: 1rpx solid red;
	}

	.className {
		text-align: center;
	}

	.classButton {
		width: 200rpx;
		height: auto;
	}
</style>
