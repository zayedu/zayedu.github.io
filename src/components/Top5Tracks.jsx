import React, { useEffect, useState } from "react";

function Top5Tracks() {
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  const API_URL =
    "https://python-spotify-api-wrapper.onrender.com/short-term-top5-tracks";

  useEffect(() => {
    async function fetchTopTracks() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setTracks(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    fetchTopTracks();
  }, [API_URL]);

  // Handlers for cycling through tracks
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
  };

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (tracks.length === 0) {
    return <div>Loading top tracks...</div>;
  }

  const currentTrack = tracks[currentIndex];

  return (
    <div
      className="top5-tracks"
      style={{ textAlign: "left", margin: "20px auto" }}
    >
      <h4 style={{ marginBottom: "1rem" }}>
        What I&apos;m listening to this month...
      </h4>
      <div
        className="track-display"
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

        {/* Track Info */}
        <a
          className="track-info"
          href="https://open.spotify.com/user/4o1aldptfcp1zeflld13y1a67?si=25d41b342a834756x"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            width: "18rem",
            textAlign: "left",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={currentTrack.artwork_url}
            alt="Album cover"
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
              {currentTrack.track_name}
            </h5>
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: "#666",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {currentTrack.artists}
            </p>
          </div>
        </a>
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

export default Top5Tracks;
