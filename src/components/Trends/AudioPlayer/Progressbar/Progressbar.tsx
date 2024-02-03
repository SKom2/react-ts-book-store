import React, { useEffect, useState } from 'react';
import { type ProgressBarTypes } from '@components/Trends/AudioPlayer/AudioPlayer.types';
import styles from './Progressbar.module.scss';

const Progressbar: React.FC<ProgressBarTypes> = ({
  duration,
  currentTime,
  onSeek,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);
    const newTime = (newProgress / 100) * duration;
    onSeek(newTime);
  };

  return (
    <div className={styles.progressbar}>
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        onChange={handleSliderChange}
        className={styles.progressbar__slider}
        style={{
          background: `linear-gradient(to right, #A97049FF 0%, #A97049FF calc(${progress}% - 5px), #F3E4CFFF calc(${progress}%), #F3E4CFFF 100%)`,
        }}
      />
    </div>
  );
};

export default Progressbar;
