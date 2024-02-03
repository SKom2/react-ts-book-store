import type React from 'react';

export interface AudioPlayerProps extends ProgressBarTypes, ControlsTypes {}

export interface ProgressBarTypes {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export interface ControlsTypes {
  isPlaying: boolean;
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export interface ImageButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}
