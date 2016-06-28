var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: String,
    start: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    info: String,
    img: String,
    tags: [Stirng],
    brief: String,
    ISBN: String
});

var userSchma = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    createOn: {
        type: Date,
        default: Date.now
    },
    img: String,
    ip: String,
    mobile: String
});

var commentSchema = new mongoose.Schema({
    user: userSchma,
    createdOn: {
        type: Date,
        default: Date.now
    },
    content: String
});

var topicSchema = new mongoose.Schema({
    title: String,
    type: String,
    visitedCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    },
    createOn: {
        type: Date,
        default: Date.now
    },
    img: String,
    author: String,
    content: String,
    comments: [commentSchema],
    deleted: {
        type: Boolean,
        default: false
    },
    top: {
        type: Boolean,
        default: false
    },  // 置顶帖
    good: {
        type: Boolean,
        default: false
    },  // 精华帖
});

mongoose.model('Book', bookSchema);
mongoose.model('Topic', topicSchema);