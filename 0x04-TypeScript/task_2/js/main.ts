/**
 *  Advanced types Part 1
 */

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/** Creating functions specific to employees
 * function isDirector:
 * it accepts employee as an argument
 * it will be used as a type predicate and if the employee is a director
 */
export function isDirector(employee: Director | Teacher) {
  return employee instanceof Director;
}


/**
 * function executeWork:
 * it accepts employee as an argument
 * if the employee is a Director, it will call workDirectorTasks
 * if the employee is a Teacher, it will call workTeacherTasks
 */
export function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

/**
 * function named teachClass:
 * it takes todayClass as an argument
 * it will return the string Teaching Math if todayClass is Math
 * it will return the string Teaching History if todayClass is History
 */
export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
