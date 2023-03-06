const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const recordsSchema = new mongoose.Schema({
    hospital:
    {
        type: String,
       
    },
    reportNo:
    {
        type: Number
    },
    disease: {
        type: String
    },
    medicine: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }

});

module.exports = mongoose.model('medicalRecord', recordsSchema);