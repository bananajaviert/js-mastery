import Posts from '../models/post.js'

export const get_posts = async (req, res, next) => {
    try {
        const posts = await Posts.find()
        res.status(200).json(posts)
        next()
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const create_post = async (req, res, next) => {
    const post = req.body

    const new_post = new Posts(post)

    try {
        await new_post.save()

        res.status(201).json(new_post)
        next()
    } catch(error) {
        res.status(409).json({message: error.message})
    }
}
