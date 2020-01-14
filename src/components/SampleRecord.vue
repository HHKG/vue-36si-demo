<template>
	<div class="container">
		<publicHeader :title="title"/>
		<!-- 样品申请记录内容区域 -->
		<div class="container-layout" v-for="item in list">
			<!-- 容器的header部分 -->
			<div class="container-h">
				等待提货
			</div>
			<!-- 容器内容部分 -->
			<div class="container-footer">
				<div class="container-cnt" @click="gotoFeedback(item,$event)">
          <img class="avatar" :src="item.indexImgUrl"/>
					<p class="companyName">{{item.supplierName}}</p>
				</div>
				<div class="container-status">
					<ul>
						<li v-for="childItem in item.madeSupplierSampleGoodsOrderStatusLogs">
							<span v-if="childItem.orderStatus==0">待审核</span>
              <span v-if="childItem.orderStatus==1">审核失败</span>
              <span v-if="childItem.orderStatus==2">待发货</span>
              <span v-if="childItem.orderStatus==3">已发货</span>
              <span v-if="childItem.orderStatus==4">确认发货</span>
              <span v-if="childItem.orderStatus==5">已反馈</span>
              <span>{{childItem.createTimeStr}}</span>
						</li>
            <li class="goApply">
            	<span>发起申请</span>
            	<span>{{item.madeSupplierSampleGoodsOrderStatusLogs[item.madeSupplierSampleGoodsOrderStatusLogs.length-1].createTimeStr}}</span>
            </li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import publicHeader from './header'
	export default{
		components:{
			'publicHeader':publicHeader
		},
		data() {
			return {
				title:'样品记录',
				list:[],
        pageSize:10,
        currentPage:1,
        goApplyTime:''
			}
		},methods:{
			gotoFeedback(event){
        let currentItem=event;
				// this.$router.push({path:'/Feedback',query:{currentItem:currentItem}});
        this.$router.push({name:'Feedback', params:{currentItem:currentItem}})
			},
      //获取样品申请记录
      getSampleRecordData(){
          let urId=sessionStorage.getItem('urId');
          let data={urId,pageSize:this.pageSize,currentPage:this.currentPage};
          this.$post('/api/utime-web-WeChat/supplier/ajaxMyApplySampleGoodsOrderList',data).then(res=>{
            console.log(res);
            let recordList=res.data.list;
            recordList.forEach(x=>{
              x.indexImgUrl=this.$mediaUrl+x.indexImgUrl;
            })
            this.list=recordList;

          })
      }
		},
		created() {
			this.$remLayout(document,window);
      this.getSampleRecordData();
		}
	}
</script>

<style scoped="scoped">
	ul,li{
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 0.26rem;
		line-height: 0.26rem;
		color: #000000;
	}
	ul{
		display: flex;
		width: 6.11rem;
		flex-wrap: nowrap;
		overflow: hidden;
		overflow-x: auto;
	}
	ul::-webkit-scroll{
		display: none;
	}
	li{
		position: relative;
		margin-right:0.8rem;
    display: flex;
    flex-direction: column;
    width:1.5rem;
	}
  li:last-child::before{
    background: none;
  }
	li::before{
		position: absolute;
		right: -0.4rem;
		top:50%;
		margin-top:-0.1rem;
		content: '';
		width:0.3rem;
		height:0.2rem;
		background-image: url(../assets/1-1.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		transform: rotate(-180deg);
	}
	li span:last-child{
		margin-top:0.2rem;
		display: inline-block;
		width:1.8rem;
		font-size: 0.2rem;
		line-height: 0.3rem;
		color:rgb(175,175,175);
	}

	.avatar{
		width:0.9rem;
		height: 0.9rem;
	}
	.companyName::after{
		position: absolute;
		right: 0;
		top:50%;
		content: '';
		margin-top:-0.135rem;
		background-image: url(../assets/back.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 0.27rem;
		height:0.27rem;
		transform: rotate(180deg);
	}
	.container-cnt{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.container-footer{
		padding:0.3rem;
		background-color:#fff;
	}
	.right-icon{
		width: 0.27rem;
		height:0.27rem;
		transform: rotate(180deg);
	}
	.companyIcon{
		width:0.9rem;
		height:0.9rem;
	}
	.companyName{
		padding-left:0.3rem;
		position: relative;
		width:6.11rem;
		height: 0.9rem;
		font-size: 0.28rem;
		line-height: 0.9rem;
	}
	.container-h{
		border-radius: 0.12rem;
		background-color:#fff;
		padding:0.3rem;
		font-size:0.26rem;
		line-height: 0.26rem;
		color: #000000;
	}
	.container-layout{
		width: 6.7rem;
		margin: 0 auto 0.46rem;
	}
	.container{
		background-color:#F6F5F5;
		padding-top:1.28rem;
	    font-size: 0;
		padding-bottom: 0.1rem;
	}
	header{
		background-color:#F6F5F5!important;
	}
	html,body{
		/* background-color:#F6F5F5!important; */
	}
</style>
