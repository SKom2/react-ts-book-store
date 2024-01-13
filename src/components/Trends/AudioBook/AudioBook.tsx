import React, { useEffect, useState } from 'react';
import Cover from '@images/AudioBook.jpg';
import AudioPlayer from '@components/Trends/AudioPlayer/AudioPlayer';
import audioBook from '@assets/audio/QueueItemSource.mp3';
import styles from './AudioBook.module.scss';

const AudioBook: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioBook));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };

    const interval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [audio]);

  const handlePlayClick = (): Promise<void> | void => {
    if (!isPlaying) {
      setIsPlaying(true);
      return audio.play();
    }
    setIsPlaying(false);
    audio.pause();
    return undefined;
  };

  const skipBackward = (): void => {
    audio.currentTime = Math.max(0, audio.currentTime - 15);
  };

  const skipForward = (): void => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 15);
  };

  const handleSeek = (time: number): void => {
    audio.currentTime = time;
  };

  return (
    <div className={styles.audioBook}>
      <div
        className={`${styles.audioBook__cover} ${
          isPlaying ? styles.playing : ''
        }`}
      >
        <img src={Cover} alt="Audio Book Cover" />
        <span />
      </div>
      <AudioPlayer
        currentTime={currentTime}
        duration={duration}
        onPlayClick={handlePlayClick}
        onNextClick={skipForward}
        onPrevClick={skipBackward}
        isPlaying={isPlaying}
        onSeek={handleSeek}
      />
    </div>
  );
};

export default AudioBook;
