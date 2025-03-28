const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    content: { type: String, trim: true },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chat'
    }

}, {
    timestamps: true
});

const message = mongoose.model('message', messageModel);
module.exports = message;