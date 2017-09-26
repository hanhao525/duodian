<template>
    <div id="di">
       <ul>
           <li>
                <router-link to="/home">
                    <i class="nav1"></i>
                    <p>首页</p>
                </router-link>      
           </li>
           <li>
               <router-link to="/fenlei">
                    <i class="nav2"></i>
                    <p>分类</p>
               </router-link>
           </li>
           <li>
               <router-link to="/vip">
                    <i class="nav3"></i>
                    <p>会员</p>
               </router-link>
           </li>
           <li>
               <router-link to="/cart">
                    <i class="nav4"></i>
                    <p>购物车</p>
               </router-link>
           </li>
           <li>
               <router-link to="/mine">
                    <i class="nav5"></i>
                    <p>我的</p>
               </router-link>
           </li>
       </ul>
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
    #di {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.96rem;
        font-size: 0.27rem;
        widows: 100%;
        background: #fff;
        text-align: center;
        z-index: 999;
    }
    #di ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    #di li{
        /* width: 33.3%; */
        text-align: center;
    }
    #di p{
        color: gray;
    }
    #di i{
        display:block; 
        position: relative;
        width: 0.57rem;
        height: 0.57rem;
        background: url("../components/img/nav.png")no-repeat;
        background-position: 0 -50px;
        background-size: 250px auto;
        font-size: 0.5rem;
    }
    #di .nav1{
        background-position: 0 -50px;
    }
    #di .nav2{
        background-position: -50px 0;
    }
    #di .nav3{
        background-position: -100px 0;
    }
    #di .nav4{
        background-position: -150px 0;
    }
    #di .nav5{
        background-position: -200px 0;
    }
</style>