const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestResult = require('test-result-model')

const Patient = new Schema(
    {
        status: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
)

module.exports = mongoose.model('patients', Patient)