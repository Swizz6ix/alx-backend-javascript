interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFormHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return 'Working from home';
	}
	getCoffeeBreak(){
		return 'Getting a coffee break';
	}
	workDirectorTasks(){
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFormHome() {
		return 'Cannot work from home';
	}
	getCoffeeBreak() {
		return 'Cannot have a break';
	}
	workTeacherTasks() {
		return 'Getting to work';
	}
}

function createEmployee(salary: number|string){
	if (typeof salary === 'number' && salary < 500){
		return new Teacher;
	} else {
		return Director;
	}
}

function isDirector(employee: Teacher|Director): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher|Director) {
	if (isDirector(employee)){
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks());
	}
}

type Subjects = 'Math' | 'History'

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math'){
		return 'Teaching Math';
	} else if (todayClass === 'History'){
		return 'Teaching History';
	} else {
		return 'Invalid Subject';
	}
}