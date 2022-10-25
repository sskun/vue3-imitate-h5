const express = require('express')
const app = express()
const path = require('path')

app.set('views', __dirname + '/' + 'dist') // 定义ejs view
app.set('view engine', 'ejs')

app.use('/js/', express.static(path.resolve(__dirname, 'dist/js'))) // js 目录
app.use('/css/', express.static(path.resolve(__dirname, 'dist/css'))) // css 目录

app.get('/*', function (req, res) {
  // 读取ares的一些逻辑这里处理
  res.render('index', {})
})

app.listen(80, () => {
  console.log('服务已启动，80端口监听中...')
})
