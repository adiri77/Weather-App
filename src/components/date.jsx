import React, { useState, useEffect } from 'react';

const DateTimeComponent = ({ mode }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const formattedDateTime = `${dateTime.getFullYear()}-${formatTime(dateTime.getMonth() + 1)}-${formatTime(dateTime.getDate())} ${formatTime(dateTime.getHours())}:${formatTime(dateTime.getMinutes())}:${formatTime(dateTime.getSeconds())}`;

  // Define styles
  const textColor = mode === 'dark' ? 'white' : 'black';

  const styles = {
    text: {
      color: textColor,
      fontWeight: 'bold',
    },
  };

  return (
    <div>
      <p style={styles.text}>Current Date and Time:</p>
      <p style={styles.text}>{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeComponent;
