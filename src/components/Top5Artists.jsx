import { useEffect, useState } from "react";

function Top5Artists() {
  const [artists, setArtists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  const API_URL =
    "https://python-spotify-api-wrapper.onrender.com/top-artists-short-term";

  useEffect(() => {
    async function fetchTopArtists() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setArtists(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    fetchTopArtists();
  }, [API_URL]);

  // Handlers for cycling through artists
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + artists.length) % artists.length
    );
  };

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (artists.length === 0) {
    return <div>Loading top artists...</div>;
  }

  const currentArtist = artists[currentIndex];

  return (
    <div
      className="top5-artists"
      style={{ textAlign: "left", margin: "20px auto" }}
    >
      <h4 style={{ marginBottom: "1rem" }}>My top artists this month...</h4>
      <div
        className="artist-display"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {/* Minimal Left Arrow */}
        <button
          onClick={handlePrevious}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.25rem",
            color: "#555",
          }}
        >
          &#9664;
        </button>

        {/* Artist Info */}
        <div
          className="artist-info"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            width: "18rem",
            textAlign: "left",
          }}
        >
          <img
            src={currentArtist.artwork_url}
            alt="Artist cover"
            style={{
              width: 40,
              height: 40,
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <div>
            <h5
              style={{
                margin: 0,
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentArtist.artist_name}
            </h5>
          </div>
        </div>
        <button
          onClick={handleNext}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.25rem",
            color: "#555",
          }}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
}

export default Top5Artists;
