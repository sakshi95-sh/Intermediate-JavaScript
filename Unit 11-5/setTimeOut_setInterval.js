  let count = 0;
    const intervalId = setInterval(() => {
      console.log("This will run every second:", ++count);
      if (count >= 5) {
        clearInterval(intervalId); // Stops the interval after 5 executions
      }
    }, 1000);