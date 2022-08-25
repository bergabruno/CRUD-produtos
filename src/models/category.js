'use strict'

const mongoose = require('mongoose');
const product = require('./product');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Category',schema );