<template>
    <div id="home">
       <div class="head">
         <div class="h-top">
              <div class="fl">
                  <label>送至：</label><span>昌平区</span><i class="jian"><img src="../components/img/rig.jpg" alt=""></i>
              </div>
              <div class="fr">
                  <i class="sou"></i>
              </div>
         </div>
         <div class="h-xia">
            <ul>
              <li>
                多点超市
                <img src="../components/img/p1.png" alt="">
              </li>
              <li>
                全球精选
                <img src="../components/img/p2.png" alt="">
              </li>
            </ul>
         </div>
         
       </div>
       <!-- 主要内容 -->
       <div class="main clear">
         <!-- 轮播图 -->
         <div class="lun">
           <img src="../components/img/l1.png" alt="">
         </div>
         <div class="caidan">
           <ul>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
           </ul>
           <ul>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
             <li>
               <img src="../components/img/c1.png" alt="">
               <p>早晚市</p>
             </li>
           </ul>
         </div>
         <!-- 广告 -->
         <div class="tab-list1">
           <img src="../components/img/h1.png" alt="">
         </div>
         <div class="tab-list2">
           <img src="../components/img/h2.png" alt="">
         </div>
         <div class="mould">
           <ul>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
           </ul>
         </div>
         <div class="mould">
           <ul>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
           </ul>
         </div>
         <div class="mould">
           <ul>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
             <li>
               <img src="../components/img/mod1.png" alt="">
             </li>
           </ul>
         </div>
         <!--  -->
       </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    #home .head{
      height: 1.61rem;
      font-size: 0.27rem;
    }
    #home .h-top{
      height: 0.84rem;
      line-height: 0.84rem;
    }
    #home .fl {
      float: left;
      margin-left: 0.3rem;
    }
    .fl img{
      vertical-align: middle;
    }
    #home .fr{
      float: right;
      padding-top: 0.2rem;
    }
    #home .fr .sou{
      background: url("../components/img/sprt.png") no-repeat;
      background-size: 400px auto;
      width: 0.57rem;
      height: 0.5rem;
      display: inline-block;
      background-position: 0 -50px;
    }
    .h-xia ul{
      height: 0.76rem;
    }
    .h-xia li{
      float: left;
      position: relative;
      margin-left: 0.32rem;
      margin-right: 0.32rem;
      padding-top: 0.3rem;
    }
    .h-xia img{
      position: absolute;
      width: 0.8rem;
      top: 0.1rem;
      left: 0.3rem;
    }
    .lun{
      width: 100%;
      height: 3rem;
    }
    .lun img{
      width: 100%;
      height: 100%;
    }
    .main{
      background: #F6F6F6;
    }
    .main .caidan{
      margin-top: 0.19rem;
    }
    .main .caidan ul{
      display: flex;
      background: #fff;
      color: #888;
    }
    .main .caidan li{
      width: 20%;
      text-align: center;
    }
    .main .caidan img{
      height: 1rem;
      vertical-align: middle
    }
    .main .caidan p{
      font-size: 12px;
    }
    .main .tab-list1{
      height: 2.7rem;
    }
    .tab-list1 img{
      width: 100%;
      height: 100%;
    }
    .main .tab-list2{
      height: 2.46rem;
      margin-top: 0.19rem;
    }
    .tab-list2 img{
      width: 100%;
      height: 100%;
    }
    .mould ul{
      display: flex;
    }
    .mould li{
      width: 33.3%;
    }
    .mould li img{
      width: 100%;
      height: 3rem;
    }
</style>