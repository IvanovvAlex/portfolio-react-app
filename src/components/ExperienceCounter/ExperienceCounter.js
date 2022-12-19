import { useState, useEffect } from 'react';

function Counter() {
  // Set the start date
  const startDate = new Date('2022-12-10T00:00:00');

  // Set the initial state for the counter
  const [counter, setCounter] = useState(0);

  // Update the counter every 1000 milliseconds (1 second)
  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current date
      const currentDate = new Date();

      // Calculate the time elapsed in milliseconds
      const elapsedTime = currentDate - startDate;

      // Calculate the number of seconds, minutes, and hours elapsed

      // Convert the elapsed time to seconds
      var seconds = Math.floor(elapsedTime / 1000);
      
      // Calculate the number of minutes elapsed
      var minutes = Math.floor(seconds / 60);
      
      // Calculate the number of hours elapsed
      var hours = Math.floor(minutes / 60);
      
      // Calculate the number of days elapsed
      var days = Math.floor(hours / 24);
      
      // Calculate the number of weeks elapsed
      var weeks = Math.floor(days / 7);
      
      // Calculate the number of months elapsed
      var months = Math.floor(days / 30.4);
      
      // Calculate the number of years elapsed
      var years = Math.floor(months / 12);
      

      // Update the counter with the elapsed time
      setCounter(years + ':' + months + ':' + weeks + ':' + days + ':' + hours + ':' + minutes + ':' + seconds);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Time elapsed: {counter}</p>
    </div>
  );
}

export default Counter;
