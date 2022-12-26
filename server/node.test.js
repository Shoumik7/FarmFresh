
const request = require('supertest')
const apptest = require('./apptesting')
//const fetch = require('node-fetch')

describe('Endpoints', () => {
  it('should get a specified user', async () => {
    const res = await request(apptest)
      .get('/curr-user-api/172')
    
    //console.log((res.req.method));

    expect(res.req.method).toBe('GET')
    expect(JSON.parse(res.req.res.text)[0].email).toBe('ayeung@umass.edu')
  })

  it('should get all products', async () => {
    const res = await request(apptest)
      .get('/api/products/')
    
    //console.log((res.res.req.res.text.length));

    expect(res.res.req.res.statusCode).toBe(200)
    expect(res.res.req.res.text.length).toBeGreaterThanOrEqual(2800)
  })

  
  it('should get products of a specified vendor', async () => {
    const res = await request(apptest)
      .get('/api/products/173')
    
    //console.log(res);

    expect(res.res.req.res.statusCode).toBe(200)
    expect(JSON.parse(res.req.res.text)[0].vendor_id).toBe(173)
    expect(JSON.parse(res.req.res.text)[1].vendor_id).toBe(173)
    expect(JSON.parse(res.req.res.text)[2].vendor_id).toBe(173)
  })

  it('should get product by specific id', async () => {
    const res = await request(apptest)
      .get('/api/products/product/71')
    
    //console.log(JSON.parse(res.req.res.text)[0].product_id)
    expect(res.res.req.res.statusCode).toBe(200)
    expect(JSON.parse(res.req.res.text)[0].product_id).toBe(71)
  })

  it('should get review by id', async () => {
    const res = await request(apptest)
      .get('/api/reviews/review_id/19')
    
    expect(res.res.req.res.statusCode).toBe(200)
    expect(JSON.parse(res.req.res.text)[0].review_id).toBe(19)
  })

  it('should get reviews of a specified reviewer', async () => {
    const res = await request(apptest)
      .get('/api/reviews/reviewer_id/172')
    
    expect(res.res.req.res.statusCode).toBe(200)
    expect(res.res.req.res.text.length).toBeGreaterThanOrEqual(700)
   
  })
  
  it('should get reviews of a specified reviewee', async () => {
    const res = await request(apptest)
      .get('/api/reviews/reviewee_id/173')
    
      expect(res.res.req.res.statusCode).toBe(200)
      expect(res.res.req.res.text.length).toBeGreaterThanOrEqual(700)
  })

  it('should get searches for products specified by search query', async () => {
    const res = await request(apptest)
      .get('/search/products/Tomato')
    
      expect(res.res.req.res.statusCode).toBe(200)
      expect(res.res.req.res.text.length).toBeGreaterThanOrEqual(2800)

      //console.log(JSON.parse(res.res.req.res.text)[0].name)
      expect(JSON.parse(res.res.req.res.text)[0].name.includes("Tomato"))
      expect(JSON.parse(res.res.req.res.text)[1].name.includes("Tomato"))
    
  })

  it('should get searches for products of specified vendor', async () => {
    const res = await request(apptest)
      .get('/search/products/Tomato/173')
    
      expect(res.res.req.res.statusCode).toBe(200)
      expect(JSON.parse(res.res.req.res.text)[0].name.includes("Tomato"))
      expect(JSON.parse(res.res.req.res.text)[0].vendor_id).toBe(173)
      expect(JSON.parse(res.res.req.res.text)[1].vendor_id).toBe(173)
    
  })

  it('should get all products with empty search query', async () => {
    const res = await request(apptest)
      .get('/search/products/')
    
    expect(res.res.req.res.statusCode).toBe(200)
    expect(res.res.req.res.text.length).toBeGreaterThanOrEqual(2800)
  })

  it('should get searches for vendors specified by search query', async () => {
    const res = await request(apptest)
      .get('/search/vendors/neal')
    
      expect(res.res.req.res.statusCode).toBe(200)
      expect(JSON.parse(res.res.req.res.text)[0].first_name).toBe("Neal")
  })

  it('should get all vendors with empty search query', async () => {
    const res = await request(apptest)
      .get('/search/vendors/')
    
    expect(res.res.req.res.statusCode).toBe(200)
    expect(JSON.parse(res.res.req.res.text)[0].is_vendor).toBe(true)
    expect(JSON.parse(res.res.req.res.text)[1].is_vendor).toBe(true)

  })

  it('should get transactions within cart by product id', async () => {
    const res = await request(apptest)
      .get('/api/transaction/get-in-cart/71')
    
    expect(res.res.req.res.statusCode).toBe(200)
    expect(res.res.req.res.text.length).toBeLessThan(3)
    
  })
 
})


