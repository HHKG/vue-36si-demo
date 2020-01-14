<template>
	<div class="container">
		<publicHeader :title="title"/>
		<!-- 顶部导航栏部分 -->
		<div class="tab">
			<div class="category">
				<span>品类 <p class="triangle"></p></span>
				<span>类型<p class=""></p></span>
				<span>材质<p class=""></p></span>
				<span>工艺<p class=""></p></span>
			</div>
			<div class="select">筛选</div>
		</div>
		<!-- 内容列表 -->
		<div class="list-cnt">
			<div class="video-container">
				<video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
				<img class="play-btn" src="../assets/bf.png" />
			</div>
			<div class="video-footer">
				<span class="companyName honesty">南京翔宇纺织制造有限公司</span>
				<div class="video-category">
					<span>休闲服装</span>
					<span>运动鞋</span>
					<span>礼物</span>
				</div>
			</div>
		</div>
		<div class="list-cnt">
			<div class="video-container">
				<video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
				<img class="play-btn" src="../assets/bf.png" />
			</div>
			<div class="video-footer">
				<span class="companyName honesty">南京翔宇纺织制造有限公司</span>
				<div class="video-category">
					<span>休闲服装</span>
					<span>运动鞋</span>
					<span>礼物</span>
				</div>
			</div>
		</div>
		<div class="list-cnt">
			<div class="video-container">
				<video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
				<img class="play-btn" src="../assets/bf.png" />
			</div>
			<div class="video-footer">
				<span class="companyName honesty">南京翔宇纺织制造有限公司</span>
				<div class="video-category">
					<span>休闲服装</span>
					<span>运动鞋</span>
					<span>礼物</span>
				</div>
			</div>
		</div>
		<!-- 类别弹窗 -->
		<!-- <div class="category-mask" @touchmove.prevent>
			<div class="category-pop">
				<div class="category-pop-cnt">
					<span>杯具器皿</span>
					<span>本册制作</span>
					<span>日用百货</span>
					<span>办公文教</span>
					<span>包装配件</span>
					<span>玩偶抱枕</span>
					<span>服饰箱包</span>
					<span>3C数码</span>
				</div>
			</div>
		</div> -->
		<!-- 筛选弹窗 -->
		<div class="select-mask">
			<div class="select-pop">
				<div class="price">
					<span class="txt">起订量</span>
					<input type="number" value="" />
					<span class="txt m-l">件</span>
				</div>
				<div class="price" >
					<span class="txt">均价区间</span>
					<input type="number" value="" />
					-
					<input style="margin-left:0" type="number" value="" />
					<span class="txt m-l">元</span>
				</div>
				<div class="select-item">
					<span class="txt right-icon">生产模式</span>
					<div class="select-item-cnt">
						<span>原厂</span>
						<span>生产代工</span>
						<span>生产设计</span>
						<span>其他</span>
					</div>
				</div>
				<div class="select-item">
					<span class="txt right-icon">货源类别</span>
					<div class="select-item-cnt">
						<span>现货</span>
						<span>需采购</span>
						<span>需生产</span>
						<span>其他</span>
					</div>
				</div>
				<div class="select-item">
					<span class="txt right-icon">出货周期</span>
					<div class="select-item-cnt">
						<span>三天内</span>
						<span>七天内</span>
						<span>十五天内</span>
						<span>其他时间</span>
					</div>
				</div>
				<div class="select-item">
					<span class="txt right-icon">发货地省份</span>
					<div class="select-item-cnt">
						<span>北京</span>
						<span>上海</span>
						<span>湖南</span>
						<span>广东</span>
						<span>浙江</span>
					</div>
				</div>
			</div>
			<div>
				<button class="cancel">取消</button>
				<button class="confirm">确定</button>
			</div>
		</div>
	</div>
</template>

<script>
	import publicHeader from './header'
	export default {
		components: {
			'publicHeader': publicHeader
		},
		data() {
			return {
				title: '生产方列表'
			}
		},
		methods: {

		},
		created() {
			this.$remLayout(document,window)
		},
		beforeCreate() {
			document.querySelector('body').setAttribute('style', 'background: #F3F3F3;');
		}
	}
</script>

