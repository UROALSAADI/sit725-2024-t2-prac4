const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    // Define the schema and model
    const itemSchema = new mongoose.Schema({
        name: String,
        quantity: Number
    });

    const Item = mongoose.model('Item', itemSchema);

    // Create some dummy data
    const dummyItems = [
        { name: 'Item 1', quantity: 10 },
        { name: 'Item 2', quantity: 20 },
        { name: 'Item 3', quantity: 30 }
    ];

    // Insert dummy data
    Item.insertMany(dummyItems)
        .then(() => {
            console.log('Dummy data inserted');
            mongoose.connection.close();
        })
        .catch(err => {
            console.error('Error inserting data', err);
            mongoose.connection.close();
        });
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
