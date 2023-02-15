const { error } = require("console")

// Gets All The Posts with GET /api/posts (PRIVATE)
const getPosts = (req, res) => {
    res.status(200).json({
        message : 'Get Posts'
    })
} 

// Create All The Posts with POST /api/posts (PRIVATE)
const createPosts = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    res.status(200).json({
        message : 'Create Posts'
    })
} 

// Updates All The Posts with PUT /api/posts (PRIVATE)
const updatePosts = (req, res) => {
    res.status(200).json({
        message : `Update Posts ${req.params.id}`
    })
} 

// Delete All The Posts with DELETE /api/posts (PRIVATE)
const deletePosts = (req, res) => {
    res.status(200).json({
        message : `Delete Posts ${req.params.id}`
    })
} 

module.exports = {
    getPosts, createPosts , updatePosts , deletePosts
}