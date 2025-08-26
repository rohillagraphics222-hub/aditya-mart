// Example API calls using Axios for backend endpoints
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

// Users
export const createUser = (user) => axios.post(`${API_BASE}/users`, user);
export const getUsers = () => axios.get(`${API_BASE}/users`);

// Products
export const createProduct = (product) => axios.post(`${API_BASE}/products`, product);
export const getProducts = () => axios.get(`${API_BASE}/products`);

// Blogs
export const createBlog = (blog) => axios.post(`${API_BASE}/blogs`, blog);
export const getBlogs = () => axios.get(`${API_BASE}/blogs`);

// Contact Form
export const submitContact = (contact) => axios.post(`${API_BASE}/contact`, contact);
export const getContacts = () => axios.get(`${API_BASE}/contact`);
