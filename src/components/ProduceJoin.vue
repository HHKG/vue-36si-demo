<template>
  <div class="container">
     <publicHeader :title="title"/>
     <img src="../assets/2.png" class="banner" />
     <!-- 申请加盟 -->
     <div class="apply">
       <!-- 轮播图组件 -->
       <div class="swiper">
         <div class="swiper-item">
           <ul>
             <li class="item1">
               <span>在线提</span>
               <span>交申请</span>
             </li>
             <li class="item2">
               <span>平台渠</span>
               <span>道展示</span>
             </li>
             <li class="item3">
               <span>商脉圈</span>
               <span>互通</span>
             </li>
             <li class="item4">
               <span>获取</span>
               <span>采购商</span>
             </li>
           </ul>
           <ul>
             <li class="item1">
               <span>在线提</span>
               <span>交申请</span>
             </li>
             <li class="item2">
               <span>平台渠</span>
               <span>道展示</span>
             </li>
             <li class="item3">
               <span>商脉圈</span>
               <span>互通</span>
             </li>
             <li class="item4">
               <span>获取</span>
               <span>采购商</span>
             </li>
           </ul>
           <ul>
             <li class="item1">
               <span>在线提</span>
               <span>交申请</span>
             </li>
             <li class="item2">
               <span>平台渠</span>
               <span>道展示</span>
             </li>
             <li class="item3">
               <span>商脉圈</span>
               <span>互通</span>
             </li>
             <li class="item4">
               <span>获取</span>
               <span>采购商</span>
             </li>
           </ul>
           <ul>
             <li class="item1">
               <span>在线提</span>
               <span>交申请</span>
             </li>
             <li class="item2">
               <span>平台渠</span>
               <span>道展示</span>
             </li>
             <li class="item3">
               <span>商脉圈</span>
               <span>互通</span>
             </li>
             <li class="item4">
               <span>获取</span>
               <span>采购商</span>
             </li>
           </ul>
         </div>
       </div>

         <div class="form-title">入驻流程</div>
       <!-- 表单数据 -->
       <form>
         <div class="phone input1">
           <input type="text" name="yourName" placeholder="姓名" value="" />
         </div>
         <div class="phone input2">
           <input type="number" name="yourPhone" placeholder="手机号" value="" />
           <span>获取验证码</span>
         </div>
         <div class="phone input3">
           <input type="number" name="yourCode" placeholder="输入手机验证码" value="" />
         </div>
         <div class="phone input5">
           <input type="text" name="yourCompany" placeholder="公司名称" value="" />
         </div>
         <div class="phone input4">
           <input type="text" name="yourCompanyBelong" placeholder="贵司所属行业" value="" />
         </div>
         <div class="phone input6">
           <input type="text" name="yourMail" placeholder="邮箱以开通后台账号" value="" />
         </div>
         <div class="toast">在1个工作日内为您开通后台账号，请您留意邮件</div>
         <div class="btn">申请加盟</div>
       </form>
     </div>
     <!--  已入驻供应商品类 -->
     <div class="category">
       <p class="category-title">已入驻供应商品类</p>
       <p class="category-txt">多品类  多行业  多范畴  一站式展示</p>
       <img class="category-img" src="../assets/fl.png" />
     </div>
     <!-- 底部按钮们 -->
     <div class="btns">
       <span class="btn-server">客服</span>
       <a class="btn-tel">电话咨询</a>
     </div>
  </div>
</template>
<!-- <script src="../lib/mui/js/mui.min.js"></script> -->
<script>
  import publicHeader from './header.vue'
  export default {
    components:{
      'publicHeader':publicHeader
    },
    data() {
      return {
        title: '申请加盟'
      }
    },
    methods: {

    },
    created() {
      this.$remLayout(document, window);
    }
  }
</script>

