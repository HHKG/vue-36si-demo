<template>
	<div class="container" @scroll="pageScroll">
		<publicHeader :title="title" :style="`${scrollTop>60?'background: #FFFFFF!important':''}`"/>
		<img v-bind:src="homePage.indexImgUrl" width="100%" />
		<div class="cnt">
			<!-- 企业基本信息 -->
			<div class="companyName">
				<span>{{homePage.supplierName}}</span>
				<p>江苏纺织加工</p>
			</div>
			<!-- 企业简介 -->
			<div class="instroduce">
				{{homePage.targetCustomerDescribe}}
			</div>
			<!-- 企业宣传视频 -->
			<div class="video-container">
				<video v-bind:src="homePage.describeVideoUrl"></video>
				<img class="play-btn" src="../assets/bf.png" />
			</div>
			<!-- 企业特色 -->
			<div class="specials">
				<div class="title" v-on:click="closeView(1)">
				  <p class="specials-txt">长商资讯</p>
				  <img class="zk-icon1" src="../assets/zk.png" />
				</div>
				<div class="specials-list1">
					<div class="specials-list-cnt">
						<span>经营模式</span>
						<span>{{homePage.managementModel}}</span>
					</div>
					<div class="specials-list-cnt">
						<span>货源类别</span>
						<span>{{homePage.goodsSourceModel}}</span>
					</div>
				</div>
			</div>
			<!-- 所寻求客户 -->
			<div class="specials">
				<div class="title" v-on:click="closeView(2)">
				  <p class="specials-txt">所寻求客户</p>
				  <img class="zk-icon2" src="../assets/zk.png" />
				</div>
				<div class="specials-list2">
					<div class="find-txt">
						{{homePage.targetCustomerDescribe}}
					</div>
				</div>
			</div>
			<!-- 产品信息 -->
			<div class="specials">
				<div class="title" v-on:click="closeView(3)">
				  <p class="specials-txt">产品信息</p>
				  <img class="zk-icon3" src="../assets/zk.png" />
				</div>
				<div class="specials-list3" v-for="item in produceList">
					<div class="specials-list-cnt">
						<span>产品类型</span>
						<span>{{item.typeName}}</span>
					</div>
					<div class="specials-list-cnt">
						<span>材质</span>
						<span>{{item.materialName}}</span>
					</div>
					<div class="specials-list-cnt">
						<span>工艺</span>
						<span>{{item.technologyName}}</span>
					</div>
					<div class="specials-list-cnt">
						<span>起订量</span>
						<span>{{item.minGoodsCount}}</span>
					</div>
					<div class="specials-list-cnt">
						<span>均价区间</span>
						<span>{{item.minPrice}}-{{item.maxPrice}}元</span>
					</div>
					<div class="specials-list-cnt">
						<span>出货周期</span>
						<span>{{item.deliverGoodsCycleTime}}</span>
					</div>
				</div>
			</div>
			<!-- 产品展示 -->
			<div class="specials">
				<div class="title" v-on:click="closeView(4)">
          <p class="specials-txt">产品展示</p>
          <img class="zk-icon4" src="../assets/zk.png" />
        </div>
				<!-- <div class="specials-list4">
					<div class="find-txt">
						配菠萝的无缝模式。复古风格的热带抽象背景。易于使用的背景下，纺织，包装纸，墙上的海报。家纺纺织面料-展厅设计,专卖店设计,展台搭建, 上海威雅展览展示有限公司
					</div>
				</div> -->
			</div>
		</div>
		<!-- 产品展示 -->
		<div style="background: #AFAFAF;padding:0.3rem;margin-top:-0.3rem;">

		</div>
		<!-- 底部菜单栏 -->
		<div class="footer-tab">
			<span class="more">更多</span>
			<span class="customer">客服</span>
			<span class="need" v-on:click="upAnimate()">需要样品</span>
		</div>
		<!-- 需要样品 -->
		<div class="sample-mask" v-on:click.self="downAnimate()">
			<div class="sample-pop">
				<img class="close" v-on:click="downAnimate()" src="../assets/d.png" />
				<p class="sample-title">样品选择</p>
				<div class="sample-list">
					<ul>
						<li v-for="(item ,index) in sampleList" v-on:click="selectSample(index,$event)">
							<img class="sample-img" v-bind:src="item.supplierSampleGoodsImgUrls" />
							<p class="sample-name">{{item.supplierSampleGoodsName}}</p>
							<img class="selected" :src="item.select?select:unSelect" />
              <!-- <img class="selected" src="../assets/xz2.png"/> -->
						</li>
					</ul>
				</div>
				<div class='btn-cnt'>
          <button class="btn" @click="gotoApply()">确认申领</button>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
	import publicHeader from './header'
  import $ from 'jquery'
  // 由于v-bind:src对字符串../assets/xz2.png不能进行转化，导致图片无法正常展示，所以开发者通过赋值的形式获取图片来进行三元运算符的选择,暂时不知道有没有更好的方法;
  const unSelect=require('../assets/xz2.png');
  const select=require('../assets/zx1.png');
	export default{
		components:{
			'publicHeader':publicHeader
		},
		data(){
			return {
				title:'企业主页',
				scrollTop:0,
        homePage:{},
        currentPage:1,
        pageSize:10,
        produceList:[],         //产品信息的数据列表
        sampleList:[],          //供应商的样品列表
        unSelect:unSelect,      //未选中时展示的照片
        select:select,          //选中时展示的照片
        newSelectedArr:[]       //样品选中的项组成的数组
			}
		},
		methods:{
			pageScroll(){
				this.scrollTop=document.documentElement.scrollTop;
        		console.log(this.scrollTop);
			},
      gotoApply(){
        this.$router.push('/Apply');
      },
      // 获取企业主页的数据
      getHomePageData(){
        let urId=sessionStorage.getItem('urId');
        let supplierId=this.$route.params.supplierId;
        // 或者用这种接收方法接手
        // let supplierId=this.$route.query.supplierId;
        // 请求数据
        let data={urId,supplierId}
        this.$post('/api/utime-web-WeChat/supplier/ajaxMadeSupplierDetail',data).then(res=>{
             let homePage=res.data;
             homePage.indexImgUrl=this.$mediaUrl + homePage.indexImgUrl;
             homePage.describeVideoUrl=this.$mediaUrl + homePage.describeVideoUrl;
             this.homePage=homePage;
        })
      },
      // 获取产品信息数据
      getProduceData(){
        let supplierId=this.$route.params.supplierId;
        let currentPage=this.currentPage;
        let pageSize=this.pageSize;
        let data={supplierId,currentPage,pageSize}
        this.$post('/api/utime-web-WeChat/supplier/ajaxMadeSupplierProductList',data).then(res=>{
          let produceList=res.data.list;
          this.produceList=produceList;
        })
      },
      // 样品申请列表
      getSampleList(){
        //供应商id
        let supplierId=this.$route.params.supplierId;
        // 需要传递到后台的数据
        let data={supplierId};
        // 样品列表数据接口地址
        this.$post('/api/utime-web-WeChat/supplier/ajaxMadeSupplierSampleGoodsList',data).then(res=>{
          let sampleList=res.data;
          sampleList.forEach(x=>{
            x.supplierSampleGoodsImgUrls=this.$mediaUrl+x.supplierSampleGoodsImgUrls;
            x.select=false;
          })
          console.log(sampleList)
          this.sampleList=sampleList;
        })
       },
      // 需要样品的上下滑动动画效果
      // 收起
      downAnimate(){
         $('.sample-mask').slideUp(100,function(){});
      },
      // 展开
      upAnimate(){
         $('.sample-mask').slideDown(100,function(){});
      },
      // 选择样品
      selectSample(event){
        // 当前点击的索引index
        let index=event;
        // 当前项是否被选中，select的boolean为true即为选中，为false时，则反之；
        this.sampleList[index].select=!this.sampleList[index].select;
        // 通过循环把选中的项筛选出来组成一个新的选中数组
        let newSelectedArr=this.sampleList.filter(x=>{
          return x.select==true;
        });
        console.log(newSelectedArr);
        // 复制给data中的newSelectedArr
        this.newSelectedArr=newSelectedArr;
      },
      // 关闭视图展示
      closeView(index){
        //index==1时，点击了厂商咨讯，index==2时 ，点击了所寻求客户，index==3时，点击了产品信息，index==4时，点击的是产品展示
        let animate=`animate${index}`;
        if(index>0){
          this.index=-index;
        }else{
          this.index=-index;
        }
        $('.zk-icon'+index).css({'transform':'rotate(-180deg)','transition-duration':'0.4s'});
        $('.specials-list'+index).css('display','none');
      }
		},
    // 一个实例被创建之后执行的代码
		created() {
      //页面初始化时，先让页面隐藏
			this.$remLayout(document,window);
      this.getHomePageData();
      this.getProduceData();
      this.getSampleList();
		},
		mounted() {
			window.addEventListener('scroll',this.pageScroll,true);
      $('.sample-mask').hide();
		},
		destroyed() {
			window.removeEventListener('scroll',this.pageScroll);
		}
	}
