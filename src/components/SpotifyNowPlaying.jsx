import React, { useEffect, useState } from "react";

function SpotifyNowPlaying() {
  const [trackInfo, setTrackInfo] = useState(null);
  const [error, setError] = useState(null);

  // Your Render endpoint (no token needed on the client now)
  const API_URL =
    "https://python-spotify-api-wrapper.onrender.com/currently-playing";

  useEffect(() => {
    async function fetchCurrentlyPlaying() {
      try {
        // Call your Python API instead of Spotify directly
        const res = await fetch(API_URL);
        console.log(res);
        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // If the user isn't playing anything, or the JSON doesn't have an 'item'
        if (!data || !data.item) {
          setTrackInfo(null);
          return;
        }

        // Extract track name, artist names, and album art
        const trackName = data.item.name;
        const artistNames = data.item.artists
          .map((artist) => artist.name)
          .join(", ");
        const albumArtUrl = data.item.album.images?.[0]?.url || "";

        setTrackInfo({ trackName, artistNames, albumArtUrl });
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    // Fetch once on mount
    fetchCurrentlyPlaying();
  }, [API_URL]);

  // If there's an error retrieving data
  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  // If nothing is playing or trackInfo hasn't loaded yet
  if (!trackInfo) {
    return <div>No track is currently playing...</div>;
  }

  // Display the currently playing track info
  return (
    <div
      className="spotify-now-playing"
      style={{ display: "flex", alignItems: "center" }}
    >
      <img
        src={trackInfo.albumArtUrl}
        alt="Album cover"
        style={{
          width: 40,
          height: 40,
          objectFit: "cover",
          marginRight: "1rem",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div>
        <h4 style={{ margin: 0 }}>{trackInfo.trackName}</h4>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>{trackInfo.artistNames}</p>
      </div>
    </div>
  );
}

export default SpotifyNowPlaying;
