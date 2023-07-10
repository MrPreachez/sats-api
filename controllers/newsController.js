const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

//1) Create a Post, req = generate id, title.
const createNews = async (req, res) => {
  try {
    const { post_title, post_subtitle, post_category } = req.body;
    await knex("news").insert({
      post_title,
      post_subtitle,
      post_category,
    });
    const [{ post_id }] = await knex("news")
      .select("id as post_id")
      .orderBy("id", "desc")
      .limit(1);
    res.status(201).json({ post_id });
  } catch (err) {
    res.status(400).send(`Error inserting project ${err}`);
  }
};
//2) Upload text
const uploadNewsText = async (req, res) => {
  try {
    const { article, post_id } = req.body;
    await knex("articles").insert({ 
      id:uuidv4(),
      post_id,
      article
       });
    res.status(201).send('Article uploaded successfully')
  } catch (err) {
    res.status(400).send('Error uploading article to database')
  }
};
//3) Upload photo. Max 3
const uploadNewsImage = async (req, res) => {
  try {
    const { originalname, buffer, post_id } = req.file;
    await knex("images").insert({
      id:uuidv4,
      post_id,
      originalname,
      buffer
    })
  }
  catch(err) {
    res.status(400).send('Error uploading image to database')
  }
}
//4) Done button

// Remember to handle any necessary error cases, such as
// validating the request body and handling errors related to the database operations

// const createNews = async (req, res) => {
//   const { title, article } = req.body;
//   console.log(title, article)
//   const files = req.files;
//   console.log(files)

//   try {
//     await knex("news").insert({
//       id,
//       title,
//       article,
//     });

//     // console.
//     // res.status().send("News article created in db")

//     const insertedImages = [];
//     for (const file of files) {
//       const { originalname, buffer } = file;
//       const [imageId] = await knex("images").insert({
//         id,
//         news_id: newsId,
//         image: buffer,
//         image_name: originalname,
//       });
//       insertedImages.push(imageId);
//     }

//     // Update the image_count in the news table
//     await knex("news")
//       .where("id", newsId)
//       .update("image_count", insertedImages.length);

//     // Retrieve the inserted news article
//     const insertedNews = await knex("news").where("id", newsId).first();

//     res.json({
//       message: "New news article created",
//       news: insertedNews,
//       images: insertedImages,
//     });
//   } catch (error) {
//     console.error("Error creating news article", error);
//     res.status(500).json({ error: "Failed to create news article" });
//   }
// };
// const createNews = async (req, res) => {
//   const { title, article } = req.body;
//   const files = req.files;

//   try {
//     // Insert the news article into the database
//     const [newsId] = await knex('news').insert({
//       title,
//       article
//     });

//     const insertedImages = [];
//     for (const file of files) {
//       const { originalname, buffer } = file;
//       const [imageId] = await knex('images').insert({
//         news_id: newsId,
//         image: buffer,
//         image_name: originalname
//       });

//       insertedImages.push(imageId);
//     }

//     // Update the image_count in the news table
//     await knex('news')
//       .where('id', newsId)
//       .update('image_count', insertedImages.length);

//     // Retrieve the inserted news article
//     const insertedNews = await knex('news')
//       .where('id', newsId)
//       .first();

//     res.json({ message: 'New news article created', news: insertedNews, images: insertedImages });
//   } catch (error) {
//     console.error('Error creating news article:', error);
//     res.status(500).json({ error: 'Failed to create news article' });
//   }
// };

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
  createNews,
  uploadNewsText,
  uploadNewsImage,
  updateNewsById,
  deleteNewsById,
  getAllNews,
  getNewsById,
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
