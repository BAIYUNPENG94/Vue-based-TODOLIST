module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: "http://192.168.2.125:8000",
    //proxy: "http://192.168.2.125:8000"
  }
}