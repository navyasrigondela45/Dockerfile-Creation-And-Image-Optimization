const express = require('express');
const path = require('path');

const app = express();
// Use PORT from environment variable or default to 3000
const PORT = process.env.PORT || 3000;
// Bind to all network interfaces (0.0.0.0) instead of just localhost
const HOST = '0.0.0.0';

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// API endpoint to get prime ministers data
app.get('/api/prime-ministers', (req, res) => {
    const primeMinisters = [
        {
            id: 1,
            name: "Jawaharlal Nehru",
            term: "1947-1964",
            party: "Indian National Congress",
            description: "First Prime Minister of India",
            image: "https://via.placeholder.com/300x400/667eea/ffffff?text=Nehru"
        },
        {
            id: 2,
            name: "Lal Bahadur Shastri",
            term: "1964-1966",
            party: "Indian National Congress",
            description: "Given slogan 'Jai Jawan Jai Kisan'",
            image: "https://via.placeholder.com/300x400/764ba2/ffffff?text=Shastri"
        },
        {
            id: 3,
            name: "Indira Gandhi",
            term: "1966-1977, 1980-1984",
            party: "Indian National Congress",
            description: "First woman Prime Minister of India",
            image: "https://via.placeholder.com/300x400/667eea/ffffff?text=Indira"
        },
        {
            id: 4,
            name: "Morarji Desai",
            term: "1977-1979",
            party: "Janata Party",
            description: "First non-Congress Prime Minister",
            image: "https://via.placeholder.com/300x400/764ba2/ffffff?text=Desai"
        },
        {
            id: 5,
            name: "Rajiv Gandhi",
            term: "1984-1989",
            party: "Indian National Congress",
            description: "Youngest Prime Minister at 40",
            image: "https://via.placeholder.com/300x400/667eea/ffffff?text=Rajiv"
        },
        {
            id: 6,
            name: "V. P. Singh",
            term: "1989-1990",
            party: "Janata Dal",
            description: "Implemented Mandal Commission",
            image: "https://via.placeholder.com/300x400/764ba2/ffffff?text=VP+Singh"
        },
        {
            id: 7,
            name: "Chandra Shekhar",
            term: "1990-1991",
            party: "Samajwadi Janata Party",
            description: "Known for his socialist views",
            image: "https://via.placeholder.com/300x400/667eea/ffffff?text=Shekhar"
        },
        {
            id: 8,
            name: "P. V. Narasimha Rao",
            term: "1991-1996",
            party: "Indian National Congress",
            description: "Father of Indian Economic Reforms",
            image: "https://via.placeholder.com/300x400/764ba2/ffffff?text=Rao"
        },
        {
            id: 9,
            name: "Atal Bihari Vajpayee",
            term: "1996, 1998-1999, 1999-2004",
            party: "Bharatiya Janata Party",
            description: "Renowned orator and poet",
            image: "https://via.placeholder.com/300x400/667eea/ffffff?text=Vajpayee"
        },
        {
            id: 10,
            name: "H. D. Deve Gowda",
            term: "1996-1997",
            party: "Janata Dal",
            description: "From farming background",
            image: "https://via.placeholder.com/300x400/764ba2/ffffff?text=Gowda"
        },
        {
            id: 11,
            name: "I. K. Gujral",
            term: "1997-1998",
            party: "Janata Dal",
            description: "Known for Gujral Doctrine",
            image: "https://via.placeholder.com/300x400/667eea/ffffff?text=Gujral"
        },
        {
            id: 12,
            name: "Manmohan Singh",
            term: "2004-2014",
            party: "Indian National Congress",
            description: "Architect of India's economic reforms",
            image: "https://via.placeholder.com/300x400/764ba2/ffffff?text=Manmohan"
        },
        {
            id: 13,
            name: "Narendra Modi",
            term: "2014-Present",
            party: "Bharatiya Janata Party",
            description: "Current Prime Minister of India",
            image: "https://via.placeholder.com/300x400/667eea/ffffff?text=Modi"
        }
    ];
    res.json(primeMinisters);
});

// Health check endpoint for Docker
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy', 
        port: PORT,
        host: HOST,
        timestamp: new Date().toISOString()
    });
});

// Start server - Bind to all interfaces
app.listen(PORT, HOST, () => {
    console.log(`🚀 Server is running!`);
    console.log(`📍 Host: ${HOST}`);
    console.log(`📍 Port: ${PORT}`);
    console.log(`📍 URL: http://${HOST}:${PORT}`);
    console.log(`✅ Ready to accept connections on all network interfaces`);
});
