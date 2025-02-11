module.exports = {
  "publicPath": "./",
  "runtimeCompiler": false,
  "productionSourceMap": true,
  "parallel": true,
  "devServer": {
    "host": "0.0.0.0",
    "port": 8080,
    "https": false,
    "hotOnly": true,
    "proxy": "https://timeline.hancher.top"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}