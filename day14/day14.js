// Activity 1 Class Definition

//Task1 Define a class Person with properties name and age and a method to return greeting message. Create an instance of the class and log the greeting message.
class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        this.firstName='R';
        this.lastName='G';
    }
    greet()
    {
        console.log(`Hello ${this.name} How are you?`);
    }
    ageupdate(age)
    {
        this.age=age;
        console.log('age updated');
    }
    static m()
    {
        console.log('Hi I am static');
    }
    getname()
    {
        console.log(this.firstName+this.lastName);
    }
    setfName(f)
    {
        this.firstName=f;
    }
    setlName(l)
    {
        this.lastName=l;
    }

}

const p=new Person('Raghvi',19);
p.greet();
//Hello Raghvi How are you?

//Task2 Add a method to the Person class that updates the age property and logs the updated age
p.ageupdate(20);
console.log(p.age);
// age updated
// 20

// Activity 2 Class Inheritance

//Task3 Define a class Student that extends Person class. Add a property studentId and a method to return the studentId. Create an Instance of Student class and log the student ID.
class Student extends Person
{
    static total=0;
    constructor(name,age,studentId)
    {
        super(name,age);
        this.studentId=studentId;
        Student.total++;
    }
    displayid()
    {
        console.log(this.studentId);
    }
    greet()
    {
        console.log('Hello there!');
    }
}

const s=new Student('Esha',17,1);
s.displayid();
//1

//Task4 Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
s.greet();
//Hello there!

// Activity 3 Static Methods and Properties

//Task5 Add a static method to the Person class that returns a greeting message. Call this static method without creating an instance of the class and log the message.
Person.m();
//Hi I am static

//Task6 Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
const s2=new Student;
console.log(Student.total);
//2

// Activity 4 Getters and Setters 

//Task7 Add a getter method to the Person class to return the full name (assume a firstName and lastName preperty). Create an instance of the class and log the message.
p.getname()
//RG

//Task8 Add a setter method to the Person class to update the name properties (firstName and lastName).Update the name using the setter and lof the fullName.
p.setfName('E');
p.setlName('F');
p.getname();
//EF

// Activity 5 Private Fields 

//Task9 Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance; //private variable
  
    constructor(initialBalance=0) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
      } else if (amount > this.#balance) {
        console.log('Insufficient funds.');
      } else {
        console.log('Withdrawal amount must be positive.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
//Task10 Test the deposit and withdraw methods, logging the balance after each operation.

const myAccount = new Account(100);
myAccount.deposit(50);  // Deposited: $50. New balance: $150.
myAccount.withdraw(20); // Withdrew: $20. New balance: $130.
console.log(myAccount.getBalance()); // 130
  
