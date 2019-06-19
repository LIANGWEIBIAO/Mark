<template>
  <div class="feedback-page">
    <textarea
      v-model="desc"
      maxlength="200"
      @input="descInput"
      placeholder="请输入反馈内容，我们将更好的为您服务"
      class="textarea-ele"
      rows="5"
    ></textarea>
    <!-- <input type="text" v-model="desc" @input="descInput" maxlength="200" class="textarea-ele" placeholder="请输入反馈内容，我们将更好的为您服务"> -->
    <div class="text-number">{{txtVal}}/200</div>

    <div class="upload-img__wrapper">
      <div @click="remove(index)" class="item-img" v-for="(item,index) in files" :key="index">
        <i class="item-img__close"></i>
        <img :src="item.src" alt>
      </div>
      <div class="upload-input">
        <input
          type="file"
          multiple
          ref="file"
          @change="changeImage($event)"
          accept="image/png, image/jpeg, image/gif, image/jpg"
        >
      </div>
    </div>
    <button-cmp loadingText="上传中..." :loading="loadingBtn" @click="uploadImg" class="radius-btn">提交</button-cmp>
  </div>
</template>

<script>
import buttonCmp from "@base/button";
export default {
  data() {
    return {
      txtVal: 0,
      desc: "",
      loadingBtn: false,
      files: [], // 文件缓存
      index: 0, // 序列号
      maxLength: 9, // 图片最大数量
      maxSize: 10240000 //图片限制为10M内
    };
  },
  mounted() {},
  methods: {
    uploadImg() {
      let { desc, files } = this;
      if (!desc.length) {
        this.$toast("请输入内容");
        return;
      }

      this.$toast.loading({
        mask: true,
        duration: 0,
        message: "加载中..."
      });
      this.$post("/api/member/feedback", { remark: desc, image: files }).then(
        res => {
          this.$toast.clear();
          if (res.status == 1) {
            this.$dialog
              .alert({
                message: "提交成功"
              })
              .then(() => {
                this.$router.push({ name: "user" });
              });
          }
        }
      );
    },
    changeImage(e) {
      let fileList = this.$refs.file.files;
      let len = this.files.length + fileList.length;

      if (len > 5) {
        //如果大于9张,做出提醒
        alert("上传的图片不能超过5张!");
        return;
      }
      let tempList = []; //每次点击+号后选择的图片信息
      for (let i = 0, len = fileList.length; i < len; i++) {
        let fileItem = {
          Id: this.index++,
          name: fileList[i].name,
          size: fileList[i].size,
          file: fileList[i]
        };
        //将图片文件转成Base64
        let reader = new FileReader();
        reader.onloadend = e => {
          //压缩图片并存到fileItem中
          this.getBase64(e.target.result).then(url => {
            this.$set(fileItem, "src", url);
          });
        };
        //判断图片大小是否超出限制
        if (fileItem.size > this.maxSize) {
          //   Toast(this.lang.dynamic_over_size);
          alert("上传的图片大小不能超过10M!");
        } else {
          reader.readAsDataURL(fileList[i]);
          tempList.push(fileItem);
          this.files.push(fileItem);
        }
      }
      //   setTimeout(() => {
      //     this.$emit("getFiles", tempList);
      //   }, 300);
      this.files.splice(9);
    },
    // 图片压缩并保存到files
    getBase64(url) {
      let self = this;
      let Img = new Image(),
        dataURL = "";
      Img.src = url;
      let p = new Promise(function(resolve, reject) {
        Img.onload = function() {
          //要先确保图片完整获取到，这是个异步事件
          let canvas = document.createElement("canvas"), //创建canvas元素
            width = Img.width, //确保canvas的尺寸和图片一样
            height = Img.height;
          // 默认将长宽设置为图片的原始长宽，这样在长宽不超过最大长度时就不需要再处理
          let ratio = width / height,
            maxLength = 1000,
            newHeight = height,
            newWidth = width;
          // 在长宽超过最大长度时，按图片长宽比例等比缩小
          if (width > maxLength || height > maxLength) {
            if (width > height) {
              newWidth = maxLength;
              newHeight = maxLength / ratio;
            } else {
              newWidth = maxLength * ratio;
              newHeight = maxLength;
            }
          }
          canvas.width = newWidth;
          canvas.height = newHeight;
          canvas.getContext("2d").drawImage(Img, 0, 0, newWidth, newHeight); //将图片绘制到canvas中
          dataURL = canvas.toDataURL("image/jpeg", 0.5); //转换图片为dataURL
          resolve(dataURL);
        };
      });
      return p;
    },
    remove(index) {
      this.files.splice(index, 1);
    },
    descInput() {
      this.txtVal = this.desc.length;
    }
  },
  components: {
    buttonCmp
  }
};
</script>

<style  lang='less'>
.feedback-page {
  background: #f5f6f6;
}
.textarea-ele {
  display: block; //重点是需要加上这一句
  width: 100%;
  border-bottom: 0px solid;
  border-top: 1px solid #e1e2e2;
  padding: 30px 24px 0 24px;
  font-size: 26px;
  line-height: 1.4;
  background: #fff;
}
.text-number {
  background: #fff;
  padding-right: 24px;
  width: 100%;
  font-size: 28px;
  color: #898989;
  text-align: right;
}
.upload-img__wrapper {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  padding-top: 68px;
  padding-left: 24px;
  .item-img {
    position: relative;
    margin-right: 20px;
    margin-bottom: 20px;
    .item-img__close {
      position: absolute;
      right: -15px;
      top: -15px;
      width: 30px;
      height: 30px;
      background: url("./images/20190614170546.png") no-repeat;
      background-size: contain;
      background-position: center center;
    }
    img {
      width: 188px;
      height: 188px;
      object-fit: cover;
    }
  }

  .upload-input {
    margin-bottom: 20px;
    position: relative;
    width: 188px;
    height: 188px;
    background: url("./images/1511520190614155917.png") no-repeat;
    background-size: contain;
    background-position: center center;
    input {
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>
