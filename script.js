//complete this code
class Person {}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
let person = new Person("John",25)
console.log(person.name)

person.age=30;
console.log(person.age)
let student = new Student("Alice",22)
student.study();

let teacher = new Teacher("Bob",40)
teacher.teach()


