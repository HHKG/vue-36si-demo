<template>
  <div class="container">
    <publicHeader :title="title" />
    <!-- 样品申请记录内容区域 -->
    <div class="container-layout">
      <!-- 容器的header部分 -->
      <div class="container-h">
        等待提货
      </div>
      <!-- 容器内容部分 -->
      <div class="container-footer">
        <div class="container-cnt" @click="gotoHomePage()">
          <img :src="currentItem.indexImgUrl" class="avatar" />
          <p class="companyName">{{currentItem.supplierName}}</p>
        </div>
        <div class="container-status">
          <ul>
            <li v-for="item in currentItem.madeSupplierSampleGoodsOrderStatusLogs">
              <span v-if="item.orderStatus==0">待审核</span>
              <span v-if="item.orderStatus==1">审核失败</span>
              <span v-if="item.orderStatus==2">待发货</span>
              <span v-if="item.orderStatus==3">已发货</span>
              <span v-if="item.orderStatus==4">确认发货</span>
              <span v-if="item.orderStatus==5">已反馈</span>
              <span>{{item.createTimeStr}}</span>
            </li>
            <li>
              <span>待申请</span>
              <span>{{currentItem.madeSupplierSampleGoodsOrderStatusLogs[currentItem.madeSupplierSampleGoodsOrderStatusLogs.length-1].createTimeStr}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 物流订单信息 -->
    <div class="order" v-if="currentItem.orderStatus>=3">
      <p class="order-title">物流信息</p>
      <p>快递公司：{{currentItem.logisticsCompanyName}}</p>
      <p>快递单号：{{currentItem.logisticsNo}}</p>
      <button v-on:click="gotGood()">确认收货</button>
    </div>
    <!-- 上传反馈信息v-if="currentItem.orderStatus==4" -->
    <div class="feedback">
        <p>填写反馈信息</p>
        <div class="imgs">
          <div class="imgs-cnt" v-for="(item,index) in imgArr">
            <img class="changeImg" :src="item" />
            <img class="close" src="../assets/d.png" v-on:click="deleteImg(index,$event)" />
          </div>
          <div class="imgs-cnt">
            <img class="showImg" src="../assets/tp1.png" />
            <span class="addImg">添加照片</span>
            <input type="file" class="upload" v-on:change="selectImg($event)" />
          </div>
          <div class="imgs-cnt" v-if="imgArr.length%2==0 || imgArr.length==1"></div>
        </div>
        <textarea name="feedbackCnt" placeholder="请留下您对该生产商、样品或平台的体验反馈，以便我们进行更好的升级服务" v-bind:value="feedbackTxt"></textarea>
        <button v-on:click="getfromData()">提交</button>
      </div>
    <!-- 用户所反馈的信息模板 -->
    <div class="feed-container" v-if="currentItem.orderStatus==5">
      <span class="f-h-detail">反馈信息</span>
      <div class="add-cnt">
        <div class="join-img">
          <image class="addImg" src=""></image>
        </div>
        <div style="width:180rpx;height:180rpx;"></div>
      </div>
      <span class="textarea-container">12121</span>
    </div>
  </div>
</template>

<script>
  import publicHeader from './header'
  import axios from 'axios'
  export default {
    components: {
      'publicHeader': publicHeader
    },
    data() {
      return {
        title: '样品记录',
        imgArr: [], //上传的照片路径
        currentItem: {},
        imgFile: '', //上传的照片文件
        feedbackTxt:''//反馈文本内容
      }
    },
    methods: {
      //确认收货
      gotGood() {
        let urId = sessionStorage.getItem('urId');
        let supplierSampleGoodsOrderId = this.currentItem.supplierSampleGoodsOrderId;
        let data = {
          urId,
          supplierSampleGoodsOrderId
        };
        this.$post('/api/utime-web-WeChat/supplier/ajaxConfirmReceipt', data).then(res => {
          console.log(res);
        });
      },
      //七牛上传照片需要传递的参数
      // initQiniu(){
      //   let uptokenURLs = this.$baseUrl + '/utime-web-WeChat/qiniu/upToken'
      //   let options = {region: 'ECN',uptokenURL: uptokenURLs,domain:this.$mediaUrl,shouldUseQiniuFileName: true};
      //   this.$init(options);
      // },
      //从本地上传照片
      selectImg(event) {
        let imgFile = event.target.files[0];
        console.log(imgFile);
        if (imgFile) {
          this.imgFile = imgFile;
          console.log(this.imgFile);
          //实例化一个读取本地文件的对象
          let reader = new FileReader();
          let that = this;
          //把图片文件转化为base64格式
          reader.readAsDataURL(imgFile);
          //文件读取完成时触发onload
          reader.onload = function(e) {
            console.log(e, this.result, '=====================================')
            that.imgArr.push(this.result);
            that.updateer();
          }
        }
      },
      //从所选的照片中删除不想上传的照片
      deleteImg(event) {
        //当前选中在数组中照片的索引
        let currentIndex = event;
        this.imgArr.splice(currentIndex, 1);
        console.log(this.imgArr);
      },
      //url 七牛部署的地址
      // bucket参数为七牛的空间名
      // this.$refs.imgLocal.files[0] 为上传的图片的名包含路径
      // res返回数据为一个key,通过key可以获取上传到七牛上的图片地址
      // 图片上传凭证
      updateer() {
        let uptokenURLs = this.$baseUrl + '/utime-web-WeChat/qiniu/upToken',
          domain = this.$mediaUrl
        // let options = {region: 'ECN',uptokenURL: uptokenURLs,shouldUseQiniuFileName: true};
        //  bucket:‘public-image’(可直接拼接图片地址)
        axios.post(uptokenURLs, {
          bucket: ''
        }).then((res) => {
          const uploadToken = res.data.upToken;
          var data = new FormData();
          data.append('token', uploadToken);
          data.append('file', this.imgArr[0]);
          axios({
            method: 'POST',
            url: domain,
            data: data,
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            },
          }).then((res) => {
            //  `http://publicimage.xq5.com/${response.data.key}`; （若bucket 参数为public-image则不需要下一步的图片地址获取可直接使用http://publicimage.xq5.com/ + ‘res.data.key’，拼接图片地址）
            console.log(res.data.key)
          })
        });
      },
      //获取代码格式
      getfromData(){
        let that=this;
        let {feedbackTxt}=that
        console.log(feedbackTxt,'ok')
      },
      // 进入企业主页
      gotoHomePage(){
        this.$router.push({name:'HomePage',params:{supplierId:this.currentItem.supplierId}});
        // 或者用这种方法
        // this.$router.push({path:'/HomePage',query:{supplierId:this.currentItem.supplierId}});
       }
    },
    created() {
      this.$remLayout(document, window);
      // 上一个页面通过路由把当前选中的数据传递过来
      let currentItem = this.$route.params.currentItem;
      this.currentItem = currentItem;
      // console.log(this.$route.query.currentItem); // 通过这种方式的传参，会在出现在地址栏
    },
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background-color:#F6F5F5');
    }
  }
