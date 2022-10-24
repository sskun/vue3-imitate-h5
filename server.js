const express = require('express')
const app = express()

app.get('/*', function (req, res) {
  // 读取ares的一些逻辑这里处理
  res.render('dataResource', { Ares })
})
