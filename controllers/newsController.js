const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");


// Example controller functions
function getAllNews(req, res) {
    // Implement logic to retrieve all news
  }
  
  function getNewsById(req, res) {
    // Implement logic to retrieve a specific news by ID
  }
  
  function createNews(req, res) {
    // Implement logic to create a new news
  }
  
  function updateNewsById(req, res) {
    // Implement logic to update a specific news by ID
  }
  
  function deleteNewsById(req, res) {
    // Implement logic to delete a specific news by ID
  }
  
  module.exports = {
    getAllNews,
    getNewsById,
    createNews,
    updateNewsById,
    deleteNewsById,
  };

  
// const createNews = async (req, res) => {
//     try {
  
//     const newsTableSchema = {
//         id: uuidv4(),
//         article_title: req.body.articleTitle,
//         article_text: req.body.articleText,
//         image_title: req.file.imageTitle,
//         image_buffer: req.file.buffer,
//     };
//     await knex("newsTable").insert(newsTableSchema);
//     res.status(201).send("news article created")
//     } catch (errors) {
//         res.status(400).send("issue with creating article")
//     }
// }


// const getAllNews = async (req, res) => {
//     knex
//     .select("*")
//     .from("newsTable")

//     await ((data) => {
//         if (!data.length) {
//             return res.status(404).send("News data request not found")
//     }
//     res.status(200).json(data[0])
//     })
//     .catch((err) =>
//     res.status(400).send('Error retrieving news articles'))
// }

