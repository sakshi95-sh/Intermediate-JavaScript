// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

let oneTimeTasks = []
let monitoringTaskId = null;
let monitoringTaskIds = [];

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	let task ={ func, delay }
	oneTimeTasks.push(task);
	 console.log("One-time task added:",task);
}



// Task 3: Run One-Time Tasks Function
function runOneTimeTasks (){

oneTimeTasks.forEach((element,idx )=> {
		setTimeout(() =>
		{
			element.func()
			console.log('ADDING', idx+1)
		},element.delay)
	});

	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	oneTimeTasks.forEach((element,idx )=> {
	    const id =	setInterval(() =>
		{
			element.func()
			console.log('ADDING', idx+1)
		}, element.delay)
		    monitoringTaskIds.push(id);
		});

	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
}

// Task 5: Stop Monitoring Function
function stopMonitoring () {
  monitoringTaskIds.forEach(id => clearInterval(id));
  monitoringTaskIds = []; // Optional: reset to empty after stopping
	console.log("Monitoring stopped.");
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
}
	

	

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	let timeLeft = duration; 
  const countdownInterval = setInterval(function() { 
    console.log(timeLeft); 
    timeLeft--; 
    if (timeLeft < 0) {
      clearInterval(countdownInterval); 
      console.log("Liftoff!"); 
    }
  }, 1000); 
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	addOneTimeTask(() => console.log("Pre-Launch System Check..."), 1000);

  // 2. Countdown
  addOneTimeTask(() => console.log(" Task  1"), 3000);
  addOneTimeTask(() => console.log("Task  2"), 4000);
  addOneTimeTask(() => console.log("Task  3"), 5000);
  addOneTimeTask(() => console.log("Launch!"), 6000);

  // 3. Start Monitoring
  startMonitoring();

  // 4. Stop Monitoring after 12 seconds
  setTimeout(() => {
    stopMonitoring();
  }, 12000);

  // 5. Execute one-time tasks
  runOneTimeTasks();
}

scheduleMission(); // Starts the mission.
