const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");



const createNews = async (req, res) => {
  const { title, text } = req.body;
  const files = req.files;

  try {
    // Insert the news article into the database
    const [newsId] = await knex('news').insert({
      title,
      text
    });

    const insertedImages = [];
    for (const file of files) {
      const { originalname, buffer } = file;
      const [imageId] = await knex('images').insert({
        news_id: newsId,
        image: buffer,
        image_name: originalname
      });

      insertedImages.push(imageId);
    }

    // Update the image_count in the news table
    await knex('news')
      .where('id', newsId)
      .update('image_count', insertedImages.length);

    // Retrieve the inserted news article
    const insertedNews = await knex('news')
      .where('id', newsId)
      .first();

    res.json({ message: 'New news article created', news: insertedNews, images: insertedImages });
  } catch (error) {
    console.error('Error creating news article:', error);
    res.status(500).json({ error: 'Failed to create news article' });
  }
};

function getAllNews(req, res) {
    // Implement logic to retrieve all news
  }
  
  function getNewsById(req, res) {
    // Implement logic to retrieve a specific news by ID
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

