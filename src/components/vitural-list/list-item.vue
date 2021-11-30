<template>
  <div ref='listItem' class="list-item">
    <h3>item{{item.name}}</h3>
    <div v-for="(list,index) in item.list" :key='index'>{{item.name}}--{{list}}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ResizeObserver from 'resize-observer-polyfill';

export default defineComponent({
  props:{
    item:{
      type:Object,
      default:()=>{
      }
    }
  },
  setup(props,context) {
    console.log("props,context",props,context)
    
    
    return {
      
    }
  },
  mounted(){
    const resizeObserver = new ResizeObserver(()=>{
      const rect = this.$el.getBoundingClientRect()
      console.log('rect',rect)
      this.$emit('updateContentHeight',rect)

    })
    const self = this as any
    resizeObserver.observe(self.$refs.listItem)
  }
})
</script>
