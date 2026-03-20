"use client";

import { useState } from "react";
import { Track } from "@/entities/track/model/types";

export const usePlayTrack = () => {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playOrPause = (track: Track) => {
        setCurrentTrack(track);
        setIsPlaying(!isPlaying);

        if (isPlaying) {
            console.log("Играет: " + track.name)
        }
    }

    return {
        currentTrack,
        isPlaying,
        playOrPause
    }
}