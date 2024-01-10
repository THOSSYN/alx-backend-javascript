namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java {
    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (this.teacher.experienceTeachingJava? === 'undefined') {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.FirstName}`;
    }   

    export const java: Java = new Java();
}
