const mongoose = require( 'mongoose' );


mongoose.connect('mongodb://localhost:27017/webdb', {
    useNewUrlParser: true
});

// 스키마 객체만들어서 일정한 형식으로 보낼 수 있게
const email = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
},{
    versionKey: false
});



module.exports = mongoose.model('Email', email);