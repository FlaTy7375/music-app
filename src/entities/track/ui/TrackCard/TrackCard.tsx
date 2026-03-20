"use client";

import React from "react";
import Image from "next/image";
import { Track } from "../../model/types";
import { StyledTrackCard } from "./style";

type TrackCardProps = {
    track: Track;
    children?: React.ReactNode;
}

export const TrackCard = ({track, children}: TrackCardProps) => {
    return (
    <StyledTrackCard>
        <Image 
            src={track.cover} 
            alt={track.name} 
            width={56} 
            height={56} 
        />
        <div className="track-container">
            <div className="track-info">
                <h3>{track.name}</h3>
                <p>{track.author}</p>
            </div>
            {children}
        </div>
    </StyledTrackCard>)
}