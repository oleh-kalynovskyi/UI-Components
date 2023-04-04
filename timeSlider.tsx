import { Slider, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const timeRegex = /^\d{0,2}(:\d{0,2}){0,1}$/

export default function TimeSlider() {
  const classes = useStyles()

  const [startTime, setStartTime] = useState<any>('06:00');
  const [endTime, setEndTime] = useState<any>('18:00');

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      const timeS = sliderChange(newValue[0])
      setStartTime(timeS);
    } else {
      const timeE = sliderChange(newValue[1])
      setEndTime(timeE);
    }
  };

  const sliderChange = (int: number): string => {
    const hours = Math.floor(int / 60);
    const minutes = int % 60;
    const displayHours = hours < 10 ? `0${hours}` : hours.toString();
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedTime = `${displayHours}:${displayMinutes}`;

    return formattedTime
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const timeArr = inputValue.split('-');
    let [start, end] = timeArr

    if (end?.length === 2 && endTime?.length < end?.length) {
      end += ":";
    }
    if (timeRegex.test(end)) {    
      setEndTime(end);
    }

    if (start?.length === 2 && startTime?.length < start?.length) {
      start += ":";
    }
    if (timeRegex.test(start)) {    
      setStartTime(start);
    }
  };

  return (
    <Box className={classes.sliderWrapper}>
      <Slider
        min={0}
        max={1439}
        className={classes.slider}
        value={[timeToSliderValue(startTime), timeToSliderValue(endTime)]}
        onChange={handleSliderChange}
        disableSwap
        name='timeToDestination'
      />
      <TextField
        value={`${startTime}-${endTime}`}
        onChange={handleChange}
        name='timeToDestination'
        className={classes.input}
        id="outlined-basic"
        size="small"
        variant="outlined"
        inputProps={{
          maxLength: 11,
        }}
      />
    </Box>
  )
}

function timeToSliderValue(time: string): number {
  const timeParts = time.split(':');
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  return hours * 60 + minutes;
}

const useStyles = makeStyles({
  sliderWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  slider: {
    '& .MuiSlider-rail': {
      color: 'grey',
      height: 4,
    },
    '& .MuiSlider-thumb': {
      color: 'white',
      border: `1px solid black`,
      width: 16,
      height: 16,
    },
    '& .MuiSlider-track': {
      color: black,
    },
  },
  input: {
    '& input[type=text]': {
      padding: "4px 5px",
    },
  },
})
