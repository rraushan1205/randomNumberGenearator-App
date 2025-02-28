import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const AnimatedCounter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalTime = 30; 
    const duration = 1000; 
    let elapsedTime = 0;
    const interval = setInterval(() => {
      elapsedTime += intervalTime;
      if (elapsedTime < duration) {
        setCount(Math.floor(Math.random() * end));
      } else {
        clearInterval(interval);
        setCount(end); 
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <View>
      <Text style={{ fontSize: 160, fontWeight: 'semibold', fontFamily: 'cochin' }}>{count}</Text>
    </View>
  );
};

export default AnimatedCounter;
