<template>
    <div class="main clear">       
         <div class="caidan">
           <ul>
             <li v-for = "item in list1" :key="item.id">
               <img :src="item.imageUrl" alt="">
               <p>{{ item.remark }}</p>
             </li>            
           </ul>
           <ul>
             <li v-for = "item in list2" :key="item.id">
               <img :src="item.imageUrl" alt="">
               <p>{{ item.remark }}</p>
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
             <li v-for="item in list3" :key="item.id">
               <img :src="item.imageUrl" alt="">
             </li>            
           </ul>
         </div>
         <div class="mould">
           <ul>
             <li v-for="item in list4" :key="item.id">
               <img :src="item.imageUrl" alt="">
             </li>
           </ul>
         </div>
         <div class="mould">
           <ul>
             <li v-for="item in list5" :key="item.id">
               <img :src="item.imageUrl" alt="">
             </li>
           </ul>
         </div>
         <!-- 主题乐园 -->
         <div class="zhuti">
           <div class="zt-f">
             <img src="../components/img/zhu.png" alt="">
           </div>
           <div class="zt-b">
             <a href="#" class="zt-bl">
               <img src="../components/img/zhu1.png" alt="">
             </a>
             <span class="zt-br">
               <a href="#">
                 <img src="../components/img/zhu2.png" alt="">
               </a>
               <a href="#">
                 <img src="../components/img/zhu2.png" alt="">
               </a>
             </span>
           </div>
           <div class="zt-g clear">
             <img src="../components/img/zhu3.png" alt="">
           </div>
         </div>
         <!-- 生活相伴 -->
         <div class="shxb">
           <div class="shxb-t">
             <img src="../components/img/zhu.png" alt="">
           </div>
           <div class="shxb-m">
             <ul>
               <li>
                 <a href="#">
                  <img src="../components/img/zhu4.png" alt="">
                 </a>
                 <a href="#">
                  <img src="../components/img/zhu4.png" alt="">
                 </a>
               </li>
               <li>
                 <a href="#">
                  <img src="../components/img/zhu5.png" alt="">
                 </a>
                 <a href="#">
                  <img src="../components/img/zhu5.png" alt="">
                 </a>
                 <a href="#">
                  <img src="../components/img/zhu5.png" alt="">
                 </a>
                 <a href="#">
                  <img src="../components/img/zhu5.png" alt="">
                 </a>
               </li>
             </ul>
           </div>
           <div class="zt-g clear">
             <img src="../components/img/zhu3.png" alt="">
           </div>
         </div>
         <!-- 机制生鲜 -->
         <div class="jzsx">
           <div class="jzsx-t" v-for="item in listx0" :key="item.id">
             <img :src="item.imageUrl" alt="">
           </div>
           <div class="jzsx-m">
             <ul>
               <li v-for="item in listx1" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listx2" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listx3" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listx4" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listx5" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
        <!-- 舌尖美味 -->
        <div class="jzsx">
           <div class="jzsx-t" v-for="item in lists0" :key="item.id">
             <img :src="item.imageUrl" alt="">
           </div>
           <div class="jzsx-m">
             <ul>
               <li v-for="item in lists1" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in lists2" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in lists3" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in lists4" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in lists5" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in lists6" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in lists7" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in lists8" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
           <div class="jzsx-t" v-for="item in listj0" :key="item.id">
             <img :src="item.imageUrl" alt="">
           </div>
           <!-- 食品饮料 -->
           <div class="jzsx-t" v-for="item in listj1" :key="item.id">
             <img :src="item.imageUrl" alt="">
           </div>
           <div class="jzsx-m">
             <ul>
               <li v-for="item in listj2" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listj3" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listj4" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
           <!-- 食品饮料 -->
           <div class="jzsx-t" v-for="item in listj5" :key="item.id">
             <img :src="item.imageUrl" alt="">
           </div>
           <div class="jzsx-m">
             <ul>
               <li v-for="item in listj6" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listj7" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listj8" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
             <ul>
               <li v-for="item in listj9" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
           <div class="jzsx-t" v-for="item in listj10" :key="item.id">
             <img :src="item.imageUrl" alt="">
           </div>
           <div class="jzsx-t" v-for="item in listj11" :key="item.id">
             <img :src="item.imageUrl" alt="">
           </div>
           <div class="jzsx-m">
             <ul>
               <li v-for="item in listj12" :key="item.id">
                 <a href="#">
                   <img :src="item.imageUrl" alt="">
                 </a>
                 <div class="jzsx-name">
                   <span>{{ item.data.name }}</span>
                   <div class="jzsx-price">
                     <div>￥<em>{{ (item.data.price/100).toFixed(2) }}</em></div>
                     <b>￥{{ (item.data.promotionPrice/100).toFixed(2) }}</b>
                   </div>
                   <div class="add">
                     <i></i>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
       </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        list1:[],//菜单1
        list2:[],//菜单2
        list3:[],//菜单上
        list4:[],//菜单中
        list5:[],//菜单下
        list6:[],//主题乐园
        list7:[],//主题乐园
        listx0:[],//极致生鲜
        listx1:[],//极致生鲜
        listx2:[],//极致生鲜
        listx3:[],//极致生鲜
        listx4:[],//极致生鲜
        listx5:[],//极致生鲜
        lists0:[],//舌尖美味
        lists1:[],//舌尖美味
        lists2:[],//舌尖美味
        lists3:[],//舌尖美味
        lists4:[],//舌尖美味
        lists5:[],//舌尖美味
        lists6:[],//舌尖美味
        lists7:[],//舌尖美味
        lists8:[],//舌尖美味
        listj0:[],//居家生活
        listj1:[],//居家生活
        listj2:[],//居家生活
        listj3:[],//居家生活
        listj4:[],//居家生活
        listj5:[],//居家生活
        listj6:[],//居家生活
        listj7:[],//居家生活
        listj8:[],//居家生活
        listj9:[],//居家生活
        listj10:[],//居家生活
        listj11:[],//居家生活
        listj12:[],//居家生活
        listj13:[],//居家生活
    };
  },
  created(){
    this.request()
  },
  methods:{
    request(){
      this.$http.get("./static/data/home.json").then(function(req){
        this.list1 = req.body.data.pageModules[2].dataList;
        this.list2 = req.body.data.pageModules[3].dataList;
        this.list3 = req.body.data.pageModules[6].dataList;
        this.list4 = req.body.data.pageModules[7].dataList;
        this.list5 = req.body.data.pageModules[8].dataList;
      })
      this.$http.get("./static/data/home1.json").then(function(req){       
        this.listx0 = req.body.data.pageModules[0].dataList;
        this.listx1 = req.body.data.pageModules[1].dataList;
        this.listx2 = req.body.data.pageModules[2].dataList;
        this.listx3 = req.body.data.pageModules[3].dataList;
        this.listx4 = req.body.data.pageModules[4].dataList;
        this.listx5 = req.body.data.pageModules[5].dataList;
        this.lists0 = req.body.data.pageModules[6].dataList;
        this.lists1 = req.body.data.pageModules[7].dataList;
        this.lists2 = req.body.data.pageModules[8].dataList;
        this.lists3 = req.body.data.pageModules[9].dataList;
        this.lists4 = req.body.data.pageModules[10].dataList;
        this.lists5 = req.body.data.pageModules[11].dataList;
        this.lists6 = req.body.data.pageModules[12].dataList;
        this.lists7 = req.body.data.pageModules[13].dataList;
        this.lists8 = req.body.data.pageModules[14].dataList;
      })
      this.$http.get("./static/data/home2.json").then(function(req){
        this.listj0 = req.body.data.pageModules[0].dataList;
        this.listj1 = req.body.data.pageModules[1].dataList;
        this.listj2 = req.body.data.pageModules[2].dataList;
        this.listj3 = req.body.data.pageModules[3].dataList;
        this.listj4 = req.body.data.pageModules[4].dataList;
        this.listj5 = req.body.data.pageModules[5].dataList;
        this.listj6 = req.body.data.pageModules[6].dataList;
        this.listj7 = req.body.data.pageModules[7].dataList;
        this.listj8 = req.body.data.pageModules[8].dataList;
        this.listj9 = req.body.data.pageModules[9].dataList;
        this.listj10 = req.body.data.pageModules[10].dataList;
        this.listj11 = req.body.data.pageModules[11].dataList;
        this.listj12 = req.body.data.pageModules[12].dataList;
        this.listj13 = req.body.data.pageModules[13].dataList;
      })
    }
  }

}
</script>
    
