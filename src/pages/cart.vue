<template>
    <div id="cart">
      <div class="cart-view"></div>
      <h1 class="toobal">购物车</h1>
      <div class="cart-warpaper" style="height:583px">
        <div class="address">
          <p>李文玺 15688743895</p>
          <p class="sendto">送至 ：昌平(地铁站)按时</p>
        </div>
        <div class="goshopping">
          <img src="//img.dmallcdn.com/common/31fd8440-0a94-4aba-a239-6b77e13f9824" >
          <span class="goshopping-span" >购物车还木有商品？</span>
          <span class="orangebth">我要买买买</span>
        </div>
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
    .cart-view{
      padding-top: 44px;
      color: #21292b;
      font-size: 14px;
    }
    .toobal{
      height:44px; 
      position: fixed;
      top: 0;
      box-shadow: 0 0 10px rgba(0,0,0,.2);
      width: 100%;
      font-size: 16px;
      line-height: 44px;
      text-align: center;
      background-color:#fff;
      color: #333;
       font-weight: normal;

    
    }
    .cart-warpaper{
      padding-top: 10px;
      background:#f6f6f6;
    }
    .address{
      height: 68px;
      background:url(../components/img/bg.jpg)repeat-x #fff;
      font-size:16px;
      padding: 10px 25px 10px 10px ;
    }
    .sendto{
      overflow: hidden;
      color: grey;
    font-size: 13px;
    position: relative;
    word-wrap: break-word;
    word-break: break-all;
    margin-top: 5px;
    }
    .goshopping{
      height: 268px;
 
    }
    .goshopping img{
    width: 100px;
    margin-top: 20%;
    margin-left:30% ;
    }
   .goshopping-span{
     display: block;
     text-align: center;
     margin-bottom: 20px;
    color: #979797;
    font-size: 14px;
   }
   .orangebth{
     display:block;
     font-size: 14px;
     text-align: center;
      height: 44px;
      width: 100px;
      margin-left:35% ;
     line-height: 44px;
     padding: 0 22px;
    background: #ff712b;
    color: #fff;
    border-radius: 9px;
    border: none;
    font-size: 14px;
   }
    
</style>