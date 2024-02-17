const Blogs = require("../models/blog.models");


const createNewBlog = async (req, res) => {
    const { title } = req.body;
    const newBlogDoc = new Blogs({ title: title});
    const result = await newBlogDoc.save();
    console.log(newBlogDoc);
    res.json(result);
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find({});
        res.json(blogs);
    } catch (error) {
        res.status(404).json({ message: "Could Not Fetch Blogs from DB", error})
    }
}

module.exports = {
    createNewBlog,
    getAllBlogs
}