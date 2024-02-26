import express from 'express';

const router = express.Router();
const posts = [
    {
        "id": 1,
        "title": "Primer post",
        "body": "Contenido del primer post"
    },
    {
        "id": 2,
        "title": "Segundo post",
        "body": "Contenido del segundo post"
    },
    {
        "id": 3,
        "title": "Tercer post",
        "body": "Contenido del tercer post"
    },
    {
        "id": 4,
        "title": "Cuarto post",
        "body": "Contenido del cuarto post"
    },
    {
        "id": 5,
        "title": "Quinto post",
        "body": "Contenido del quinto post"
    }
]

export const getPosts = async (req, res) => {
    try {
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        
        res.status(200).json(posts[id]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    try {
        await newPostMessage.save();

        res.status(201).json(posts.push({ title, message, id }));
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;