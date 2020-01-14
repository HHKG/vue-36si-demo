import axios from 'axios'
import qs from 'qs'
function remLayout(doc, win) {
   var docEl = doc.documentElement,
     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
     recalc = function() {
       var clientWidth = docEl.clientWidth;
       console.log(clientWidth);
       if (!clientWidth) return;
       docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
       console.log('okokokokokokokok');
       if (clientWidth >= 750) {
         docEl.style.fontSize = '100px';
       } else {
         console.log(docEl.style.fontSize, (clientWidth / 750));
         // 1rem=100 * (clientWidth / 750)   **100:系数 clientWidth设备屏幕宽度  750：设计稿的宽度
         docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
       }
     };
   if (!doc.addEventListener) return;
   win.addEventListener(resizeEvt, recalc, false);
   doc.addEventListener('DOMContentLoaded', recalc, false);
 }
 //测试图片路径
 const mediaUrl='https://test.utimecn.cn/'
//正式图片路径
//  const mediaUrl='https://wap.utimecn.cn/'
//测试后台数据路径
const baseUrl ='https://dev.utimecn.cn';
//正式后台数据路径
// const baseUrl ='https://main.utimecn.cn';
// 封装一个请求Promise请求
function http(url,param={},method){
  return new Promise((resolve,reject)=>{
    //用Promsise封装vue的axios请求
  axios({
    method:method,
    headers:{'content-type':'application/x-www-form-urlencoded;charset=utf-8'},
    url:url,
    data:qs.stringify(param)
       }).then(res=>{
           if(res.status>=200 && res.status<300){
                resolve(res.data);//返回成功的数据
           }else{
                reject(res.data);//返回失败的数据
           }
          })
  })
}

function post(url,param={}){
  let method='post'
  return http(url,param,method);
}
export default{remLayout,mediaUrl,http,post,baseUrl}
