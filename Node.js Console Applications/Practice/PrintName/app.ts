interface IPerson
	{
		FirstName: string;
		LastName: string;
	}

function PrintName(person: IPerson)
	{
		return "Hello " + person.FirstName + " " + person.LastName;
	}

let user = { FirstName: "John", LastName: "Doe" }

console.log(PrintName(user));