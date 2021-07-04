import mongoose from 'mongoose'

const post_schema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selected_file: String,
    like_counte: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const Posts = mongoose.model('post_message', post_schema)

export default Posts