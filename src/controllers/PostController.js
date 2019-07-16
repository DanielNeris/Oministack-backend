const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        try {
            const posts = await Post.find().sort('-createdAt');

            return res.json(posts)
        } catch (error) {
            return res.json(error);
        }
    },

    async store(req, res) {
        try {
            const { author, place, description, hashtags } = req.body;
            const { filename: image } = req.file;
    
            const post = await Post.create({
                author,
                place,
                description,
                hashtags,
                image,
            });
    
            return res.json(post);
        } catch (error) {
            return res.json(error);
        }
    }
};