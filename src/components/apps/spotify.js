import React from 'react'

export default function Spotify() {
    return (
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg" frameBorder="0" title="Spotify" className="h-full w-full"></iframe>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
