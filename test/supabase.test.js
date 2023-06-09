import { assert } from "chai";
import { snagPosts, fetchMainArt, formatDate, getArticlesByAuthor } from "../utils/supabase.js";

describe("Supabase Client", function () {
    describe("snagPosts", function () {
        let articles;
        it("Should return a non-empty list of articles", async function () {
            articles = articles?? await snagPosts();
            assert.isTrue(articles.length>0);
        });
        it("Articles should have all and only title, author, text, created_at, post_id, and creator_account fields", async function (){
            articles = articles?? await snagPosts();
            const articleProps = Object.keys(articles[0]);
            assert.hasAllKeys(articles[0], ["title", "author", "text", "created_at", "post_id", "creator_account"]);
        });
    });
    describe("fetchMainArt", function () {
        let article;
        it("should fetch only one article", async function() {
            article = article?? await fetchMainArt();
            assert.isNotArray(article);
            assert.isObject(article);
        });
        it("Article should have all and only title, author, text, created_at, post_id, and creator_account fields", async function (){
            article = article?? await fetchMainArt();
            assert.hasAllKeys(article, ["title", "author", "text", "created_at", "post_id", "creator_account"]);
        });
    });
    describe("formatDate", function () {
        
    })
})