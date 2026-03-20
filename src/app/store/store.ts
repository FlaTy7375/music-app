import { configureStore } from "@reduxjs/toolkit";
import playbackReducer from "@/features/play-track/model/playbackSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      playback: playbackReducer,
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];