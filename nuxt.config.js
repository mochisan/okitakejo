module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '起き竹城',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: "description", content: "素敵な一日になりますように" },
      { name: "keywords", content: "起き竹城, もっちー, 桃太郎, m_hsp, momotarabitch, おはよう" },
      { name: "google", content: "notranslate" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@m_hsp" },
      { name: "twitter:creator", content: "@m_hsp" },
      { name: "twitter:title", content: "起き竹城" },
      { name: "twitter:description", content: "素敵な一日になりますように" },
      { property: "og:title", content: "起き竹城" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:url", content: "https://起き竹城.jp" },
      { property: "og:site_name", content: "起き竹城" },
      { property: "og:description", content: "素敵な一日になりますように" },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

