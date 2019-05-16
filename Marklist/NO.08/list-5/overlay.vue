# overlay    

```vue
<template>
  <transition name="van-fade">
    <div
      v-show="visible"
      class="overlay"
      :class="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    />
  </transition>
</template>

<script>
export default {
  name: 'overlay',
  props: {
    zIndex: Number,
    visible: Boolean,
    className: String,
    customStyle: Object
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      };
    }
  }
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
}
</style>
```

利用创建Overlay模版实例化并且挂载到DOM
```javascript
open() {
  if (this.overlay) {
     this.renderOverlay();
  }
}

renderOverlay() {
  var el = this.$el;

  const target = el && el.parentNode ? el.parentNode : document.body;
  if (!this.modal) {
    this.modal = new (Vue.extend(Overlay))({
      el: document.createElement("div")
    });

    this.modal.$on("click", this.onClick);
    target.appendChild(this.modal.$el);
  }
  Object.assign(this.modal, {
    visible: true  //显示蒙层
  });
},

onClick() {
  this.$emit('input', false);
}
```
禁止overlay滑动
```javascript
export default {
  methods: {
    preHandler(e) {
      e.preventDefault();
    }
  },
  watch: {
    value(newValue) {
      //阻止默认事件
      //passived主要用于优化浏览器页面滚动的性能
      const action = newValue ? "add" : "remove";
      document.body.classList[action]("v-overflow-hidden");
    
      if (newValue) {
        document.addEventListener("touchmove", this.preHandler, {
          passive: false
        });
      } else {
        document.removeEventListener("touchmove", this.preHandler, false);
      }
    }
  }
};
```