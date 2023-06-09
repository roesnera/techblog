import { assert } from "chai";
import {
  fetchAllArticles,
  fetchMainArticle,
  formatDate,
  getArticlesByAuthor,
} from "../utils/supabase.js";

describe("Supabase Client", function () {
  describe("fetchAllArticles", function () {
    let articles;
    it("Should return a non-empty list of articles", async function () {
      articles = articles ?? (await fetchAllArticles());
      assert.isTrue(articles.length > 0);
    });
    it("Articles should have all and only title, author, text, created_at, post_id, and creator_account fields", async function () {
      articles = articles ?? (await fetchAllArticles());
      const articleProps = Object.keys(articles[0]);
      assert.hasAllKeys(articles[0], [
        "title",
        "author",
        "text",
        "created_at",
        "post_id",
        "creator_account",
      ]);
    });
  });
  describe("fetchMainArticle", function () {
    let article;
    it("should fetch only one article", async function () {
      article = article ?? (await fetchMainArticle());
      assert.isNotArray(article);
      assert.isObject(article);
    });
    it("Article should have all and only title, author, text, created_at, post_id, and creator_account fields", async function () {
      article = article ?? (await fetchMainArticle());
      assert.hasAllKeys(article, [
        "title",
        "author",
        "text",
        "created_at",
        "post_id",
        "creator_account",
      ]);
    });
  });
  describe("formatDate", function () {
    let article;
    let articles;
    it('should provide a date that is formatted as "(month word) (day number), (year number)"', async function () {
    //   article = article ?? (await fetchMainArticle());
      articles = articles?? (await fetchAllArticles());
      for( const article of articles ) {
        const date = article.created_at;
        const regex = /[a-zA-Z]{3,9} [0-9]{1,2}, [0-9]{4}/;
        assert.isTrue(regex.test(formatDate(date)));
      }
    });
  });
});
