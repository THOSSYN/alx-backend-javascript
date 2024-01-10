interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeExperience: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow additional dynamic properties
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeExperience: true,
  yearsOfExperience: 5,
  location: "City",
  contract: true, // Additional dynamic property
};

interface Directors extends Teacher {
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

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

printTeacher("John", "Doe");

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());
