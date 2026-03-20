import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '@/entities/track/model/types';

interface PlaybackState {
    track: Track | null;
    isPlaying: boolean;
}

const initialState: PlaybackState = {
  track: null,
  isPlaying: false,
};

const playbackSlice = createSlice({
    name: 'playback',
    initialState,
    reducers: {
        playTrack: (state, action: PayloadAction<Track>) => {
            state.track = action.payload;
            state.isPlaying = true;
        },

        pauseTrack: (state) => {
            state.isPlaying = false;
        },

        toggleTrack: (state, action: PayloadAction<Track>) => {
            if (state.track?.id === action.payload.id && state.isPlaying) {
                state.isPlaying = false;
            } else {
                state.track = action.payload;
                state.isPlaying = true;
            }
        },

        stopTrack: (state) => {
            state.isPlaying = false;
            state.track = null;
        }
    }
})

export const { playTrack, pauseTrack, toggleTrack, stopTrack } = playbackSlice.actions;
export default playbackSlice.reducer;