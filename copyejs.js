const path = require('path')
const fs = require('fs')
const fromFileName = path.resolve(__dirname, './dist/index.html')
const toFileName = path.resolve(__dirname, './dist/index.ejs')
fs.copyFile(fromFileName, toFileName, 0, () => {
  console.log('复制完成')
})
