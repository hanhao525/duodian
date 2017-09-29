<template>
    <div id="home">
       <div class="head">
         <div class="h-top">
              <div class="fl">
                  <label>送至：</label><span>昌平区</span><i class="jian"><img src="../components/img/rig.jpg" alt=""></i>
              </div>
              <div class="fr">
                  <i class="sou"></i>
              </div>
         </div>
         <div class="h-xia">
            <ul>
              <li @click="qie" :class="flag==true?a:''">
                多点超市
                <img src="../components/img/p1.png" alt="">
              </li>
              <li @click="qie" :class="flag==false?a:''">
                全球精选
                <img src="../components/img/p2.png" alt="">
              </li>
            </ul>
         </div>
         
       </div>
       <div class="lun">
           <img src="../components/img/l1.png" alt="">
         </div>
       <!-- 主要内容 -->
       <ddcs v-show="flag"></ddcs>
       <qqjx v-show="!flag"></qqjx>
       <!-- <fhot></fhot> -->
       <!-- 留白 -->
       <div class="liu">
         已经到底了
       </div>
   </div>
</template>
    
<script>
import Ddcs from './ddcs'
import Qqjx from './qqjx'
import Fhot from './flist'
export default {
  name: "component_name",
  data () {
    return {
      flag:true,
      a:"active"
    };
  },
  components: {
      Ddcs,
      Qqjx,
      Fhot
  },
  methods: {
    qie(){
      this.flag = !this.flag;
    }
  }
}
</script>
    
<style lang="css" scoped>
    #home .head{
      height: 1.61rem;
      font-size: 0.27rem;
    }
    #home .h-top{
      height: 0.84rem;
      line-height: 0.84rem;
    }
    #home .fl {
      float: left;
      margin-left: 0.3rem;
    }
    .fl img{
      vertical-align: middle;
    }
    #home .fr{
      float: right;
      padding-top: 0.2rem;
    }
    #home .fr .sou{
      background: url("../components/img/sprt.png") no-repeat;
      background-size: 400px auto;
      width: 0.57rem;
      height: 0.5rem;
      display: inline-block;
      background-position: 0 -50px;
    }
    .h-xia ul{
      height: 0.76rem;
    }
    .h-xia li{
      float: left;
      position: relative;
      margin-left: 0.32rem;
      margin-right: 0.32rem;
      padding-top: 0.3rem;
    }
    .active{
      border-bottom: 2px solid #ff8143;
      color: #ff8143;
    }
    .h-xia img{
      position: absolute;
      width: 0.8rem;
      top: 0.1rem;
      left: 0.3rem;
    }
    .lun{
      width: 100%;
      height: 3rem;
    }
    .lun img{
      width: 100%;
      height: 100%;
    }
    .liu{
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      font-size: 0.3rem;
    }
</style>