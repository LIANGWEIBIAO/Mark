# VUE单选input

`v-model` 和 `value`值相同时该input为选中状态， `v-model`即为选中的值。

```html
   <input type="radio" v-model="苹果" :value="苹果" class="v-radio__input">
   <input type="radio" v-model="苹果" :value="香蕉" class="v-radio__input">
   <input type="radio" v-model="苹果" :value="凤梨" class="v-radio__input">
```

```css
.v-radio {
  position: relative;
  .v-radio__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .v-radio__input:checked + .iconfont {
    color: blue;
  }
}
```

循环input,默认选中`香蕉`
```
<label class="bui" v-for="(item,index) in checkboxList" :key="index">
    <input type="checkbox" v-model="checkList" :value="item.id">
    <span>{{item.product_inf}}</span>
</label>
```
```javascript
export default {
  data() {
    return {
      checkboxList: [
        {
          id: "1",
          product_inf: "香蕉"
        },
        {
          id: "2",
          product_inf: "苹果"
        },
        {
          id: "3",
          product_inf: "火龙果"
        }
      ],
      checkList: [{
          id: "1",
          product_inf: "香蕉"
        }]
    };
  },
```