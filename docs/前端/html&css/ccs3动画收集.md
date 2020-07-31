# ccs3动画收集

## 缩放动画
```css
.page p {
  transform: scale(0);
  font-size: 88px;
  transition: transform 1s ease-out;
}

.page p.fade-in {
  transform: scale(1);
}
```