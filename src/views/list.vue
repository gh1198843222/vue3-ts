<template>
  <div class="list-view" @scroll="handleScroll($event)">
    <div class="list-view-phantom" :style="{ height: array.length * 30 + 'px' }"></div>
    <div ref='content' class="list-view-content">
      <!-- <div :key='index' class="list-view-item" v-for="(item,index) in visibleData">{{ index }}</div> -->
      <ListItem @updateContentHeight='updateContentHeight' :item="item" :key='index' class="list-view-item" v-for="(item,index) in visibleData">{{ index }}</ListItem>
    
    </div>
  </div>
</template>
<script>
import ListItem from '../components/vitural-list/list-item.vue'
  export default {
    components:{
      ListItem
    },
    props: {
      // data: {
      //   type: Array
      // },
      itemHeight: {
        type: Number,
        default: 30
      }
    },
    created(){
       for(let index=0;index<10000;index++){
        this.array.push({
          name:`第${index}个`,
          list:new Array(index).fill(index)
        })
      }
    },
    mounted() {
      this.visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight);
      this.start = 0;
      this.end = this.start + this.visibleCount;
      this.visibleData = this.array.slice(this.start, this.end);
      console.log('mounted',this.$el.scrollTop)
    },
    data() {
      return {
        start: 0,
        end: null,
        visibleCount: null,
        visibleData: [],
        scrollTop: 0,
        array:[],
        cachePosition:[],

      };
    },
    methods: {
      handleScroll() {
        const scrollTop = this.$el.scrollTop;
        console.log('scrollTop',this.$el.scrollTop)
        const fixedScrollTop = scrollTop - scrollTop % 30;
        console.log('fixedScrollTop',fixedScrollTop)
        this.$refs.content.style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`;
        // this.$refs.content.style.top = `${fixedScrollTop}px`;
        this.start = Math.floor(scrollTop / 30);
        this.end = this.start + this.visibleCount;
        this.visibleData = this.array.slice(this.start, this.end);
        // this.array = [...this.array.map((val,index)=>{index})]
      },
    }
  }
</script>
<style>
  .list-view {
    /* height: 120px; */
    overflow: auto;
    position: relative;
    border: 1px solid #666;
  }

  .list-view-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .list-view-content {
    left: 0;
    right: 0;
    top: 0;
    /* bottom: 0; */
    position: absolute;
    background: pink;
  }
  .list-view-item {
    padding: 5px;
    color: #666;
    /* height: 30px; */
    /* line-height: 30px; */
    box-sizing: border-box;
  }
</style>