<style scoped="scoped">
  /* @import url("../lib/mui/css/mui.min.css"); */
  *{
    touch-action: none;
  }
  .btns{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #FFFFFF;
    width: 7.5rem;
    height: 1.76rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-server{
    display: inline-block;
    width:1.72rem;
    height: 1.12rem;
    border-radius: 0.55rem;
    font-size:  0.3rem;
    line-height: 1.12rem;
    color: #fff;
    background: rgb(248,202,59);
    box-shadow:0rem 0rem 0.15rem 0rem rgba(248,202,59,0.5);
    text-align: center;
    margin-right:0.37rem;
  }
  .btn-tel{
    display: inline-block;
    width:4.6rem;
    height: 1.12rem;
    border-radius: 0.55rem;
    font-size:  0.3rem;
    line-height: 1.12rem;
    color: #fff;
    background: rgb(255,0,48);
    box-shadow: 0rem 0rem 0.15rem 0rem rgba(255,0,48,0.5);
    text-align: center;
  }
  .category{
    margin:0.8rem 0.4rem;
  }
   .category .category-title{
     font-size: 0.36rem;
     font-weight: bold;
     color: #000000;
   }
   .category .category-txt{
     font-size: 0.24rem;
     color:rgb(175,175,175);
     line-height: 0.24rem;
     margin-top:0.3rem;
   }
    .category .category-img{
      margin-top:0.4rem;
      width:6.7rem;
    }
  .toast{
    font-size: 0.25rem;
    line-height: 0.25rem;
    text-align: center;
    color: #000000;
    margin-top:0.5rem;
  }
  .form-title{
    font-size: 0.28rem;
    line-height: 0.28rem;
    margin:0.33rem 0 0.5rem 0;
    color: #000000;
  }
  .btn{
    width: 2.83rem;
    height: 1.02rem;
    color: #fff;
    border-radius: 1.03rem;
    text-align: center;
    line-height: 1.02rem;
    font-size: 0.3rem;
    box-shadow: 0 0 0.15rem 0 rgba(255,0,48,0.5);
    background: rgba(255,0,48);
    margin: 0.7rem auto;
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li{
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    color:#fff;
    line-height: 0.46rem;
    width:1.39rem;
    hieght:1.08rem!important;
    border-top-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    text-align: center;
  }
  .swiper{
    position: absolute;
    top:-0.54rem;
    left: 0;
    width: 7.5rem;
    overflow: hidden;
    overflow-x: auto;
  }
  .swiper-item{
    display: flex;
    width: 100rem;
  }
  .swiper-item ul{
    width: 6.7rem;
    display: flex;
    justify-content:space-between;
    margin-left: 0.4rem;
  }
  .item1{
      background: rgba(255,0,48);
      box-shadow: 0 0 0.15rem rgba(255,0,48,0.5);
  }
  .item2{
    background:rgb(252,199,36);
    box-shadow: 0 0 0.15rem 0 rgba(252,199,36,0.5);
  }
  .item3{
    background: rgb(10,1,128);
    box-shadow: 0 0 0.15rem 0 rgba(10,1,128,0.5);
  }
  .item4{
    background: rgb(0,0,0);
    box-shadow: 0 0 0.15rem 0 rgba(0,0,0,0.5);
  }
  .apply{
    background: #F3F3F3;
    padding:0.4rem;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top:0.45rem;
  }
  header{
    background-color:#fff!important;
  }
  .container{
    margin-top: 1.12rem;
    padding-bottom:1.76rem;
  }
  .banner{
    width:6.7rem;
    height: 1.04rem;
    margin:0.4rem;
  }

  form {
    overflow: hidden;
    background: #fff;
    padding: 0.2rem 0.6rem;
    border-radius: 0.12rem;
  }
  input{
    padding-left:0.56rem;
    font-size: 0.27rem;
    line-height: 0.27rem;
    color:rgb(175,175,175);
    border:hidden!important;
    position: relative;
  }
  input:focus{
    outline:none;
    border:hidden!important;
  }
  .input1::after{
    position: absolute;
    content: '';
    top:0;
    left:0;
    width:0.2rem;
    margin-top:0.02rem;
    height: 0.26rem;
    background-size: 100% 100%;
    background-image: url(../assets/mc.png);
    background-repeat: no-repeat;
  }
  .input2::after{
    position: absolute;
    content: '';
    top:0;
    left:0;
    width:0.2rem;
    margin-top:0.02rem;
    height: 0.26rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/sj.png);
  }
  .input3::after{
    position: absolute;
    content: '';
    top:0;
    left:0;
    width:0.2rem;
    margin-top:0.02rem;
    height: 0.26rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/yz.png);
  }
  .input4::after{
    position: absolute;
    content: '';
    top:0;
    left:0;
    width:0.2rem;
    margin-top:0.02rem;
    height: 0.26rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/hy.png) ;
  }
  .input5::after{
    position: absolute;
    content: '';
    top:0;
    left:0;
    width:0.2rem;
    margin-top:0.02rem;
    height: 0.26rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/td.png);
  }
  .input6::after{
    position: absolute;
    content: '';
    top:0;
    left:0;
    width:0.2rem;
    margin-top:0.02rem;
    height: 0.26rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/yx.png);
  }
  .phone {
    margin-top:0.5rem;
    font-size: 0;
    position: relative;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .phone::before{
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 0.01rem solid rgb(220,220,220);
    content: '';
    width: 100%;
    transform: scale(1,0.5);
  }
  .phone span {
    font-size: 0.28rem;
    color: #000000;
  }
</style>
