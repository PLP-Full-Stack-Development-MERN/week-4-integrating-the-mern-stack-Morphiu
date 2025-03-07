const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes.js')

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB is connected ☑'))
.catch(err => console.log(err));

app.get('/', (req,res)=>{
    res.send('Hello, it works great wooo!')
});

app.use('/api/task', taskRoutes);

app.listen(process.env.PORT || 5000, () => console.log('Server running on port http://localhost:5000'));