<style scoped="scoped">
	.cancel{
		width:2.16rem;
		height:0.9rem;
		border-radius: 1rem;
		background: rgb(175,175,175);
		color:#fff;
		font-size: 0.3rem;
		line-height: 0.9rem;
		text-align: center;
		border:hidden;
		box-shadow:0 0 0.15rem 0rem rgba(175,175,175,0.5);
	}
	.confirm{
		width:3.31rem;
		height:0.9rem;
		line-height: 0.39rem;
		border-radius: 1rem;
		background: #FF0030;
		color:#fff;
		font-size: 0.3rem;
		text-align: center;
		border:hidden;
		box-shadow:0 0 0.15rem 0rem rgba(255,0,48,0.5);
	}
	.m-l{
		margin-left:0.37rem;
	}
	.price{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 0.24rem;
		margin-bottom: 0.54rem;
	}
	.price input{
		margin-left:0.63rem;
		width:1.27rem;
		height:0.48rem;
		border: hidden;
		border-radius: 0.49rem;
		background-color:#F6F5F5;
	}
	/* 筛选弹窗 */
	.select-item{
		margin-top:0.14rem;
		display: flex;
		flex-direction: column;
	}
	.select-mask{
		position: fixed;
		top:0;
		bottom: 0;
		background: rgba(243,243,243,1);
		width: 100%;
		z-index: 9;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.txt{
		display: inline-block;
		width: 1.21rem;
		font-size: 0.24rem;
		line-height: 0.24rem;
		color: #000000;
		text-align-last: justify;
	}
	.right-icon{
	    position:relative;
	}
	.right-icon::before{
		position: absolute;
		right: -0.2rem;
		top:50%;
		width:0.15rem;
		height:0.19rem;
		margin-top:-0.05rem;
		content: "";
		background-image: url(../assets/back.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		transform: rotate(-90deg);
	}
	.select-pop{
		margin-top:1.9rem;
		width:6.1rem;
		padding:0.7rem 0.3rem;
		background-color: #fff;
		border-radius: 0.12rem;
	}
	/* 类别弹窗 */
	.category-mask{
		position: fixed;
		top:0;
		bottom: 0;
		background: rgba(0,0,0,0.5);
		width: 100%;
		z-index: 9;
	}
	.category-pop{
		margin-top:1.9rem;
		width: 100%;
		background:#F3F3F3;
		display: flex;
		justify-content: center;
		padding: 0.4rem 0;
	}
	.category-pop-cnt{
		width:6.1rem;
		padding:0.8rem 0.3rem 0.3rem ;
		background-color:#FFFFFF;
		border-radius: 0.12rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.category-pop-cnt span{
		margin-bottom: 0.54rem;
		font-size: 0.24rem;
		line-height: 0.24rem;
		background-color:#AFAFAF;
		color:#fff;
		width:1.29rem;
		height:0.51rem;
		text-align: center;
		line-height: 0.51rem;
		border-top-left-radius: 0.12rem;
		border-bottom-right-radius: 0.12rem;
	}
	.select-item-cnt{
		margin-top:0.3rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.select-item-cnt span{
		margin-bottom:0.4rem;
		font-size: 0.24rem;
		line-height: 0.24rem;
		background-color:#AFAFAF;
		color:#fff;
		width:1.29rem;
		height:0.51rem;
		text-align: center;
		line-height: 0.51rem;
		border-top-left-radius: 0.12rem;
		border-bottom-right-radius: 0.12rem;
	}
	.triangle{
		position: absolute;
		display: inline-block;
		bottom: -0.85rem;
		left:50%;
		margin-left:-0.3rem;
		border-width: 0.3rem;
		border-bottom:0.3rem solid #fff;
		border-right: 0.3rem solid transparent;
		border-left: 0.3rem solid transparent;

	}
	.list-cnt{
		width: 6.7rem;
		margin: 0 auto 0.4rem;
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
	.video-footer{
		width: 6.1rem;
		height:1.36rem;
		padding:0.4rem 0.3rem;
		background-color:#fff;
		font-size: 0;
		border-radius: 0.1rem;
	}
	.companyName{
		font-size: 0.28rem;
		line-height: 0.28rem;
		color:#000000;
	}
	.honesty{
		position: relative;
	}
	.honesty::before{
		position: absolute;
		top:50%;
		right: -0.4rem;
		content: '';
		margin-top:-0.13rem;
		width:0.27rem;
		height:0.26rem;
		background-image: url(../assets/cx.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.video-category{
		margin-top:0.26rem;
		display: flex;
	}
	.video-category span{
		font-size: 0.24rem;
		line-height: 0.24rem;
		color:#fff;
		background-color: #000000;
		padding: 0.1rem 0.06rem;
		border-top-left-radius: 0.12rem;
		border-bottom-right-radius: 0.12rem;
		margin-right: 0.2rem;
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
	header {
		background-color: #F3F3F3 !important;
	}

	.container {
		padding-top: 2.12rem;
	}

	.tab {
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top:0.98rem;
		left: 0;
		z-index: 10;
		background-color: #F3F3F3;
	}
	.category{
		margin-left:0.34rem;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.category span{
		display: inline-block;
		width:0.99rem;
		height: 0.57rem;
		padding-left: 0.16rem;
		background: #fff;
		border-radius: 0.58rem;
		font-size: 0.28rem;
		line-height: 0.57rem;
		color: #000000;
		position: relative;
		margin-right:0.22rem;
	}
	.category span::before{
		position: absolute;
		content: '';
		top:50%;
		right: 0.18rem;
		background-image: url(../assets/back.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 0.09rem;
		height:0.17rem;
		margin-top:-0.045rem;
		transform: rotate(-90deg);
	}
	.select{
		width: 1.42rem;
		height:0.7rem;
		background-color: #FF0030;
		border-top-left-radius:0.8rem;
		border-bottom-left-radius:0.8rem;
		font-size: 0.28rem;
		color: #fff;
		font-weight: bold;
		line-height: 0.7rem;
		padding-left:0.28rem;
		position: relative;
		box-shadow: 0 0 0.15rem 0 rgba(255,0,48,0.5);
	}
	.select::before{
		position: absolute;
		top:50%;
		right:0.4rem;
		content: '';
		margin-top:-0.135rem;
		width: 0.28rem;
		height:0.27rem;
		background-image: url(../assets/sx.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

</style>
