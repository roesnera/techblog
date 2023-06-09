import { assert } from "chai";
import {
  fetchAllArticles,
  fetchMainArticle,
  formatDate,
  getArticlesByAuthor,
} from "../utils/supabase.js";

// allArticles serves to cache the fetchAllArticles function call
// then each it function uses nullish coalescing to check if allArticles does not have a null or undefined value
//   if it does, then we need to call an async function to request it
// this limits the number of async function calls that we need
// this drastically reduces time required to execute the test suite
describe("Supabase Client", function () {
  let allArticles;
  describe("fetchAllArticles", function () {
    it("Should return a non-empty list of allArticles", async function () {
      allArticles = allArticles ?? (await fetchAllArticles());
      assert.isTrue(allArticles.length > 0);
    });
    it("Articles should have all and only title, author, text, created_at, post_id, and creator_account fields", async function () {
      allArticles = allArticles ?? (await fetchAllArticles());
      const articleProps = Object.keys(allArticles[0]);
      assert.hasAllKeys(allArticles[0], [
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
    it("The fetched article should have the highest post_id field", async function () {
      const mainArticle = article ?? (await fetchMainArticle());
      allArticles = allArticles ?? (await fetchAllArticles());
      const postIds = [];
      const mainArticleId = mainArticle.post_id;
      for (const currentArticle of allArticles) {
        postIds.push(currentArticle.post_id);
      }
      for (const articleId of postIds) {
        assert.isTrue(mainArticleId >= articleId);
      }
    });
  });
  describe("formatDate", function () {
    let article;
    it('should provide a date that is formatted as "(month word) (day number), (year number)"', async function () {
      //   article = article ?? (await fetchMainArticle());
      allArticles = allArticles ?? (await fetchAllArticles());
      for (const article of allArticles) {
        const date = article.created_at;
        const regex = /^[a-zA-Z]{3,9} [0-9]{1,2}, [0-9]{4}/;
        assert.isTrue(regex.test(formatDate(date)));
      }
    });
  });
  describe("getArticlesByAuthor", function () {
    it("should return an array", async function () {
        allArticles = allArticles ?? (await fetchAllArticles());
        const allArticlesByAuthor = await getArticlesByAuthor("Adam Roesner");
        assert.isArray(allArticlesByAuthor);
    })
    it("should return fewer than all allArticles", async function () {
      allArticles = allArticles ?? (await fetchAllArticles());
      const allArticlesByAuthor = await getArticlesByAuthor("Adam Roesner");
      assert.isTrue(allArticlesByAuthor.length < allArticles.length);
    });
  });
});
