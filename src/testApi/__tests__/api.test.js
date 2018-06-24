const dogAPI = require('../dogAPI')
jest.mock('../request')

describe('#getDogImage() using Promises', () => {
  it('should load data', () => {
    return dogAPI.getDogImage()
        .then(data => {
        // console.log(data.entity)
        expect(data).toBeDefined()
        expect(data.entity.status).toEqual('success')
        })
    })
})

describe('#getDogImage() using async/await', () => {
    it('should load data', async () => {
        const data = await dogAPI.getDogImage()
        expect(data).toBeDefined()
        expect(data.entity.status).toEqual('success')
    })
})
