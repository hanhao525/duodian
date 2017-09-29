<template>
    <div id="di">
       <ul>
           <li>
                <router-link to="/home">
                    <i class="icon iconfont icon-shouye"></i>
                    <p>首页</p>
                </router-link>      
           </li>
           <li>
               <router-link to="/fenlei">
                    <i class="icon iconfont icon-fenlei1"></i>
                    <p>分类</p>
               </router-link>
           </li>
           <li>
               <router-link to="/vip">
                    <i class="icon iconfont icon-huiyuan"></i>
                    <p>会员</p>
               </router-link>
           </li>
           <li>
               <router-link to="/cart">
                    <i class="icon iconfont icon-gouwuche-copy"></i>
                    <p>购物车</p>
               </router-link>
           </li>
           <li>
               <router-link to="/mine">
                    <i class="icon iconfont icon-wode"></i>
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
        z-index: 99;
    }
    #di ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    #di li a{
        /* width: 33.3%; */
        text-align: center;
        color: gray;
    }
    #di  li .router-link-active{
        color:#fd7c48
    }
    #di i{
        font-size: 0.5rem;
    }
</style>