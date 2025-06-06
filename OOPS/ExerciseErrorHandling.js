function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
  {

    console.log("The operation is completed successfully!");
	}
	else
	{
    throw new Error("The operation is failed mysteriously!");
  }
}
const totalNumberOfOperation = 20;
let dayEarned = 0;
for (let i = 1; i <= totalNumberOfOperation;i++) {
  try {
    mysteryOperation();
    console.log("You received 13 days of vacation.");
      dayEarned+= 13;
  }
  catch(Error){
    console.error("You receive one day for your motivation.");
    dayEarned +=1;
  }
  finally {
    console.log("You receive three days for your attendance.");
    dayEarned +=3;
  }
  console.log("Total Days Earned --->", dayEarned);
}
