const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const Contact = require('./models/Contact');
const User = require('./models/User');
const Product = require('./models/Product');
const Blog = require('./models/Blog');

const app = express();
app.use(cors());
app.use(express.json());

// User API
app.post('/api/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ success: true, message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating user', error });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching users', error });
  }
});

// Product API
app.post('/api/products', async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const product = new Product({ name, description, price, image });
    await product.save();
    res.status(201).json({ success: true, message: 'Product created successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating product', error });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching products', error });
  }
});

// Blog API
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = new Blog({ title, content, author });
    await blog.save();
    res.status(201).json({ success: true, message: 'Blog created successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating blog', error });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching blogs', error });
  }
});



const mongoURI = 'mongodb://localhost:27017/aditya-rohilla'; // Change this to your MongoDB URI

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Backend is running and connected to MongoDB!');
});

// Contact form API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting contact form', error });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching contacts', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
