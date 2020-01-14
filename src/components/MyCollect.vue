<template>
	<div class="container">
		<publicHeader :title="title"/>
		<div class="container-cnt" v-for="(item,index) in myCollectData">
			<div class="container-txt">
				<span class="companyName">{{item.supplierName}}</span>
				<span class="introduce">3C数码</span>
				<span class="looking">查看 ></span>
			</div>
			<img class="container-icon" :src="item.indexImgUrl" :style="index%2==0?'':'order:-1'"/>
		</div>
	</div>
</template>

<script>
	import publicHeader from './header'
  import axios from 'axios';
	export default {
		components:{
			'publicHeader':publicHeader
		},
		data() {
			return {
				title:'我的收藏',
        myCollectData:[]
			}
		},
		methods:{
			//获取收藏记录数据
      getCollectData(){
       let data={urId:'12067',currentPage:'1',pageSize:'10'};
        this.$post('/api/utime-web-WeChat/supplier/ajaxMadeSupplierCollectionList',data).then(res=>{
          let dataList=res.data.list;
          dataList.forEach(x=>{
            x.indexImgUrl=this.$mediaUrl+x.indexImgUrl;
          });
          this.myCollectData=dataList;
        })
      }
		},
		created() {
			this.$remLayout(document,window);
      this.getCollectData();
		},
		beforeCreate() {
			document.querySelector('body').setAttribute('style','background-color: #F3F3F3;')
		}
	}
</script>

<style scoped="scoped">
	header{
		background-color:#F3F3F3!important;
	}
	.container{
		padding-top:1.12rem;
	}
	.container-cnt{
		margin:0.4rem auto 0;
		display: flex;
		justify-content:space-between;
		height: 3.16rem;
		border-radius: 0.12rem;
		overflow: hidden;
		width: 6.7rem;
		background-color:#fff;
	}
	.container-cnt div,img{
		width:3.35rem;
		height:100%;
	}
	.container-txt{
		display: flex;
		flex-direction: column;
		padding:0.58rem 0.3rem;
		height: 2rem!important;

	}
	.companyName{
		font-size: 0.28rem;
		line-height: 0.38rem;
		color: #000000;
	}
	.introduce{
		margin-top:0.2rem;
		display: inline-block;
		font-size: 0.24rem;
		line-height: 0.24rem;
		color: rgb(175,175,175);
	}
	.looking{
		display: inline-block;
		margin-top: 0.7rem;
		font-size: 0.24rem;
		line-height: 0.24rem;
		color:rgb(175,175,175);
	}
</style>
