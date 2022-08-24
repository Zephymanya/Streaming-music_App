import React, { useEffect } from "react";
import { useContext, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { dataContext } from "./DataContext";

// const spotify = new SpotifyPlayer();

export default function PlayBack() {
  const { playLecture, uri } = useContext(dataContext);
  return (
    <div className="playback_content">
      <SpotifyPlayer uris={uri} play={playLecture} />
    </div>
  );
}
