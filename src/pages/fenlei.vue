<template>
    <div id="fenlei">
        <div class="banner">
        </div>
        <div class="title">
            <div class="logo">
                <img src="../components/img/logo.png" alt="">
            </div>
            <span class="src">
                <img src="../components/img/src_white.png" alt="">
            </span>
            <span class="sou">
                <img src="../components/img/search_white.png" alt="">
            </span>
            <p>多点超市(北京物美昌平超市)</p>
            <div class="allbox">
                <span>
                  <img src="../components/img/all.png" alt="">
                </span>
                <ul>
                  <li>
                    全部分类
                  </li>
                  <li>
                    热卖TOP
                  </li>
                  <li>
                    什么值得买
                  </li>
                </ul>
            </div>
        </div>
        <div class="speak">
          <img src="../components/img/speaker.png" alt="">
          <p>79元免运费/59元~79元仅2元运费</p>
        </div>
        <div class="content">
          <ul>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
            <li>
              <img src="../components/img/you.jpg" alt="">
              <p>[次日达]维多利红柚 1.15kg/1粒</p>
              <span>￥9.10</span>
              <span class="jia">+</span>
            </li>
          </ul>
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
    #fenlei .banner{
      background: url("../components/img/banner.jpg") no-repeat center;
      height: 3.5rem;
      background-size: 100% 100%;
      position: relative;
    }
    #fenlei .title{
      height: 3.5rem;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
    }
    .title .logo{
      width: 1.4rem;
      height: 1.4rem;
      position: absolute;
      left: 40%;
      top: 10%;
    }
    .title .logo img{
      width: 100%;
      height: 100%;
    }
    .title span{
      display: inline-block;
      height: .53rem;
      width: .53rem;
      position: absolute;
      line-height: 0.53rem;
    }
    .title span img{
      width: 100%;
      height: 100%;;
    }
    .title .src{
      top: 0.1rem;
      right: 0.6rem;
    }
    .title .sou{
      top: 0.1rem;
      right: 0;
    }
    .title p{
      font-size: 0.27rem;
      color: white;
      text-align: center;
      padding-top: 2rem;
    }
    .title .allbox{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.6rem;
      font-size: 0.3rem;
      color: white;
    }
    .title .allbox ul{
      padding-left: 0.63rem;
      display: flex;
    }
    .title .allbox li{
      float: left;
      line-height: 0.6rem;
      padding-right: 0.2rem;
    }
    #fenlei .speak{
      height: 0.4rem;
      background-color: #fef2de;
      padding-left: 0.2rem;
    }
    .speak img{
      float: left;
      height: 100%;
    }
    .speak p{
      float: left;
      font-size: 0.27rem;
      line-height: 0.4rem;
      margin-left: 0.2rem;
    }
    .content ul{
      display: flex;
      flex-wrap: wrap;
      font-size: 0.27rem;
    }
    .content li{
      position: relative;
      box-sizing: border-box;
      width: 33.33333%;
      height: 3.84rem;
      padding: .1rem;
      border: 1px solid #fafafa;
      border-top: none;
      border-left: none;
    }
    .content li img{
      width: 100%;
    }
    .content li span{
      color: #FD7138;
      font-size: 0.3rem;
    }
    .content li .jia{
      text-align: center;
      line-height: 0.35rem;
      width: 0.35rem;
      height: 0.35rem;
      margin-left: 25%;
      display: inline-block;
      border: 1px solid #FD7138;
    }
</style>