</script>

<style scoped="scoped">
  .textarea-container {
    width: 550rpx;
    background-color: #F6F5F5;
    white-space: normal;
    font-size: 24rpx;
    padding: 30rpx;
    border-radius: 12rpx;
    color: #000;
  }

  .join-img {
    position: relative;
    width: 180rpx;
    height: 180rpx;
    border-radius: 12rpx;
    /* margin-right:21rpx; */
    margin-top: 21rpx;
  }

  .add-cnt {
    margin: 46rpx 0rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .f-h-detail {
    font-size: 0.28rem;
    color: #000000;
    line-height: 0.28rem;
    font-weight: bold;
  }

  .feed-container {
    margin: 46rpx auto 0;
    width: 610rpx;
    padding: 30rpx;
    background: #fff;
    border-radius: 12rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  button {
    display: table;
    width: 2.83rem;
    height: 1.02rem;
    border-radius: 1.1rem;
    background: #FF0030;
    color: #fff;
    font-size: 0.3rem;
    line-height: 1.02rem;
    border: hidden;
    margin: 1rem auto 0;
    box-shadow: 0 0 0.15rem 0 rgba(255, 0, 48, 0.5);
  }

  textarea {
    margin-top: 0.67rem;
    width: 5.5rem;
    height: 1.85rem;
    border-radius: 0.12rem;
    background-color: rgb(246, 245, 245);
    padding: 0.3rem;
    border: hidden;
    font-size: 0.24rem;
    color: rgb(175, 175, 175);
  }

  textarea::-ms-textarea-placeholder {
    color: rgb(175, 175, 175);
  }

  .showImg {
    width: 1.8rem;
    height: 1.8rem;
  }

  .addImg {
    font-size: 0.24rem;
    line-height: 0.24rem;
    color: #000000;
    display: inline-block;
    width: 1.8rem;
    text-align: center;
    margin-top: 0.24rem;
  }

  .changeImg {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.12rem;
  }

  .close {
    position: absolute;
    top: -0.15rem;
    right: -0.15rem;
    z-index: 5;
    width: 0.4rem;
    height: 0.4rem;
  }

  .imgs-cnt {
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    margin-bottom: 0.3rem;
  }

  .upload {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.8rem !important;
    height: 2.3rem;
    opacity: 0;
  }

  .feedback {
    padding: 0.56rem 0.3rem 1rem;
    background-color: #FFFFFF;
    width: 6.1rem;
    border-radius: 0.12rem;
    margin: 0.46rem auto 0;
  }

  .imgs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .order-title {
    font-size: 0.28rem;
    line-height: 0.28rem;
    color: #000000;
    font-weight: bold;
  }

  p {
    font-size: 0.24rem;
    line-height: 0.24rem;
    color: #000;
    margin: 0rem 0rem 0.44rem 0rem;
  }

  .order {
    width: 6.1rem;
    padding: 0.54rem 0.3rem;
    background-color: #fff;
    border-radius: 0.12rem;
    margin: 0.46rem auto 0;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.26rem;
    line-height: 0.26rem;
    color: #000000;
  }

  ul {
    display: flex;
    width: 6.11rem;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: auto;
  }

  ul::-webkit-scroll {
    display: none;
  }

  li {
    width: 1.5rem;
    position: relative;
    margin-right: 0.8rem;
  }

  li:last-child::before {
    background: none;
  }

  li::before {
    position: absolute;
    right: -0.4rem;
    top: 50%;
    margin-top: -0.1rem;
    content: '';
    width: 0.3rem;
    height: 0.2rem;
    background-image: url(../assets/1-1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: rotate(-180deg);
  }

  li span:last-child {
    margin-top: 0.2rem;
    display: inline-block;
    width: 1.5rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
    color: rgb(175, 175, 175);
  }

  .avatar {
    width: 0.9rem;
    height: 0.9rem;
  }

  .companyName::after {
    position: absolute;
    right: 0;
    top: 50%;
    content: '';
    margin-top: -0.135rem;
    background-image: url(../assets/back.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 0.27rem;
    height: 0.27rem;
    transform: rotate(180deg);
  }

  .container-cnt {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container-footer {
    padding: 0.3rem;
    background-color: #fff;
  }

  .right-icon {
    width: 0.27rem;
    height: 0.27rem;
    transform: rotate(180deg);
  }

  .companyIcon {
    width: 0.9rem;
    height: 0.9rem;
  }

  .companyName {
    padding-left: 0.3rem;
    position: relative;
    width: 6.11rem;
    height: 0.9rem;
    font-size: 0.28rem;
    line-height: 0.9rem;
  }

  .container-h {
    border-radius: 0.12rem;
    background-color: #fff;
    padding: 0.3rem;
    font-size: 0.26rem;
    line-height: 0.26rem;
    color: #000000;
  }

  .container-layout {
    width: 6.7rem;
    margin: 0 auto 0.46rem;
  }

  .container {
    background-color: #F6F5F5;
    padding-top: 1.28rem;
    font-size: 0;
    padding-bottom: 0.4rem;
  }

  header {
    background-color: #F6F5F5 !important;
  }

  html,
  body {
    /* background-color:#F6F5F5!important; */
  }
</style>
