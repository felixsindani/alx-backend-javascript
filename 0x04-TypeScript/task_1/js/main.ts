/**
 * Teacher interface with following attributes:
 * firstName(string) and lastName(string).These attributes should only be 
 * modifiable when a Teacher is first initialized
 * fullTimeEmployee(boolean) this attribute should always be defined
 * yearsOfExperience(number) this attribute is optional
 * location(string) this attribute should always be defined
 */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  /**
   * index signature: Creating possibility to add any attribute to the Object like contract(boolean)
   * without specifying the name of the attribute
  */
  [index: string]: any;
}


/**
 * The Directors interface extends the Teacher interface,
 * inheriting all properties from Teacher and
 * adding an additional property specific to directors
 * named numberOfReports(number)
 */
export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17


/**
 *  function that prints teacher
 * @param firstName - firstname of the user
 * @param lastName - lastname of the user
 * @returns {string}
 */
export function printTeacher(firstName:string, lastName:string): string {
    return `${firstName[0]}. ${lastName}`
}


/**
 * Class named StudentClass:
 * The constructor accepts firstName(string) and lastName(string) arguments
 * The class has a method named workOnHomework that return the string Currently working
 * The class has a method named displayName. It returns the firstName of the student
 * The constructor of the class should be described through an Interface
 * The class should be described through an Interface
 */
export interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassMethod;
  }
  
  export interface StudentClassMethod {
    workOnHomework(): string;
    displayName(): string;
  }
  
  export class StudentClass implements StudentClassMethod {
    private _firstName!: string;
    private _lastName!: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
    /* implement workonhomework method that returns currently working */
    workOnHomework() {
      return 'Currently working';
    }
  
    displayName() {
      return this._firstName;
    }
  }
  
  export function createStudent(className: StudentClassConstructor, firstName: string, lastName: string): StudentClassMethod {
    return new className(firstName, lastName);
  }