import React, { useEffect, useState } from "react";

function SpotifyNowPlaying() {
  const [trackInfo, setTrackInfo] = useState(null);
  const [error, setError] = useState(null);

  // 1) Replace this with a valid token or fetch it from your backend.
  const SPOTIFY_ACCESS_TOKEN =
    "BQDN8gfQkvkhNotBwCQjSG6BwdS4NE4nMIEkxSCpVDf6uXGj1hfBtGLYfeVzs1kmgJA5YiJ_6vTwNSwe5azME1FXKVf_8TPdVgz7ukiim9gFze_W36jtxF9nm0BHTyZn4MOXlF02cgCxQTjdflTFkOcR7KPu_9ybrbdtWfjdgPvGwQjcRQE2EfP8kBr-Um8kq3bcq726fs8Myjis7xC1GwxoCkPEd1mOb4CXnAPrxsGaB5nmVDnhNpGElc6LNmqQ1zwGcJOoN4TeN_lP5YmAuAvfQgL7b4eBg2WC6ZWeCIDTfWARgBa-wXFDZJBC65nlIqnaFXmF66wYALH8T8MWdiS9fsXi";

  useEffect(() => {
    async function fetchCurrentlyPlaying() {
      try {
        const res = await fetch(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${SPOTIFY_ACCESS_TOKEN}`,
            },
          }
        );

        // If the user is not playing anything or the session is private, this can be 204 No Content
        if (res.status === 204 || res.status === 202) {
          setTrackInfo(null); // Nothing is playing
          return;
        }

        if (!res.ok) {
          const errorData = await res.json();
          console.log(errorData);
          throw new Error(`Spotify API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // data.item holds the track info if something is playing
        if (!data.item) {
          setTrackInfo(null);
          return;
        }

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

    // Call it once on component mount
    fetchCurrentlyPlaying();
  }, [SPOTIFY_ACCESS_TOKEN]);

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
      {/* Album artwork */}
      <img
        src={trackInfo.albumArtUrl}
        alt="Album cover"
        style={{
          width: 80,
          height: 80,
          objectFit: "cover",
          marginRight: "1rem",
        }}
      />
      {/* Song + Artist */}
      <div>
        <h4 style={{ margin: 0 }}>{trackInfo.trackName}</h4>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>{trackInfo.artistNames}</p>
      </div>
    </div>
  );
}

export default SpotifyNowPlaying;
