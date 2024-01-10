import { Subjects } from './js/subjects';

export const cpp: Subjects.Cpp = Subjects.cpp;

export const java: Subjects.Java = Subjects.java;

export const react: Subjects.React = Subjects.react;

export const cTeacher: Subjects.Teacher = { experienceTeachingC: 10 };

console.log('C++:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
