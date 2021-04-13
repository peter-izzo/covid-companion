import User from '../models/userModel.js';

export const getPosts = async (req, res) => {
    try {
        await User.find();
        
        res.status(200).json(User);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createPosts = (req, res) => {
    res.send('Post Creation'); 
}