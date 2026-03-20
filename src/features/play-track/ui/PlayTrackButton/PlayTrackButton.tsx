"use client"
import { Track } from "@/entities/track/model/types";
import { Button } from "@/shared/ui/Button";
import { usePlayTrack } from "../../model/usePlayTrack";

type PlayTrackButtonProps = {
  track: Track;
};

export const PlayTrackButton = ({track}: PlayTrackButtonProps) => {
    const { playOrPause, currentTrack, isPlaying } = usePlayTrack();

    const isCurrentTrack = currentTrack?.id === track.id;

    return (
        <Button onClick={() => playOrPause(track)} variant={isCurrentTrack && isPlaying ? 'secondary' : 'primary'}>
            {isCurrentTrack && isPlaying ? '⏸' : '▶'}
        </Button>
    )
}