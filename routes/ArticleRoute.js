import express from 'express';
import ArticleModel from '../models/article.js';

const router = express.Router();

router.post("/articles", async (request, response) => {
  const article = new ArticleModel(request.body);

  try {
    await article.save();
    response.send(article);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/articles", async (request, response) => {
  try {
    const articles = await ArticleModel.find({});
    response.send(articles);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/articles/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const article = await ArticleModel.findById(id);
    if (!article) {
      return response.status(404).send({ error: "Article not found" });
    }
    response.send(article);
  } catch (error) {
    response.status(500).send(error);
  }
});



router.delete("/articles/:id", async (request, response) => {
  const { id } = request.params;

  try {
    const updated = await ArticleModel.findByIdAndDelete(id);
    response.status(200).send({ message: "Article deleted successfully", body: updated });
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/articles/:id", async (request, response) => {
  const { id } = request.params;
  const updates = request.body;
  const options = { new: true, runValidators: true };

  try {
    const article = await ArticleModel.findByIdAndUpdate(id, updates, options);
    if (!article) {
      return response.status(404).send({ error: "Article not found" });
    }
    response.send(article);
  } catch (error) {
    response.status(500).send(error);
  }
});

export default router;