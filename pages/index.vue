<template lang="pug">
  .container
    h1 起きた？
    .okitakejo(@click="okitakejo") 起き竹城！
    p 注）起き竹城！ボタンを押すと
    p 「起き竹城」って言葉と共にランダムに
    p 起き竹城の画像リンクをTwitterに投稿できるよ！

    .footer
      p Copyright &copy; もっちー＆ももたろー All Rights Reserved.
</template>

<script>
export default {
  methods: {
    okitakejo: function() {
      location.href = `https://twitter.com/intent/tweet?text=起き竹城%0ahttps://起き竹城.jp/images/${Math.round(
        Math.random() * 13
      )}`;
    }
  },
  head() {
    return {
      title: "起き竹城",
      meta: [
        {
          name: "twitter:image:src",
          content: "https://wadai7.com/wp/wp-content/uploads/2018/07/zb6.jpg"
        },
        {
          property: "og:image",
          content: "https://wadai7.com/wp/wp-content/uploads/2018/07/zb6.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
p {
  text-align: center;
  margin-top: 6px;
  margin-bottom: 6px;
}
.footer {
  margin-top: 40px;
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
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>

