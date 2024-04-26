// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://shoaibmohtashim973:WlhEBVCBa4Myhnh5@cluster0.hf7fikt.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
// const mongodb = async () => {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         if (err) console.log("---", err)
//         else {
//             console.log('connected succesfully')
//             const fetch_data = await mongoose.connection.db.collection('food_items')
//             fetch_data.find({}).toArray(function (err, data) {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log(data)
//                 }
//             })

//         }
//     })

// }
// module.exports = mongodb;


const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shoaibmohtashim973:WlhEBVCBa4Myhnh5@cluster0.hf7fikt.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

module.exports = connectToMongoDB;
