namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
    firstName: string;
  }

  export class React {
    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact === undefined) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }

  export const react: React = new React();
}
