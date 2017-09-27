<template>
    <div class="main clear">
        <div class="main-g">
            <img src="../components/img/q1.png" alt="">
        </div>
        <!-- 1 -->
        <div class="m-menu">
            <ul>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 2 -->
        <div class="m-menu">
            <ul>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/q3.png" alt="">
                        <p>新鲜果蔬</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 广告 -->
        <div class="main-gao">
            <img src="../components/img/h1.png" alt="">
        </div>
        <!-- 5图片 -->
        <div class="main-f">
            <ul>
                <li>
                    <img src="../components/img/q9.png" alt="">
                </li>
                <li>
                    <a href="#">
                        <img src="../components/img/zhu2.png" alt="">
                    </a>
                    <span>
                        <a href="#">
                            <img src="../components/img/q5.png" alt="">
                        </a>
                        <a href="#">
                            <img src="../components/img/q5.png" alt="">
                        </a>
                    </span>
                </li>
            </ul>
        </div>
        <!-- 精选会场 -->
        <div class="jxhc">
            <img src="../components/img/zhu.png" alt="">
        </div>
        <div class="jxhc-main">
            <ul>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
            </ul>
            <ul>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
            </ul>
            <ul>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
                <li>
                    <img src="../components/img/q6.png" alt="">
                </li>
            </ul>
        </div>
        <!-- 超值单品 -->
        <div class="jxhc">
            <img src="../components/img/zhu.png" alt="">
        </div>
        <div class="czdp">
            <ul>
                <li>
                    <a href="#">
                        <img src="../components/img/q8.jpg" alt="">
                    </a>
                    <div class="text">
                        <span>箱装椰果</span>
                        <div class="price">
                            <span class="price-y">￥<em>103.40</em></span>
                            <span class="price-x">￥89.00</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 新鲜水果 -->
        <div class="main-gao">
            <img src="../components/img/q4.png" alt="">
            <img src="../components/img/q4.png" alt="">
        </div>
        <div class="czdp">
            <ul>
                <li>
                    <a href="#">
                        <img src="../components/img/q8.jpg" alt="">
                    </a>
                    <div class="text">
                        <span>箱装椰果</span>
                        <div class="price">
                            <span class="price-y">￥<em>103.40</em></span>
                            <span class="price-x">￥89.00</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
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
    .main{
      background: #F6F6F6;
      font-size: 0.27rem;
    }
    .main-g{
        width: 100%;
        height: 0.67rem;
        margin-bottom: 0.2rem;
    }
    .main-g img{
        width: 100%;
        vertical-align: top;
    }
    .m-menu{
        background: #fff;
    }
    .m-menu ul{
        display: flex;
        height: auto;  
    }
    .m-menu li{
        width: 20%;
        text-align: center;
    }
    .m-menu li img{
        width: 100%;
    }
    .m-menu li p{
        color: #888;
    }
    .main-gao{
        width: 100%;
        height: auto;
    }
    .main-gao img{
        width: 100%;
    }
    .main-f ul{
        display: flex;
        height: auto;
        background: #fff;
    }
    .main-f li{
        width: 50%;
        float: left;
    }
    .main-f li img{
        width: 100%;
    }
    .main-f li span{
        display: flex;
    }
    .main-f li a{
        width: 100%;
        display: inline-block;
        position: relative;
    }
    .main-f li span a{
        width: 50%;
    }
    .jxhc{
        width: 100%;
        height: auto;
    }
    .jxhc img{
        width: 100%;
    }
    .jxhc-main ul{
        display: flex;
        position: relative;
    }
    .jxhc-main li{
        width: 33.3%;
        float: left;
    }
    .jxhc-main li img{
        width: 100%;
    }
    .czdp ul{
        position: relative;
        overflow: hidden;
        width: 100%;
        background-color: #fff;
        border: 1px solid #f0f0f0;
    }
    .czdp li{
        position: relative;
        float: left;
        width: 33.33%;
        min-height: 3.2rem;
        padding: 0.19rem;
        border-right: 1px solid #f0f0f0;
    }
    .czdp img{
        width: 100%;
    }
    .czdp .price-y em{
        text-decoration: line-through;
        font-style: normal;
    }
    .czdp .price-x{
        color: #ff712b;
        font-size: 0.3rem;
    }
    .czdp .add{
        position: absolute;
    }
    .czdp i{
        background: url("../components/img/add.png") no-repeat center center;
        width: 0.57rem;
        height: 0.57rem;
        display: inline-block;
        position: relative;
        left: 1.3rem;
        bottom: 0.5rem;
        background-size: 100%;
    }

</style>