<template>
	<header>
		<img class="back-icon" v-on:click="goback()" src="../assets/back.png" />
		<div class="h-title">{{title}}</div>
	</header>
</template>

<script>
	export default{
    props:{
      title:String,
      required:true
    },
		data(){
			return {
				// title:'vue项目title'
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}, 
		}
	}
</script>

<style scoped="scoped">
	.h-title{
		font-size: 0.34rem;
		line-height: 0.98rem;
		text-align: center;
		color:#000000;
		position: relative;
		width:100%;
		height: 0.98rem;
		padding-right:0.46rem;
	}
	.back-icon{
		margin-left:0.3rem;
		width:0.16rem;
		height:0.32rem;
	}
	header{
		position: fixed;
		width: 100%;
		height:0.98rem;
		left: 0;
		top:0;
		z-index: 10;
		background:#FF0030;
		display: flex;
		align-items: center;
	}
</style>
