const router = require("express").Router()
const { createNewBlog, getAllBlogs } = require("../controllers/blogs.controller");

router.get("/", getAllBlogs);
router.post("/new", createNewBlog);

module.exports = router;