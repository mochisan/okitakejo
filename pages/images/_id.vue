<template lang="pug">
  .container
    h1 起き竹城
    img(:src="imageLink()")
    p 出典 {{imageLink()}}

    .okitakejo(@click="okitakejo") 起き竹城する！

    .footer
      p Copyright &copy; もっちー＆ももたろー All Rights Reserved.
</template>

<script>
export default {
  methods: {
    imageLink: function() {
      console.log(this.$route.params.id);
      return this.items[Number(this.$route.params.id)].src;
    },
    okitakejo: function() {
      this.$router.push("/");
    }
  },
  head() {
    return {
      title: "起き竹城",
      meta: [
        { name: "twitter:image:src", content: `${this.imageLink()}` },
        { property: "og:image", content: `${this.imageLink()}` }
      ]
    };
  },
  data() {
    return {
      items: [
        { src: "https://wadai7.com/wp/wp-content/uploads/2018/07/zb6.jpg" },
        {
          src:
            "https://i0.wp.com/geisposoul.com/wp-content/uploads/2017/06/akitakejyoutop.jpg?resize=223%2C319&ssl=1"
        },
        {
          src:
            "http://yumeijinhensachi.com/wp-content/uploads/2018/11/03-20.jpg"
        },
        {
          src:
            "http://d2dcan0armyq93.cloudfront.net/photo/odai/400/9d1c5d114dfba86cd11d89b825953d83_400.jpg"
        },
        {
          src:
            "http://d2dcan0armyq93.cloudfront.net/photo/odai/600/007497e4c7007ce9a6c70801c8df6e8b_600.jpg"
        },
        {
          src:
            "https://shae-bear.com/wp-content/uploads/2018/08/24ad6ff2478860dc1929940eee1c5099-300x175.jpg"
        },
        {
          src:
            "http://d2dcan0armyq93.cloudfront.net/photo/odai/400/110a1ee3d19542fa42e26e7a79227e58_400.jpg"
        },
        {
          src:
            "https://shae-bear.com/wp-content/uploads/2018/08/f2386e03935421903f0e75d4789d5682.jpg"
        },
        {
          src:
            "https://www.sponichi.co.jp/entertainment/news/2015/12/07/jpeg/G20151207011638320_view.jpg"
        },
        {
          src:
            "http://blogshigechan.up.n.seesaa.net/blogshigechan/image/takejo-thumbnail2.jpg?d=a0"
        },
        {
          src: "http://nafnaf.fc2web.com/min/09-10-29-1.jpg"
        },
        {
          src: "http://itm.news2u.net/items/output/126536/4/1024"
        },
        {
          src:
            "https://res.cloudinary.com/macm/image/upload/v1522247962/gmys5k5p2gkrsycjryk4.jpg"
        },
        {
          src:
            "https://image.jimcdn.com/app/cms/image/transf/dimension=210x210:mode=crop:format=jpg/path/sd6e3dc54d54b6d5f/image/i39e82eba7602633e/version/1479208506/image.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  h1 {
    margin: 24px auto;
    text-align: center;
  }
  width: 100%;
  img {
    width: 100%;
  }
  p {
    text-align: right;
  }
}

.footer {
  margin-top: 40px;
  p {
    text-align: center;
    margin-top: 6px;
    margin-bottom: 6px;
  }
}
.okitakejo {
  background-color: blue;
  width: 300px;
  height: 110px;
  line-height: 110px;
  text-align: center;
  border-radius: 55px;
  color: white;
  font-size: 36px;
  margin: 40px auto;
  margin-bottom: 20px;
}
</style>

