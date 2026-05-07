from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Movie data for Mahesh Babu
movies = [
    {
        "id": 1,
        "title": "Guntur Kaaram",
        "year": 2024,
        "director": "Trivikram Srinivas",
        "genre": "Action, Drama",
        "rating": 4.5,
        "poster": "https://via.placeholder.com/300x400/667eea/ffffff?text=Guntur+Kaaram",
        "description": "A family drama set in Guntur, exploring relationships and conflicts.",
        "box_office": "₹200+ Crore"
    },
    {
        "id": 2,
        "title": "Sarkaru Vaari Paata",
        "year": 2022,
        "director": "Parasuram",
        "genre": "Action, Drama",
        "rating": 4.3,
        "poster": "https://via.placeholder.com/300x400/764ba2/ffffff?text=Sarkaru+Vaari+Paata",
        "description": "A bank loan officer fights against financial fraud and corruption.",
        "box_office": "₹160+ Crore"
    },
    {
        "id": 3,
        "title": "Maharshi",
        "year": 2019,
        "director": "Vamshi Paidipally",
        "genre": "Drama, Action",
        "rating": 4.7,
        "poster": "https://via.placeholder.com/300x400/667eea/ffffff?text=Maharshi",
        "description": "A successful businessman returns to his roots to help farmers.",
        "box_office": "₹180+ Crore"
    },
    {
        "id": 4,
        "title": "Bharat Ane Nenu",
        "year": 2018,
        "director": "Koratala Siva",
        "genre": "Political Drama",
        "rating": 4.8,
        "poster": "https://via.placeholder.com/300x400/764ba2/ffffff?text=Bharat+Ane+Nenu",
        "description": "A young man becomes Chief Minister and fights against corruption.",
        "box_office": "₹170+ Crore"
    },
    {
        "id": 5,
        "title": "Spyder",
        "year": 2017,
        "director": "A.R. Murugadoss",
        "genre": "Action, Thriller",
        "rating": 4.2,
        "poster": "https://via.placeholder.com/300x400/667eea/ffffff?text=Spyder",
        "description": "An intelligence officer tracks down a serial killer.",
        "box_office": "₹150+ Crore"
    },
    {
        "id": 6,
        "title": "Srimanthudu",
        "year": 2015,
        "director": "Koratala Siva",
        "genre": "Action, Drama",
        "rating": 4.6,
        "poster": "https://via.placeholder.com/300x400/764ba2/ffffff?text=Srimanthudu",
        "description": "A wealthy man adopts a village and transforms it.",
        "box_office": "₹190+ Crore"
    },
    {
        "id": 7,
        "title": "Dookudu",
        "year": 2011,
        "director": "Sreenu Vaitla",
        "genre": "Action, Comedy",
        "rating": 4.4,
        "poster": "https://via.placeholder.com/300x400/667eea/ffffff?text=Dookudu",
        "description": "A police officer balances his duty with family responsibilities.",
        "box_office": "₹160+ Crore"
    },
    {
        "id": 8,
        "title": "Pokiri",
        "year": 2006,
        "director": "Puri Jagannadh",
        "genre": "Action, Thriller",
        "rating": 4.9,
        "poster": "https://via.placeholder.com/300x400/764ba2/ffffff?text=Pokiri",
        "description": "An undercover agent infiltrates the underworld.",
        "box_office": "₹50+ Crore (All-time blockbuster)"
    },
    {
        "id": 9,
        "title": "Okkadu",
        "year": 2003,
        "director": "Gunasekhar",
        "genre": "Action, Romance",
        "rating": 4.8,
        "poster": "https://via.placeholder.com/300x400/667eea/ffffff?text=Okkadu",
        "description": "A kabaddi player saves a girl from a ruthless factionist.",
        "box_office": "₹40+ Crore"
    },
    {
        "id": 10,
        "title": "Murari",
        "year": 2001,
        "director": "Krishna Vamsi",
        "genre": "Romance, Drama",
        "rating": 4.5,
        "poster": "https://via.placeholder.com/300x400/764ba2/ffffff?text=Murari",
        "description": "A love story with family drama and emotions.",
        "box_office": "₹25+ Crore"
    }
]

@app.route('/')
def home():
    """Home page route"""
    return render_template('index.html', movies=movies)

@app.route('/movie/<int:movie_id>')
def movie_detail(movie_id):
    """Individual movie detail page"""
    movie = next((m for m in movies if m["id"] == movie_id), None)
    if movie:
        return render_template('movie_detail.html', movie=movie)
    else:
        return "Movie not found", 404

@app.route('/api/movies')
def api_movies():
    """API endpoint to get all movies as JSON"""
    return jsonify(movies)

@app.route('/api/movie/<int:movie_id>')
def api_movie(movie_id):
    """API endpoint to get a specific movie as JSON"""
    movie = next((m for m in movies if m["id"] == movie_id), None)
    if movie:
        return jsonify(movie)
    else:
        return jsonify({"error": "Movie not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
