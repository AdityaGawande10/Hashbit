import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

// Movie Data (16 real movies with posters)
const movies = [
  {
    id: 1,
    title: "3 Idiots",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/3_idiots_poster.jpg/220px-3_idiots_poster.jpg",
    description: "Three engineering students learn life lessons while chasing excellence and friendship.",
  },
  {
    id: 2,
    title: "Dangal",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Dangal_Poster.jpg/220px-Dangal_Poster.jpg",
    description: "A former wrestler trains his daughters to become world-class wrestlers against all odds.",
  },
  {
    id: 3,
    title: "Zindagi Na Milegi Dobara",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Zindaginamilegidobara.jpg/220px-Zindaginamilegidobara.jpg",
    description: "Three friends go on a road trip in Spain that changes their lives forever.",
  },
  {
    id: 4,
    title: "Chak De! India",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Chakdeindia.jpg/220px-Chakdeindia.jpg",
    description: "A disgraced hockey player coaches the Indian women's team to international success.",
  },
  {
    id: 5,
    title: "Taare Zameen Par",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Taare_Zameen_Par.jpg/220px-Taare_Zameen_Par.jpg",
    description: "An 8-year-old dyslexic boy’s life changes after meeting an understanding art teacher.",
  },
  {
    id: 6,
    title: "Queen",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/QueenMoviePoster7thMarch.jpg/220px-QueenMoviePoster7thMarch.jpg",
    description: "A young woman embarks on a solo honeymoon trip to Europe after her fiancé leaves her.",
  },
  {
    id: 7,
    title: "Barfi!",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Barfi%21_poster.jpg/220px-Barfi%21_poster.jpg",
    description: "A heartwarming tale of a deaf-mute man and his bond with two women in his life.",
  },
  {
    id: 8,
    title: "PK",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/PK_poster.jpg/220px-PK_poster.jpg",
    description: "An alien questions religious dogmas while searching for his lost communication device on Earth.",
  },
];








// Page 1: Movie List
const MovieList = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px" }}>
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)} style={{ cursor: "pointer" }}>
          <img src={movie.image} alt={movie.title} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          <h4>{movie.title}</h4>
        </div>
      ))}
    </div>
  );
};

// Page 2: Movie Details
const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div style={{ padding: "20px" }}>Movie not found</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} style={{ width: "200px", borderRadius: "8px" }} />
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/book/${movie.id}`)}>Book Seat</button>
    </div>
  );
};

// Page 3: Booking Form
const BookingForm = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { ...form } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Book Your Seat</h2>
      <label>
        Name:{" "}
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <br /><br />
      <label>
        Email:{" "}
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <br /><br />
      <label>
        Mobile:{" "}
        <input
          type="tel"
          required
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
      </label>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

// Page 4: Confirmation
const Confirmation = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 1000000);

  if (!state) return <div style={{ padding: "20px" }}>Invalid access. No booking details.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> #{bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
};

// Main App Component
export default function MOVIE() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}
