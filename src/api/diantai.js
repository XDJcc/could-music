
import request from '@/utils/request';

// 电台轮播
export function banner() {
    return request({
      url: '/dj/banner',
      method: 'get',
    });
  }

// 推荐电台
export function transceivers({ limit = 10 } = {}) {
  return request({
    url: '/dj/personalize/recommend',
    method: 'get',
    params:{
      limit
    }
  });
}
