"use client";
import { mockTracks } from "@/entities/track/model/mock";
import { TrackCard } from "@/entities/track/ui/TrackCard";
import { PlayTrackButton } from "@/features/play-track/ui/PlayTrackButton/PlayTrackButton";
import { StyledHomePage } from "./style"

export const HomePage = () => {
    return (
        <StyledHomePage>
            <h1 className="home-title">Музыкальное веб-приложение</h1>
            <div className="tracks-container">
                {mockTracks.map((track) => (
                    <div key={track.id}>
                        <TrackCard track={track}>
                            <PlayTrackButton track={track}/>
                        </TrackCard>
                    </div>
                ))}
            </div>
        </StyledHomePage>
    )
}