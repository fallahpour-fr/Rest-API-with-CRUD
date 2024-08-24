const { User, Post } = require('../models/index');

module.exports = {
    createPost: async (req, res, next) => {
        try {
            const { title, content, userId } = req.body;
            const myObject = await Post.create({
                title, content, userId
            })

            res.status(201).json(myObject);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'An error occurred while creating the post.' });
        }
    },
    findPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            const myData = await Post.findByPk(postId);
            res.status(200).json(myData);

        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
    findAllPost: async (req, res, next) => {
        try {
            const myData = await Post.findAll();
            res.status(200).json(myData);

        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
    deletePost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            const result = await Post.destroy({
                where: { id: postId }
            });

            if (result) {
                res.status(200).json({
                    status: 200,
                    statustext: 'Delete',
                    message: 'Post deleted successfully'
                });
            } else {
                res.status(404).json({
                    status: 404,
                    statustext: 'Not Found',
                    message: 'Post not found'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    },
    editPost: async (req, res, next) => {
        try {
            const postId = req.params.id;
            const postData = req.body;

            // Check if postData is valid
            if (!postData) {
                return res.status(400).json({
                    status: 400,
                    statustext: 'Bad Request',
                    message: 'Invalid Post data',
                });
            }

            // Update Post
            const [updated] = await Post.update(postData, {
                where: { id: postId }
            });

            if (updated) {
                const updatedPost = await Post.findByPk(postId);
                res.status(200).json({
                    status: 200,
                    statustext: 'Ok',
                    message: 'Post updated successfully',
                    data: updatedPost,
                });
            } else {
                res.status(404).json({
                    status: 404,
                    statustext: 'Not Found',
                    message: 'Post not found',
                });
            }

        } catch (error) {
            console.log(error)
            res.status(500).send();
        }
    },
}