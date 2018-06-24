const fs = require('fs')

const request = () => new Promise((resolve, reject) => {
  fs.readFile('./src/testApi/__mockData__/sample-data.json', (err, data) => {
    if (err) reject(err)
      resolve({ entity: JSON.parse(data) })
  })
})

export default request