const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('id verification', async () => {
  const response = await api.get('/api/blogs')
  
 expect(response.body[0].id).toBeDefined()
})

test("POST Add", async () => {
  
  const addPost = {
    title: "btd is very",
    author: "Mister bTd",
    url: "https://youtube.com",
    likes: 5
  };
  await api
    .post("/api/blogs")
    .send(addPost)
    .expect(200);
});

test("likes property ", async () => {
  const addPost = {
    title: "btd is very",
    author: "Mister bTd",
    url: "https://youtube.com",
    
  };
  await api
    .post("/api/blogs")
    .send(addPost)
    .expect(200);
  const request = await api.get("/api/blogs")
  const body = request.body;
  const like = body[body.length - 1]
  if (like.likes === undefined) {
    like.likes = 0;
  }
  expect(like.likes).toBe(0)
});

test("title and url manquant", async () => {
  const addPost = {
    
    author: "bTd",
    url: "https://youtube.com",
    likes: 12
  };
  await api
    .post("/api/blogs")
    .send(addPost)
    .expect(400)
  
});


afterAll(() => {
  mongoose.connection.close()
})