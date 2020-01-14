<template>
  <div class="container">
    <!-- antHome的header部分 -->
    <div class="h-cnt">
      <img class="img" src="../assets/1.png" />
      <div class="person" @click="gotoPerson()">
        <img class="icon" src="../assets/gr1.png" />
      </div>
    </div>
    <!-- 直播间 -->
    <div>
      <p class="title-txt">生产直播间</p>
      <!-- 直播间轮播块 -->
      <div class="swiper">
        <ul id="img-container">
          <li v-for="(item,index) in antHomeData" v-on:touchstart="touchstart(index,$event)" v-on:touchend="touchend(index,$event)">
            <video class="video" :src="item.adUrl" poster="" controls=""></video>
            <div class="footer" v-on:click="gotoHomePage(item)">
              <div class="companyName">{{item.supplierName}}</div>
              <div class="category-cnt">
                <span v-for="(childremItem,index) in item.labels">{{childremItem}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 轮播的dots -->
      <div class="swiper-dot">
        <div class="dots">
          <span v-for="(item,index) in imgArr" class="dot"></span>
        </div>
        <span class="looking" v-on:click="gotoProduceList()">查看全部</span>
      </div>
      <!-- 广告图 -->
      <div class="banner">
        <img src="../assets/banner.png" />
      </div>
      <!-- 家门按钮 -->
      <div class="btn" @click="gotoProduceJoin()">申请加盟</div>
      <a class="call" href="tel:0755-2632888">咨询热线 0755 2632888</a>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import $ from 'jquery';
  import axios from 'axios'
  export default {
    data() {
      console.log(this.$data)
      return {
        imgArr: [{
          src: require('../assets/timg.jpg'),
          campanyName: '压力山大网络科技有限公司',
          category: ['房贷', '车贷', '礼金']
        }, {
          src: require('../assets/timg.jpg'),
          campanyName: '进阶网络科技有限公司',
          category: ['学习', '健身', '实践']
        }, {
          src: require('../assets/timg.jpg'),
          campanyName: '情感网络科技有限公司',
          category: ['陪伴', '提升', '安全感']
        }, {
          src: require('../assets/timg.jpg'),
          campanyName: '社会网络科技有限公司',
          category: ['不理解', '自私', '无所谓']
        }],
        newArr: [],
        starY: null,
        startX: null,
        endX: null,
        endY: null,
        antHomeData: [],
        supplierId:null
      }
    },
    methods: {
      gotoPerson() {
        this.$router.push('/Person');
      },
      gotoProduceList() {
        this.$router.push('/ProduceList');
      },
      gotoHomePage(item) {
        let currentItem=item;
        console.log(currentItem);
        this.$router.push({name:'HomePage',params:{supplierId:currentItem.supplierId}});
      },
      gotoProduceJoin() {
        this.$router.push('/ProduceJoin');
      },
      //获取用户id
      getUserId() {
         let  city= "Guangzhou",
          code= "043waBnS0f7HQ52MDIoS0i3LnS0waBnv",
          country= "China",
          encryptedData= "1Pirkp3Kr96uPAqcNJ+l2v1PPSXgmNYaFZLdGJf40P1vv0WcRscF/tubarM7/HmnwnyUOqZ/sfOJuzNFuTUmhOS2xSQJj2gi6X5kf1PZ+/fqapxoUCvGGRKvzEQG0fnSSWNtgsku7X/jXVrTFUmiuf9xrf5nNAncx8KHEV6WCGTmFkhBCPyLCVd0TwVVE0l8O8M5/NNFiAo0Am81A7kZw2KKOV7a+rPBFOYy+9uWljwbVeR76hI/pn9aIk5WG7kJumfuQNYKLpij76Lihy19JaUO2pUPaZ7BU2YwxTGtBEpD4x/5nQ6ug/COoju6aukv7wL5O77RamiPtAzs9bpnFshI18LiEShDuuVSPvX5OQtmiyPDlysn0mow9ra0svPscidpn+IqY14i0lDEKaM3WSK3xHEe7A5AgO73zUI5In5KcJIWR2CjxhOntgV4AbTG2Y/WZOLkscr2iwQiBylQR4KUMZ89yLvJwvNADDI833U=",
          flag= 2,
          headimgurl="https=//wx.qlogo.cn/mmopen/vi_32/uKFxMIdgB0nWOhbPfR5XHc5FZk2ZJRl9U2pXeEbtaRgnBibibfrv4SEqlps99IRhRticSFiawkdPNiccfybicIWMN4Yg/132",
          iv= "EcAqJPeXSn7cO8dxO3wT1w==",
          nickname= "KG",
          province="Guangdong",
          sex=1;
         let data={city,code,country,encryptedData,flag,headimgurl,iv,nickname,province,sex};
         this.$post('/api/sentry/wxxMadeUser/onLogin',data).then(res=>{
           console.log(res)
         })
      },
      /*
       *计算滑块的滑动距离
       */
      calculate(X, index, event) {
        //思路，每次滑动的距离是6.94rem;
        console.log(index);
        //每次向左移动的距离
        if (X > 0) {
          //无缝循环轮播，当滑动的是第1张图片，瞬间滑动把图片定位在第四张，然后执行从第四张张向第三张滑动的过程
          if (index == 0) {
            index = 4;
            $('#img-container').css('margin-left', '-30rem');
          }
          var moveDistance = -(index - 1) * 6.94 + 'rem';
        } else {
          //无缝循环轮播，当滑动的是第四张图片，瞬间滑动把图片定位在第一张，然后执行从第一张向第二张滑动的过程
          if (index == 4) {
            index = 0;
            $('#img-container').css('margin-left', '0rem');
          }
          var moveDistance = -(index + 1) * 6.94 + 'rem';
        }
        $('.dot').removeClass('active');
        $('.dot').eq(index).addClass('active');
        //每次滑动，执行的动画距离和效果
        $('#img-container').animate({
          'margin-left': moveDistance
        });
      },
      touchstart(index, event) {
        this.startX = event.changedTouches[0].pageX;
        this.startY = event.changedTouches[0].pageY;
      },
      touchend(index, event) {
        this.endX = event.changedTouches[0].pageX;
        this.endY = event.changedTouches[0].pageY;
        var X = this.endX - this.startX;
        var Y = this.endY - this.starY;
        if (X > 0) {
          //右滑
          this.calculate(X, index, event);
          console.log('右滑');
        } else if (X < 0) {
          //左滑
          this.calculate(X, index, event);
          console.log('左滑');
        }
      }
    },
    created() {
      this.$remLayout(document, window);
      this.getUserId();
      this.newArr = this.imgArr;
      // console.log(req);
      this.newArr = this.newArr.concat(this.imgArr);
      sessionStorage.setItem('urId','12067');
      let addsd=sessionStorage.getItem('urId');
      let data = {}
      // fetch("/api/utime-web-WeChat/supplier/ajaxHomepageMadeSupplier",{
      // 	data:data,
      // 	method:'post',
      // 	headers:{
      // 		'content-type':'application/x-www-form-urlencoded;charset=utf-8'
      // 	}
      // })
      // .then(res=>{
      // 	return res.json();
      // }).then((data)=>{
      // 	console.log(data);
      // })
      // $axios({method:'post',url:'/api/utime-web-WeChat/supplier/ajaxHomepageMadeSupplier',data:data}).then(res=>{
      // 	console.log(res);
      // })
      // 获取首页数据
      axios.post('/api/utime-web-WeChat/supplier/ajaxHomepageMadeSupplier', data).then(res => {
        console.log(res.data);
        let dataList = res.data.data;
        dataList.forEach(x => {
          x.adUrl = this.$mediaUrl + x.adUrl;
        })
        this.antHomeData = dataList;
        this.supplierId=dataList.supplierId;
        console.log(this.antHomeData)
      });
    },
    mounted() {
      $('.dot').eq(0).addClass('active');
    }
  }
</script>

<style scoped>
  .video {
    width: 6.64rem;
    height: 4.65rem;
    border-radius: 0.12rem;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
  }

  .companyName {
    font-size: 0.28rem;
    line-height: 0.28rem;
    color: #000000;
  }

  .footer {
    height: 0.98rem;
    display: flex;
    flex-direction: column;
    margin-left: 0.32rem;
    margin-top: 0.3rem;
  }

  .category-cnt {
    margin-top: 0.36rem;
    width: 100%;

    font-size: 0.24rem;
  }

  .category-cnt span {
    background: #000000;
    color: #fff;
    border-bottom-right-radius: 0.12rem;
    border-top-left-radius: 0.12rem;
    padding: 0.10rem 0.14rem;
    margin-right: 0.2rem;
  }

  .h-cnt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.9rem 0.4rem;
  }

  .h-cnt .img {
    width: 4.78rem;
    height: 0.8rem;
  }

  .h-cnt .person {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.9rem;
    height: 0.9rem;
    border-top-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    background-color: rgb(255, 0, 48);
    box-shadow: 0rem 0rem 0.15rem 0rem rgba(255, 0, 48, 0.5);
  }

  .person .icon {
    width: 0.36rem;
    height: 0.42rem;
  }

  .img {
    width: 7.5rem;
  }

  .title-txt {
    font-size: 0.3rem;
    line-height: 0.3rem;
    font-weight: bold;
    color: #000;
    padding-left: 0.7rem;
  }

  .swiper {
    margin-left: 0.4rem;
    margin-top: 0.4rem;
    width: 7.1rem;
    height: auto;
    overflow: hidden;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul {
    paddgin-left: 0.4rem;
    display: flex;
  }

  li {
    margin-right: 0.3rem;
    width: 6.64rem;
    height: 6.9rem;
  }

  .swiper-dot {
    display: flex;
    justify-content: space-between;
    margin: 0 0.4rem;
  }

  .dots {
    font-size: 0.26rem;
  }

  .dots span {
    display: inline-block;
    width: 0.14rem;
    height: 0.14rem;
    border-radius: 0.15rem;
    background-color: #CCCCCC;
    margin-right: 0.23rem;
  }

  .looking {
    position: relative;
    font-size: 0.26rem;
    line-height: 0.26rem;
    color: #000;
    display: inline-block;
    height: 0.26rem;
    padding-right: 0.3rem;
  }

  .looking:after {
    position: absolute;
    content: '';
    width: 0.26rem;
    height: 0.26rem;
    top: 50%;
    right: 0;
    margin-top: -0.13rem;
    background-image: url('data: image/png;base64,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');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .active {
    background: #000000 !important;
  }

  .banner {
    width: 6.63rem;
    height: 2.5rem;
    margin: 0.6rem auto 0;
  }

  .banner img {
    width: 100%;
    height: 100%;
    border-radius: 0.12rem;
  }

  .btn {
    margin: 0.8rem auto 0;
    width: 6.63rem;
    height: 1.02rem;
    border-radius: 1.03rem;
    background-color: rgb(225, 0, 48);
    color: #fff;
    font-size: 0.3rem;
    line-height: 1.02rem;
    text-align: center;
    box-shadow: 0 0 0.15rem 0 rgba(255, 48, 255, 0.5);
  }

  .call {
    margin: 0.45rem 0;
    display: block;
    width: 100%;
    font-size: 0.24rem;
    line-height: 0.24rem;
    color: #000000;
    text-align: center;
    text-decoration: none;
  }
</style>
