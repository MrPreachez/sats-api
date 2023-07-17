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
    const { article } = req.body;
    const { post_id } = req.params.post_id;
    await knex("articles").insert({
      id: uuidv4(),
      post_id,
      article,
    });
    res.status(201).send("Article uploaded successfully");
  } catch (err) {
    res.status(400).send("Error uploading article to database");
  }
};
//3) Upload photo. Max 3
//  handle file management, such as naming conflicts, removing or updating images,
// and ensuring appropriate security measures to prevent unauthorized access to the files.
const uploadNewsImage = async (req, res) => {
  try {
    // const { image_name, buffer, post_id } = req.file;
    console.log(req.file);

    const image_name = req.file.originalname;
    const post_id = req.params.post_id;

    const image_path = "./public/assets/${image_name}";

    await knex("images").insert({
      id: uuidv4(),
      post_id,
      image_name,
      image_path,
    });
    res.status(201).send("Image uploaded successfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error uploading image to database");
  }
};
//4) Publish News

const publishNewsById = async (req, res) => {
  try {
    const post_id = req.params.post_id;

    const news = await knex("news").where("id", post_id).first();

    if (!post_id) {
      res.status(404).json({ error: "post_id not found" });
    }
    news.published_at = newDate();

    // Save the updated story in the database
    await knex("news").where("id", post_id).update({
      published_at: news.published_at,
    });

    res.status(200).json({ message: "News update published successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to publish news" });
  }
};

const getNewsById = async (req, res) => {
  try {
    const postId = req.params.post_id;
    const news = await knex("news")
      .select("news.*", "images.*", "articles.*")
      .leftJoin("images", "news.id", "images.post_id")
      .leftJoin("articles", "news.id", "articles.post_id")
      .where("news.id", postId);

    // Check if the news item exists and map over to create a new array with all images
    if (news.length > 0) {
      const newsPost = news[0];
      const images = news.map((post) => ({
        id: post.id,
        image: post.image,
        image_name: post.image_name,
        created_at: post.created_at,
        updated_at: post.updated_at,
      }));

      // Add the images array to the news item
      newsPost.images = images;

      // Return the news item with associated data
      res.json(newsPost);
    } else {
      res.status(400).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Remember to handle any necessary error cases, such as
// validating the request body and handling errors related to the database operations

function getAllNews(req, res) {
  // Implement logic to retrieve all news
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
  publishNewsById,
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
