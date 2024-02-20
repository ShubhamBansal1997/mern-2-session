const Blogs = require("../models/blog.models");
const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();



const createNewBlog = async (req, res) => {
    const { body } = req;
    const result = await BlogServiceInstance.create(body);
    res.json(result);
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogServiceInstance.findAll();
        res.json(blogs);
    } catch (error) {
        res.status(404).json({ message: "Could Not Fetch Blogs from DB", error})
    }
}

const deleteBlogWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Blogs.findOneAndDelete({_id: id});
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Couldn't delete blog post, Please try again"});
    }
}

const updateBlogsWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const filter = { _id: id }
        const update = req.body;

        const result = await Blogs.findOneAndUpdate(filter, update);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Couldn't save blog post. Please try again", error});
    }
}

const searchBlogs = async (req, res) => {
    const { title, author } = req.query;
    try {
        const result = await Blogs.find({
            $or: [
                { title },
                { authors: { $elemMatch: { email: author }} }
            ]
        });
        res.json(result);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Couldn't fetch blog posts. Please try again", error});
    }
}

module.exports = {
    createNewBlog,
    getAllBlogs,
    deleteBlogWithId,
    updateBlogsWithId,
    searchBlogs
}