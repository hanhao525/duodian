<template>
    <div id="mine">
       <div class="mantop">
          <img style="width:100%" src="../components/img/bgtop.jpg" alt="">
       </div>
       <div class="header">
         <div class="header-border">
           <p>我的订单</p>
           <span>全部订单</span>
         </div>
       </div>
       <div class="j-order">
          <img style="width:100%" src="../components/img/dai.jpg" alt="">
       </div>
       <div class="minezi">
         <p>我的资产</p>
       </div>
       <div class="fuwu">
         <ul>
           <li class="lie">
             <i>0.00</i>
             <p>余额</p>
           </li>
           <li class="lie">
             <span></span>
             <i>0.00</i>
             <p>卡包</p>
           </li>
           <li class="lie">
            <i>1</i>
             <p>优惠券</p>
             
           </li>
           <li class="lie">
             <i>110</i>
             <p>积分</p>
           </li>
           

         </ul>
         
       </div>
       <div class="minefuwu">

         <div class="minefuwu-top">
           
         </div>
         <p class="minefuwu-p">我的服务</p>
         <ul class="minefuwu-list">
           <li class="minefuwu-list-left">
             <i class="minefuwu-list-left-i"></i>
             <h4>会员中心</h4>
             <p>会员有好礼</p>
           </li>
           <li class="minefuwu-list-left">
              <i class="minefuwu-list-left-i1"></i>
             <h4>收货地址</h4>
           </li>
           <li class="minefuwu-list-left">
              <i class="minefuwu-list-left-i2"></i>
             <h4>帮助中心</h4>
           </li>
           <li class="minefuwu-list-left">
              <i class="minefuwu-list-left-i3"></i>
             <h4>客服电话</h4>
           </li>
           <li class="minefuwu-list-left">
              <i class="minefuwu-list-left-i4"></i>
             <h4>体检APP</h4>
           </li>
           <li class="minefuwu-list-left">
              <i class="minefuwu-list-left-i5"></i>
             <h4>发票中心</h4>
           </li>
           <li class="minefuwu-list-left">
              <i class="minefuwu-list-left-i6"></i>
             <h4>绑卡</h4>
           </li>
           <li class="minefuwu-list-left">
              <i class="minefuwu-list-left-i7"></i>
             <h4>自由购</h4>
             <p>仅限APP使用</p>
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
    .header{
      width: 100%;
      height:0.6rem;
      border-bottom:1px solid #f0f0f0;
      padding: 0.4rem 0.38rem;
    }
   .header-border{
     font-size:0.3rem; 
   }
    .header-border p{
      float: left;
    }
    .header-border span{
      float:right;
      color: #404040;
    }
   .j-order{
     clear: both;
     height:1.65rem;
   }
   .minezi{
      width: 100%;
      height:0.6rem;
     
      
   }
    .minezi p{
       height:0.6rem;
      font-size:0.25rem;
      line-height: 0.8rem;
      color: #404040;
      text-indent:0.38rem;
      border-bottom:1px solid #f0f0f0;
      
    }
    .fuwu{
       padding: 0.4rem 0;
       width: 100%;
       height: 1.65rem;
     
      
    }
    .lie{
      float: left;
      width: 25%;
      height: 0.84rem;
   
      line-height: 0.3rem;
      text-align: center;
    }
    .lie i{
      font-style: normal;
      font-weight: bold;
      font-size: 0.26rem;
      color: #36383f;
    }
    .lie p{
       font-size: 0.23rem;
      color: grey;
    }
    .minefuwu{
      width: 100%;
      height:3.8rem;
     
    }
    .minefuwu-top{
      height: 0.2rem;
      background:#f6f6f6;
    
     

    }
     .minefuwu-p{
       
       height:0.57rem;
       line-height: 0.57rem;
       font-size:0.26rem; 
      background: #fff; 
      text-indent:0.38rem;
      border-bottom:1px solid #f0f0f0;
      
     }
     .minefuwu-list{
       width: 100%;
       height: 3.23rem;
       /* background: pink; */
     }
     .minefuwu-list-left{
       width: 25%;
       height: 1.23rem;
       float: left;
     }
     .minefuwu-list-left-i{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i1.jpg) no-repeat;
     }
     .minefuwu-list-left-i1{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i2.jpg) no-repeat;
     }
     .minefuwu-list-left-i2{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i3.jpg) no-repeat;
     }
     .minefuwu-list-left-i3{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i8.jpg) no-repeat;
     }
      .minefuwu-list-left-i4{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i5.jpg) no-repeat;
     }
      .minefuwu-list-left-i5{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i6.jpg) no-repeat;
     }
      .minefuwu-list-left-i6{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i7.jpg) no-repeat;
     }
     .minefuwu-list-left-i7{
       display: inline-block;
       width:0.57rem;
       height: 0.57rem; 
       background: url(../components/img/i4.jpg) no-repeat ;
     }
     .minefuwu-list-left{
       font-size: 0.23rem;
        color: gray;
     }
     .minefuwu-list-left i{
          margin:0.3rem 0 0 0.5rem;
         
     }
     .minefuwu-list-left h4{
        text-align:center;
        font-weight: normal;
     }
     .minefuwu-list-left p{
         text-align: center;
     }

     
</style>