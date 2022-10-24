jest.mock('node-fetch');

const app = require('../../app');
const request = require('supertest');
const fetch = require('node-fetch');
const { Response } = jest.requireActual('node-fetch');



describe("Products Routes Tests", () => {

	const products = [ { id: 1 },{ id: 2 },{ id: 3 }];

	it("should respond with body products", async () => {
		fetch.mockResolvedValueOnce(Promise.resolve(new Response(JSON.stringify(products))));
		const response = await request(app).get('/products');
		expect(response.body).toEqual({ products });
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith("https://dummyjson.com/products");
	});

});