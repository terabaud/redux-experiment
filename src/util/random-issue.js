import './array-pick';

function randomException() {
	return [
		'NullReference',
		'Monday',
		'NotEnoughMotivation',
		'BufferOverflow'
	].pick() + "Exception";
}

function randomThing() {
	return [
		'Main',
		'Mouse',
		'Keyboard',
		'Data',
		'Client',
		'File',
		'Socket',
	].pick() + 
	['', 'Binding', 'Event', 'Function', 'Host', 'Window'].pick() + [
		'Server',
		'Listener',
		'Adapter',
		'Factory',
		'Loop',
		'Dispatcher'
	].pick();
}

function deliciousThing() {
	return ['Oreos', 'coffee', 'ice cream', 'pizza'].pick();
}

function randomIssue(length = 1) {
	return randomThing() + [
		' throws ' + randomException(),
		' fails to connect to ' + randomThing(),
		' just refuses to work',
		' causes ' + randomThing() + ' to crash'
	].pick() + (length > 1 ? (
		[' because ', '. As a result of this, ', '. This is why ', '. Furthermore, ', '. Also, '].pick() + randomIssue(length-1)) :[
		' on mondays.',
		' when you click the red button.',
		' when you try to save.',
		' because of ' + randomException() + '.',
		' on Windows 95.',
		' because terabaud is out of ' + deliciousThing() + '.'
	].pick());
}

function randomUser() {
	return ["abigail", "baldrick","caitlin","daniel", "enola", "fred", "grace", "homer", "irene", "john", "kelly", "luke", "marge", "nate", "olivia", "vera"].pick() +
		   ["_","."].pick() +
		   ["miller", "smith", "baker", "doe", "simpson", "wood", "stone", "riker"].pick();
}

export default function createBug(id) {
	return {
		id: id,
		title: randomIssue(), 
		state: "new", 
		assignedTo: randomUser(), 
		submitDate: new Date(), 
		description: randomIssue(10)
	};
}