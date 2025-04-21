const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

// function getAccountById (id)
// {
// 	for (const account of accounts)
// 	{
// 		if (account.id == id)
// 		{
// 			return account;
// 		}
// 	}
// }

function getAccountById (id)
{
	for (const account of accounts)
	{
		if (account.id === id)
		{
			return account;
		}
	}
	throw new Error("No account found with given ID");
}

// function createAccount (newAccountId, newAccountOwner)
// {
// 	accounts.push(
// 		{
// 			id: newAccountId,
// 			owner: newAccountOwner,
// 			balance: "0"
// 		}
// 	);
// }

function createAccount (newAccountId, newAccountOwner)
{
	if (getAccountById(newAccountId) !== Error)
	{
		throw new Error("Already Existing Account ID");
	}
	if (newAccountId < 0 && typeof newAccountOwner !== "number")
	{
		throw new Error("Account Number should be positive Integer");
	}
	else if (typeof newAccountOwner !== "string" || newAccountOwner.length === 0 || newAccountOwner.trim().length === 0)
	{
		throw new Error("Account Owner name should be non empty String");
	}
	else
		accounts.push(
			{
				id: newAccountId,
				owner: newAccountOwner,
				balance: "0"
			}
		);
	return getAccountById(newAccountId);
}


// function depositMoney (accountId, amount)
// {
// 	const account = getAccountById(accountId);

// 	if (!account)
// 	{
// 		throw new Error("Account not found");
// 	}

// 	account.balance += amount;
// }

function depositMoney(accountId, amount)
{
	const account = getAccountById(accountId);
	if (amount <= 0)
	{
		throw new Error("Amount should be positive Integer and Greater than 0");
	}
	if (!Number.isFinite(amount))
	{
		throw new Error("Amount can't be infinite and must be Number ");
	}
else
		account.balance += amount;
	
	return getAccountById(accountId);
}

// function withdrawMoney (accountId, amount)
// {
// 	const account = getAccountById(accountId);

// 	if (!account)
// 	{
// 		throw new Error("Account not found.");
// 	}

// 	if (!Number.isFinite(amount))
// 	{
// 		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
// 	}

// 	account.balance -= amount;
// }


function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

		if (amount <= 0)
	{
		throw new Error("Amount should be positive Integer and Greater than 0");
	}

	if (!Number.isFinite(amount))
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}
	if ((account.balance -= amount) < 0) {
		console.log("Printing", account.balance)
		console.log("Printing", amount)
		throw new Error("You don't have enough balance") 
	}
	else
	console.log("Current Balance",account.balance -= amount);
	return getAccountById(accountId);
}

// function transferMoney (fromAccountId, toAccountId, amount)
// {
// 	const fromAccount = getAccountById(fromAccountId);
// 	const toAccount = getAccountById(toAccountId);

// 	if (!fromAccount)
// 	{
// 		throw new Error("Source account not found.");
// 	}

// 	if (!Number.isFinite(amount) || amount < 0)
// 	{
// 		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
// 	}

// 	toAccount.balance += amount;
// }

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (fromAccount === Error)
	{
		console.log("No account found for fromAccount")
	}
	if (toAccount === Error)
	{
		console.log("No account found for toAccount")
	}

	if (!Number.isFinite(amount) || amount < 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}
	if (withdrawMoney(fromAccountId, amount) === Error)
	{
		throw new Error("Issue: Can't tranfer money now");
	}

	toAccount.balance += amount;
	fromAccountId.balance -= amount;

	return console.log("Source---", getAccountById(fromAccountId)),
		console.log("Destination---", getAccountById(toAccountId));
	
}

/*
Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
