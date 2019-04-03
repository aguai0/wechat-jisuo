// page/component/details/details.js
Page({
  data:{
    goods: [
      {
      id: 1,
      image: '/image/new_1.jpg',
      title: '极索户外速干衣T恤男',
      price: 33.9,
      stock: '有货',
      detail: '',
      parameter: '33.9/件',
      service: '无条件退货'
     },
      {
        id: 2,
        image: '/image/new_2.jpg',
        title: '极索户外速干衣T恤女',
        price: 29.9,
        stock: '有货',
        detail: '',
        parameter: '29.9/件',
        service: '无条件退货'
      },
      {
        id: 3,
        image: '/image/new_3.jpg',
        title: '极索户外速干衣T恤男',
        price: 29.9,
        stock: '有货',
        detail: '',
        parameter: '29.9/件',
        service: '无条件退货'
      }
    ],
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})