<template>
    <div class="flist">
        <div class="head">
            <i>
                <img src="../components/img/all.png" alt="">
            </i>全部分类
            <span>取消</span>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item, index) in u1" :key="item.id">{{ item.catName }}</li>
            </ul>
            <ul>
                <li v-for="(item, index) in u2" :key="item.id">{{ item.catName }}</li>
            </ul>
            <ul>
                <li v-for="(item, index) in u3" :key="item.id">{{ item.catName }}</li>
            </ul>
        </div>
   </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
      u1:[],
      u2:[],
      u3:[],  
    };
  },
  created(){
    this.request()
  },
  methods: {
      request(){
          this.$http.get("./static/data/fenlei.json").then(function(req){
              this.u1 = req.data.data.categoryInfo.categorys;
              this.u2 = this.u1[0].childCmCategories;
              this.u3 = this.u1[0].childCmCategories[0].childCmCategories;
          })
      }
  }
}
</script>
    
<style lang="css" scoped>
    .flist{
        /* position: fixed;
        left: 0;
        top: 0; */
    }
    .head{
        border-bottom: solid 1px #f0f0f0;
        padding-left: 0.85rem;
        height: 0.85rem;
        font-size: 0.27rem;
        line-height: 0.85rem;
        position: relative;
        color: #404040;
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
    .list ul:nth-child(2){
        background-color: #f6f6f6;
    }
    .list ul:nth-child(3){
        background-color: #f0f0f0;
    }
</style>