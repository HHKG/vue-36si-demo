<template>
	<div class="container">
		<publicHeader :title="title"/>
		<!-- 用户信息模块 -->
		<div class="user">
			<img class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/uKFxMIdgB0nWOhbPfR5XHc5FZk2ZJRl9U2pXeEbtaRgnBibibfrv4SEqlps99IRhRticSFiawkdPNiccfybicIWMN4Yg/132" />
			<div class="nickname">KG</div>
			<div class="user-cnt">
				<div class="user-cnt-item" v-on:click="goback()">
					<img src="../assets/fhsy.png" />
					<span>返回首页</span>
				</div>
				<div class="user-cnt-item" v-on:click="gotoSampleRecord()">
					<img src="../assets/ypsq.png" />
					<span>样品申请</span>
				</div>
				<div class="user-cnt-item" v-on:click="gotoMyCollect()">
					<img src="../assets/personSc.png" />
					<span>我的收藏</span>
				</div>
			</div>
		</div>
		<!-- 我的主页 -->
		<div class="home">
			<div class='title'>我的主页</div>
      <div class='home-cnt'>
				<ul>
					<li v-for="item in myHomeData">
            <img :src="item.indexImgUrl" />
						<span>{{item.supplierName}}</span>
					</li>
					<li v-if="!myHomeData.length">
					  <div class="example">
              <img src="../assets/rz.png" />
            </div>
						<span>一键打通商脉圈</span>
					</li>
				</ul>
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
		data(){
			return {
				title:'个人中心',
        phone:15219579677,
        urId:12067,
        pageSize:10,
        currentPage:1,
        myHomeData:[]
			}
		},
		methods:{
			gotoSampleRecord(){
				this.$router.push('/SampleRecord');
			},
			gotoMyCollect(){
				this.$router.push('/MyCollect');
			},
      //获取我的主页数据
      getMyHomeData(){
        let data={phone:this.phone,urId:this.urId,pageSize:this.pageSize,currentPage:this.currentPage}
        this.$post('/api/utime-web-WeChat/supplier/ajaxMyMadeSupplierList',data).then(res=>{
          console.log(res);
          res.data.list.forEach(x=>{
            x.indexImgUrl=this.$mediaUrl+x.indexImgUrl
          })
           this.myHomeData=res.data.list;
        })
      }
		},
		created() {
			this.$remLayout(document,window);
      this.getMyHomeData();
		}
	}
</script>
<style scoped="scoped">
	.home-cnt::-webkit-scrollbar{
		display: none;
	}
	ul,li{
		list-style: none;
		margin:0;
		padding:0;
	}
	ul{
		display: flex;
	}
	ul li{
		display: flex;
		flex-direction: column;
		/* margin-right:0.6rem; */
		padding-right:0.6rem;
	}

	ul li img,.example{
		width:3.46rem;
		height:3.15rem;
		border-radius: 0.12rem;
	}
  .example{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#F3F3F3;
  }
  .example img{
    width:0.79rem;
    height:0.81rem;
  }
	ul li span{
		display: inline-block;
		margin-top:0.4rem;
		width: 3.46rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		font-size: 0.28rem;
		line-height: 0.28rem;
		color:#000000;
		}
	.home{
		margin-top:0.3rem;
		width: 6.5rem;
		height: 4.53rem;
		background-color: #FFFFFF;
		border-top-left-radius: 0.2rem;
		border-bottom-left-radius:0.2rem ;
		padding:0.6rem 0rem 0.6rem 0.6rem;
		float: right;
	}
	.home .title{
		font-size: 	0.27rem;
		line-height: 0.27rem;
		color:#000;
	}
	.home .home-cnt{
		margin-top:0.45rem;
		overflow: hidden;
		overflow-x: auto;

	}
	.user{
		margin: 2.22rem auto 0;
		width:5.5rem;
		height:3.32rem;
		background-color:#fff;
		border-radius: 0.2rem;
		padding:0.6rem;
		font-size: 0;
		position: relative;
	}
	.user .nickname{
		font-size: 0.3rem;
		color:#000000;
		text-align: center;
		margin:0.6rem 0rem 1.2rem 0rem;
		text-align: center;
	}
	.user .avatar{
		position: absolute;
		width:1.2rem;
		height:1.2rem;
		top:-0.6rem;
		left:50%;
		margin-left:-0.6rem;
		border-top-left-radius: 0.2rem;
		border-bottom-right-radius: 0.2rem;
	}
	.user .user-cnt{
		display: flex;
		justify-content: space-between;
	}
	.user .user-cnt .user-cnt-item{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.user .user-cnt .user-cnt-item img{
		width:0.5rem;
		height:0.5rem;
	}
	.user .user-cnt .user-cnt-item span{
		font-size: 0.27rem;
		line-height: 0.27rem;
		color:#000;
		margin-top:0.3rem;
		display: inline-block;
	}
	.container{
		background-color:#FF0030;
		width:100%;
		height:100%;
		position: fixed;
	}
</style>
