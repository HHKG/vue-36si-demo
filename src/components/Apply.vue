<template>
  <div class="container">
    <publicHeader :title="title"/>
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
      <div class="phone input4">
        <input type="text" name="yourPosition" placeholder="职位" value="" />
      </div>
      <div class="phone input5">
        <input type="text" name="yourCompany" placeholder="公司名称" value="" />
      </div>
      <div class="phone input6">
        <input type="text" name="yourCompanyAdress" placeholder="公司地址" value="" />
      </div>
    </form>
    <!-- 注意事项 -->
    <div class="attention">
      <p class="attention-h">注意事项：</p>
      <div class="attention-cnt">
        <span>
            1、确保填写资料内容的真实性，如发现虚假信息将加入黑名单;
        </span>
        <span>
            2、同意支付样品寄送中发生的物流费用；
        </span>
        <span>
            3、收到样品后自愿在后续为我方提供相关的反馈；
        </span>
        <span>
            4、样品数量有限，我们将会采取随机寄送方式，请须知。
        </span>
      </div>
    </div>
    <!-- 发起申请 -->
    <div class="apply-btn" @click="applySample()">发起申请</div>
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
        title: '申请样品'
      }
    },
    methods: {
           applySample(){
             this.$router.push('/SampleRecord');
           }
    },
    created() {
      this.$remLayout(document, window);
    }
  }
</script>

<style scoped="scoped">
  .apply-btn{
    width: 4.6rem;
    height: 1.12rem;
    border-radius: 1.13rem;
    background: rgba(255,0,48);
    box-shadow: 0 0 0.15rem 0 rgba(255,0,48,0.5);
    margin: 0.77rem auto 1rem;
    text-align: center;
    line-height: 1.12rem;
    color:#fff;
    font-size: 0.3rem;
  }
  .attention{
    width:5.91rem;
    margin: 0 auto;
  }
  .attention .attention-h{
    font-size: 0.28rem;
    color: #000000;
    line-height:0.28rem;
  }
  .attention .attention-cnt{
    margin-top:0.43rem;
    display: flex;
    flex-direction: column;
  }
  .attention .attention-cnt span{
    font-size: 0.28rem;
    line-height: 0.42rem;
    color: #000000;
    text-indent:-1.6em;
    margin-left:2em;
  }
  header{
    background-color:#FFFFFF!important;
    }

  .container {
    font-size: 0;
    padding-top: 1rem;
  }

  form {
    width: 6.1rem;
    margin: 0.2rem auto 0.6rem;
    overflow: hidden;
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
    background-image: url(../assets/zw.png) ;
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
    background-image: url(../assets/adress.png);
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
