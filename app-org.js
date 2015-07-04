console.log($("h2").attr("reply"));
console.log($("p").attr("newtext"));
var person = 'Rob';
console.log(person);
stevesApp.logPerson();

var SpecialPerson = function(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

function logPerson() 
{
	var john = new SpecialPerson('John', 'Doe');
	console.log(john);

}

logPerson();

function logBetterPerson(betterperson)
{
	console.log(betterperson)

}

var rob = new SpecialPerson('Rob', 'Underwood');
logBetterPerson(rob);