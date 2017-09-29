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
                <span @click="flag=true">
                  <img src="../components/img/all.png" alt="">
                </span>
                <ul>
                  <li @click="flag=true">
                    全部分类
                  </li>
                  <li v-for="(item, index) in u3" 
                      :key="item.id" 
                      @click="fenqie(index)"
                      :class="flag2?active:''">
                    {{ item.catName }}
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
            <li v-for="item in data1" :key="item.id">
              <img :src="item.img" alt="">
              <p>{{ item.title }}</p>
              <span class="price">￥{{ (item.price/100).toFixed(2) }}</span>
              <span class="jia" @click="add(item)">+</span>
            </li>
          </ul>
        </div>
        <!-- 3级菜单 -->
        <div class="flist" v-show="flag">
          <div class="head">
              <i>
                  <img src="../components/img/all.png" alt="">
              </i>全部分类
              <span @click="flag=false">取消</span>
          </div>
          <div class="list">
              <ul>
                  <li v-for="(item, index) in u1" 
                      :key="item.id" 
                      @click = "one(index)"
                      :class="flag2?active:''">{{ item.catName }}</li>
              </ul>
              <ul>
                  <li v-for="(item, index) in u2" :key="item.id" @click = "two(index)">{{ item.catName }}</li>
              </ul>
              <ul>
                  <li v-for="(item, index) in u3" :key="item.id" @click="three(index)">{{ item.catName }}</li>
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
      data1:[],//初始数据
      datalist:[],//分类数据
      u1:[],
      u2:[],
      u3:[],
      flag:false,//菜单显示
      flag2:false,
      active: "active",//样式
    };
  },
  created(){
    this.request();
    this.getDate();
  },
  methods: {
      //获取目录数据
      request(){
        this.$http.get("./static/data/fenlei.json").then(function(req){
            this.u1 = req.data.data.categoryInfo.categorys;
            this.u2 = this.u1[0].childCmCategories;
            this.u3 = this.u1[1].childCmCategories[0].childCmCategories;
        })
      },
      //获取数据
      getDate(){
        this.$http.jsonp('https://gatewx.dmall.com/search/result?param=%7B%22keyword%22%3A%22国产水果%22%2C%22pairs%22%3A%221-10437%22%2C%22pageNum%22%3A%221%22%2C%22index%22%3A1%2C%22pageSize%22%3A20%7D&token=180DD99790479F6661A7631E63E851E6CCC1220E816FFA5BF9AAE4FEB0983621C91C4E4CDC646F0E4842C6B3BA2EC14BDD5E506DE86092704FFAAA8C5AEEA91DF37A33160A0D9ED37FB12AE98FDA9C3C755C9B6E9D2FD0DBAD0C148B0352D9E55EAD28AC247E0CC4E8B4716430A27F1AB433E93B693163937CB69F046970D15F&source=2&tempid=C7983DF1925000028B468A009BB0185A&pubParam=%7B%7D&_=1499776612193').then(function(req){
            this.data1 = req.data.data.list;               
        })
      },
      //第一列目录
      one(index){
         this.u2 = this.u1[index].childCmCategories;
      },
      //第二列目录
      two(index){
          this.u3 = this.u2[index].childCmCategories;
      },
      //第三列目录
      three(index){
          this.flag = false;
          var shuju = this.u3[index].catName;
          this.$http.jsonp('https://gatewx.dmall.com/search/result?param=%7B%22keyword%22%3A%22'+shuju+'%22%2C%22pairs%22%3A%221-10437%22%2C%22pageNum%22%3A%221%22%2C%22index%22%3A1%2C%22pageSize%22%3A20%7D&token=180DD99790479F6661A7631E63E851E6CCC1220E816FFA5BF9AAE4FEB0983621C91C4E4CDC646F0E4842C6B3BA2EC14BDD5E506DE86092704FFAAA8C5AEEA91DF37A33160A0D9ED37FB12AE98FDA9C3C755C9B6E9D2FD0DBAD0C148B0352D9E55EAD28AC247E0CC4E8B4716430A27F1AB433E93B693163937CB69F046970D15F&source=2&tempid=C7983DF1925000028B468A009BB0185A&pubParam=%7B%7D&_=1499776612193').then(function(res){
                this.data1 = res.data.data.list;
            })
      },
      //商品增加
      add(item){

      },
      //目录切换
      fenqie(index){ 
        // this.flag2 = true;      
        var shuju = this.u3[index].catName;
        this.$http.jsonp('https://gatewx.dmall.com/search/result?param=%7B%22keyword%22%3A%22'+shuju+'%22%2C%22pairs%22%3A%221-10437%22%2C%22pageNum%22%3A%221%22%2C%22index%22%3A1%2C%22pageSize%22%3A20%7D&token=180DD99790479F6661A7631E63E851E6CCC1220E816FFA5BF9AAE4FEB0983621C91C4E4CDC646F0E4842C6B3BA2EC14BDD5E506DE86092704FFAAA8C5AEEA91DF37A33160A0D9ED37FB12AE98FDA9C3C755C9B6E9D2FD0DBAD0C148B0352D9E55EAD28AC247E0CC4E8B4716430A27F1AB433E93B693163937CB69F046970D15F&source=2&tempid=C7983DF1925000028B468A009BB0185A&pubParam=%7B%7D&_=1499776612193').then(function(res){
                this.data1 = res.data.data.list;
            })
      }
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
    .active{
      border-bottom: 2px solid #FD7138;
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
    .content .price{
      font-size: 0.27rem;
    }
    .title .allbox{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.6rem;
      font-size: 0.3rem;
      color: white;
      width: 100%;
    }
    .title .allbox ul{
      margin-left: 0.63rem;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      height: 0.6rem;
    }
    .title .allbox li{
      float: left;
      line-height: 0.6rem;
      padding-right: 0.2rem;
      white-space: nowrap;
      width: 100%;
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
    .flist{
        position: fixed;
        left: 0;
        top: 1rem;
        width: 100%;
        z-index: 100;
    }
    .head{
        border-bottom: solid 1px #f0f0f0;
        padding-left: 0.85rem;
        height: 0.85rem;
        font-size: 0.27rem;
        line-height: 0.85rem;
        position: relative;
        color: #404040;
        background: #fff;
    }
    .head i{
        position: absolute;
        left: 0.13rem;
        top: 0.13rem;
        width: 0.57rem;
        height: 0.57rem;
        display: inline-block;
    }
    .head i img{
        width: 100%;
    }
    .head span{
        position: absolute;
        right: 0;
        padding: 0 0.19rem;
        color: #ff712b;
    }
    .list{
        font-size: 0.3rem;
        height: 11rem;;
    }
    .list ul{
        width: 33.3%;
        height: 100%;
        float: left;
    }
    .list li{
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height: 0.85rem;
        line-height: 0.85rem;
        text-indent: 0.3rem;
        color: grey;
        cursor: pointer;
    }
    .list ul:first-child{
      background: #fff;
    }
    .list ul:nth-child(2){
        background-color: #f6f6f6;
    }
    .list ul:nth-child(3){
        background-color: #f0f0f0;
    }
</style>