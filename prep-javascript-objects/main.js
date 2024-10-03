const person = {
  firstName: 'Aaron',
  lastName: 'Kim',
  hobby: 'Wing Chun',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The persons's name is:", fullName + '.');

person.job = 'Student';

console.log("The person's current job is:", person.job + '.');

person['previousJob'] = 'Teacher';

console.log("The person's previous job is:", person['previousJob'] + '.');

console.log(person);