<style lang="css" scoped>
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
    .zt-f{
      height: 0.6rem;
      line-height: 0.6rem;
    }
    .zt-f img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
    .zt-b{
      height: auto;
      display: flex;
    }
    .zt-bl{
      width: 50%;
      float: left;
    }
    .zt-bl img{
      width: 100%;
    }
    .zt-br{
      width: 50%;
      float: left;
      display: flex;
      flex-direction: column;
    }
    .zt-br a{
      height: auto;
      display: flex;
    }
    .zt-br a img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
    .zt-g{
      height: 1.5rem;
    }
    .zt-g img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }

    .shxb-t{
      height: 0.6rem;
      line-height: 0.6rem;
    }
    .shxb-t img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
    .shxb-m{
      width: 100%;
      display: flex;
    }
    .shxb-m li{
      display: flex;
    }
    .shxb-m img{
      float: left;
      width: 100%;
      height: 100%;
    }
    .jzsx{
      font-size: 0.26rem;
      color: #21292b;
    }
    .jzsx-t{
      width: 100%;
    }
    .jzsx-t img{
      width: 100%;
      height: 100%;
    }
    .jzsx-m ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;
    }
    .jzsx-m li{
      width: 33.3%;
      background: #fff;
      border: 1px solid #f6f6f6;
    }
    .jzsx-m li a{
      display: flex;
      height: auto;
    }
    .jzsx-m li a img{
      width: 100%;
      height: 100%;
    }
    .jzsx-m .jzsx-name{
      padding-left: 0.2rem;
    }
    .jzsx-m .jzsx-name b{
      color: #ff712b;
    }
    .jzsx-m .jzsx-price em{
      text-decoration: line-through;
    }
    .jzsx-m .add i{
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