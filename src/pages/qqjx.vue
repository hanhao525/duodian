<template>
    <div class="main clear">
        <div class="main-g" v-for="item in lits0" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <!-- 1 -->
        <div class="m-menu">
            <ul>
                <li v-for="item in lits1" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                        <p>{{ item.remark }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 2 -->
        <div class="m-menu">
            <ul>
                <li v-for="item in lits2" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                        <p>{{ item.remark }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 广告 -->
        <!-- <div class="main-gao">
            <img src="../components/img/h1.png" alt="">
        </div> -->
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
        <div class="jxhc" v-for="item in lits3" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="jxhc-main">
            <ul>
                <li v-for="item in lits4" :key="item.id">
                    <img :src="item.imageUrl" alt="">
                </li>
            </ul>
            <ul>
                <li v-for="item in lits5" :key="item.id">
                    <img :src="item.imageUrl" alt="">
                </li>
            </ul>
            <ul>
                <li v-for="item in lits6" :key="item.id">
                    <img :src="item.imageUrl" alt="">
                </li>
            </ul>
        </div>
        <!-- 超值单品 -->
        <div class="jxhc" v-for="item in lits7" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
                <li v-for="item in lits8" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 新鲜水果 -->
        <div class="main-gao" v-for="item in lits9" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in lits10" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in lits11" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in list0" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in list1" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in list2" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in list3" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in list4" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in list5" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in list6" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in list7" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="main-gao" v-for="item in list8" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in list9" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in list10" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in list11" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in list12" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in list13" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in list14" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in litt0" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in litt3" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in litt4" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in litt5" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in litt6" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="add">
                        <i></i>
                    </div>
                </li> 
            </ul>
        </div>
        <div class="main-gao" v-for="item in litt7" :key="item.id">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="czdp">
            <ul>
               <li v-for="item in litt8" :key="item.id">
                    <a href="#">
                        <img :src="item.imageUrl" alt="">
                    </a>
                    <div class="text">
                        <span class="t-name">{{ item.data.name }}</span>
                        <div class="price">
                            <span class="price-y">￥<em>{{ (item.data.price/100).toFixed(2) }}</em></span>
                            <span class="price-x">￥{{ (item.data.promotionPrice/100).toFixed(2) }}</span>
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
        lits0:[],//免邮
        lits1:[],//菜单上
        lits2:[],//菜单下
        lits3:[],//精选会场
        lits4:[],//免邮
        lits5:[],//免邮
        lits6:[],//免邮
        lits7:[],//超值单品
        lits8:[],
        lits9:[],
        lits10:[],
        lits11:[],
        list0:[],
        list1:[],
        list2:[],
        list3:[],
        list4:[],
        list5:[],
        list6:[],
        list7:[],
        list8:[],
        list9:[],
        list10:[],
        list11:[],
        list12:[],
        list13:[],
        list14:[],
        litt0:[],
        litt1:[],
        litt2:[],
        litt3:[],
        litt4:[],
        litt5:[],
        litt6:[],
        litt7:[],
        litt8:[],
    };
  },
  created(){
    this.request()
  },
  methods: {
      request(){
          this.$http.get("./static/data/qqjx.json").then(function(req){
            this.lits0 = req.body.data.pageModules[1].dataList;
            this.lits1 = req.body.data.pageModules[2].dataList;
            this.lits2 = req.body.data.pageModules[3].dataList;
            this.lits3 = req.body.data.pageModules[6].dataList;
            this.lits4 = req.body.data.pageModules[7].dataList;
            this.lits5 = req.body.data.pageModules[8].dataList;
            this.lits6 = req.body.data.pageModules[9].dataList;
            this.lits7 = req.body.data.pageModules[10].dataList;
            this.lits8 = req.body.data.pageModules[11].dataList;
            this.lits9 = req.body.data.pageModules[12].dataList;
            this.lits10 = req.body.data.pageModules[13].dataList;
            this.lits11 = req.body.data.pageModules[14].dataList;
        })
        this.$http.get("./static/data/qqjx1.json").then(function(req){
            this.list0 = req.body.data.pageModules[0].dataList;
            this.list1 = req.body.data.pageModules[1].dataList;
            this.list2 = req.body.data.pageModules[2].dataList;
            this.list3 = req.body.data.pageModules[3].dataList;
            this.list4 = req.body.data.pageModules[4].dataList;
            this.list5 = req.body.data.pageModules[5].dataList;
            this.list6 = req.body.data.pageModules[6].dataList;
            this.list7 = req.body.data.pageModules[7].dataList;
            this.list8 = req.body.data.pageModules[8].dataList;
            this.list9 = req.body.data.pageModules[9].dataList;
            this.list10 = req.body.data.pageModules[10].dataList;
            this.list11 = req.body.data.pageModules[11].dataList;
            this.list12 = req.body.data.pageModules[12].dataList;
            this.list13 = req.body.data.pageModules[13].dataList;
            this.list14 = req.body.data.pageModules[14].dataList;
        })
        this.$http.get("./static/data/qqjx2.json").then(function(req){
            this.litt0 = req.body.data.pageModules[0].dataList;
            this.litt1 = req.body.data.pageModules[1].dataList;
            this.litt2 = req.body.data.pageModules[2].dataList;
            this.litt3 = req.body.data.pageModules[3].dataList;
            this.litt4 = req.body.data.pageModules[4].dataList;
            this.litt5 = req.body.data.pageModules[5].dataList;
            this.litt6 = req.body.data.pageModules[6].dataList;
            this.litt7 = req.body.data.pageModules[7].dataList;
            this.litt8 = req.body.data.pageModules[8].dataList;
        })
      }
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
    .czdp .t-name{
        height: 36px;
        margin-bottom: 10px;
        color: #21292b;
        font-size: 14px;
        line-height: 18px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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