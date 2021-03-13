<template>
  <div class="transceiver-container">
    <!-- <button style="with: 100px; height: 100px" @click="resp">
      点击获取数据
    </button> -->
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <a href="item.url"><img :src="item.pic" alt="" /></a>
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐电台 -->
    <div class="recommend">
      <h3 class="title">推荐电台</h3>
      <div class="items">
        <div class="item" v-for="item in transceivers" :key="item.id">
          <div class="img-wrap" @click="playMusic(item.picId)">
            <div class="desc-wrap">
              <span class="desc">{{ item.rcmdText }}</span>
            </div>
            <img :src="item.picUrl" alt="" />
          <div class="item-text">{{item.desc}}</div>
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { banner, transceivers } from "@/api/diantai";
import { songUrl } from "@/api/discovery";
export default {
  name: "diantai",
  data() {
    return {
      banners: [],
      transceivers: [],
    };
  },
  methods: {
    resp() {
      console.log(this.transceivers);
    },
    playMusic(id) {
      songUrl({
        id: id,
      }).then((res) => {
        // window.console.log(res)
        // this.songUrl = res.data[0].url
        this.$parent.url = res.data[0].url;
      });
    },
  },
  created() {
    banner().then((res) => {
      this.banners = res.data;
    }),
      transceivers().then((res) => {
        this.transceivers = res.data;
      });
  },
};
</script>

<style lang="scss">
// 电台banners
.el-carousel__container {
  height: 230px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
// 电台推荐
.recommend {
  margin-bottom: 40px;
  .items {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 200px;
      margin: 30px;
      position: relative;
      overflow: hidden;
      img {
        width: 200px;
        height: 200px;
        border-radius: 5px;
      }
      .desc-wrap {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        font-size: 16px;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        max-height: 50px;
        padding: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        top: -50px;
        span {
          font-size: 14px;
        }
      }
      &:hover .desc-wrap {
        top: 0;
      }
      .img-wrap {
        position: relative;
        .icon-play {
          position: absolute;
          right: 10px;
          bottom: 13px;
          width: 40px;
          height: 40px;
          color: #dd6d60;
          font-size: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.8);
          opacity: 0;
          &::before {
            transform: translateX(3px);
          }
        }
        &:hover .icon-play {
          opacity: 1;
        }
      }
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        font-size: 14px;
      }
    }
    .item-text {
      float: right;
    }
  }
}
</style>