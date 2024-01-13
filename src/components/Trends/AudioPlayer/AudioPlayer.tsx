import React from 'react';
import Progressbar from '@components/Trends/AudioPlayer/Progressbar/Progressbar';
import Controls from '@components/Trends/AudioPlayer/Controls/Controls';
import { type AudioPlayerProps } from '@components/Trends/AudioPlayer/AudioPlayer.types';
import styles from './AudioPlayer.module.scss';

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  onPlayClick,
  isPlaying,
  onNextClick,
  onPrevClick,
  currentTime,
  duration,
  onSeek,
}) => {
  return (
    <div className={styles.player}>
      <Progressbar
        currentTime={currentTime}
        duration={duration}
        onSeek={onSeek}
      />
      <Controls
        isPlaying={isPlaying}
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
        onPlayClick={onPlayClick}
      />
    </div>
  );
};

export default AudioPlayer;