</script>
<style scoped="scoped">
  .btn-cnt{
    display: flex;
    justify-content: center;
    margin:0.65rem 0rem;
  }
	.sample-img{
		width:2.48rem;
		height:3.01rem;
		border-radius: 0.12rem;
	}
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	.sample-name{
	    width:2.48rem;
		font-size: 0.28rem;
		line-height: 0.28rem;
    padding-left:0.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
		color:#000000;
		margin:0.3rem 0.15rem 0.33rem 0.15rem;
	}
	.selected{
		width: 0.4rem;
		height: 0.4rem;
	}
	.sample-mask{
		position: fixed;
		left: 0;
		bottom:0;
		z-index: 20;
		background: rgba(0,0,0,0.5);
		width: 100%;
    height: 100%;
		display: flex;
		align-items: flex-end;
	}
	.sample-pop{
		width: 7.1rem;
		padding-left:0.4rem;
		background: #FFFFFF;
		border-top-left-radius: 0.12rem;
		border-top-right-radius: 0.12rem;
		position:relative;
	}
	.close{
		width:0.44rem;
		height:0.44rem;
		position:absolute;
		top:0.08rem;
		right:0.08rem;
		z-index: 11;
	}
	.sample-title{
		margin-top:0.8rem;
		font-size: 0.3rem;
		line-height: 0.3rem;
		color:#000000;
		font-weight: bold;
	}
	.sample-list{
    margin-top:0.65rem;
		overflow: hidden;
		overflow-x: auto;
	}
	.sample-list ul{
		display: flex;
		flex-wrap: nowrap;
	}
	.sample-list ul li{
		display: flex;
		flex-direction: column;
		align-items: center;
    width:2.48rem;
    padding-right:0.4rem;
	}
	.sample-list::-webkit-scrollbar{
		display: none;
	}
	ul,li{
		padding:0;
		margin:0;
		list-style: none;
	}
	.footer-tab{
		position: fixed;
		width:6.9rem;
		height:1.63rem;
		z-index: 13;
		left: 0;
		bottom: 0;
		box-shadow: 0 0 0.15rem 0 rgba(175,175,175,0.5);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 0.3rem;
		background: #FFFFFF;
	}
	.footer-tab .more{
		width: 1.12rem;
		height:1.12rem;
		border-radius: 1.13rem;
		background: #000000;
		color: #fff;
		font-size: 0.3rem;
		line-height: 1.12rem;
		text-align: center;
		display: inline-block;
		box-shadow: 0 0 0.15rem 0 rgba(0,0,0,0.5);
	}
	.footer-tab .customer{
		display: inline-block;
		width: 1.12rem;
		height:1.12rem;
		border-radius: 1.13rem;
		background: #F8CA3B;
		color: #fff;
		font-size: 0.3rem;
		line-height: 1.12rem;
		text-align: center;
		box-shadow: 0 0 0.15rem 0 rgba(248,202,59,0.5);
	}
	.footer-tab .need{
		display: inline-block;
		width:3.67rem;
		height:1.12rem;
		font-size: 0.3rem;
		background-color:rgb(255,0,48);
		color:#fff;
		text-align: center;
		line-height: 1.12rem;
		border-radius: 1.13rem;
		box-shadow: 0 0 0.15rem 0 rgba(255,0,48,0.5);
	}
	.find-txt{
		font-size: 0.26rem;
		line-height: 0.36rem;
		color: #000000;
		padding:0.3rem;
	}
	.specials-list1,.specials-list2,.specials-list3,.specials-list4{
		width: 6.7rem;
		border-radius: 0.12rem;
		overflow: hidden;
    margin-bottom:0.4rem;
	}
	.specials-list .specials-list-cnt{
		background:#F5F5F5;
		padding:0.4rem 0.3rem;
    display: flex;
	}
	.specials-list .specials-list-cnt span{
		font-size: 0.26rem;
		line-height: 0.4rem;
		color: #000000;
	}
	.specials-list-cnt:nth-child(even){
		background: #EDEDED;
	}
	.specials-list-cnt span:first-child{
		width: 1.09rem;
		display: inline-block;
		text-align-last: justify;
		margin-right:0.55rem;
	}
	.specials{
	   width:6.77rem;
	   margin: 0 auto;
	}
	.specials .specials-txt{
		font-size: 0.28rem;
		line-height: 0.28rem;
		color: #000000;
		font-weight: bold;
		position: relative;
		padding-left:0.4rem;
		margin:0.6rem 0;
	}
	.specials .specials-txt::before{
		position: absolute;
    content:'';
		top:0;
		left:0;
		width:0.1rem;
		height:0.28rem;
		background-color: #FF0000;
		border-radius: 0.29rem;
		box-shadow:0 0 0.15rem 0 rgba(255,0,48);
	}
	.zk-icon1,.zk-icon2,.zk-icon3,.zk-icon4{
		width:0.25rem;
		height:0.16rem;
	}
     .video-container{
		position: relative;
		width:6.69rem;
		height:4.46rem;
		background-color: #fff;
		border-radius: 0.1rem;
		overflow: hidden;
	}
	.video-container video{
		width: 6.69rem!important;
		height: 4.46rem!important;
		border-radius: 0.1rem;
	}
	.play-btn{
		position: absolute;
		top:50%;
		margin-top:-0.35rem;
		left: 50%;
		margin-left:-0.35rem;
		width:0.7rem;
		height:0.7rem;
	}
  /* 确认申领 */
  .btn{
    font-size:0.3rem;
    line-height: 1.02rem;
    height: 1.02rem;
    width:2.83rem;
    color: #fff;
    background-color: #FF0030;
    border:hidden;
    border-radius: 1.03rem;
    box-shadow:0 0 0.15rem 0 rgba(255,0,48,0.5);
    }
	.container{
		font-size: 0;
		margin-bottom: 1.93rem;
	}
	header{
		background: rgba(0,0,0,0)!important;
	}
	.cnt{
		background-color:#fff;
		border-radius: 0.3rem;
		padding: 0.7rem 0.4rem;
		margin-top:-0.3rem;
		position: relative;
		z-index: 2;
	}
	.companyName{
		padding:0 0.3rem;
	}
	.companyName span:first-child{
		width: 100%;
		position: relative;
		font-size: 0.32rem;
		line-height: 0.32rem;
		font-weight: bold;
		color:#000000;
	}
	.companyName span:first-child::before{
		position: absolute;
		top:50%;
		margin-top:-0.145rem;
		right: -0.4rem;
		content:'';
		width: 0.29rem;
		height: 0.29rem;
		background-image: url(../assets/cx.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.companyName p:last-child{
		margin-top:0.3rem;
		position: relative;
		font-size: 0.24rem;
		line-height:0.24rem;
		color:rgb(175,175,175);
		padding-left:0.35rem;
	}
	.companyName p:last-child::after{
		position:absolute;
		top:50%;
		margin-top:-0.12rem;
		left: 0rem;
		content:'';
		width:0.21rem;
		height:0.24rem;
		background-image: url(../assets/dz.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.instroduce{
		font-size: 0.26rem;
		line-height: 0.42rem;
		color: #000000;
		padding:0 0.3rem;
		margin:0.7rem 0rem 0.6rem 0rem;
	}
</style>
