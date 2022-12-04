// inheritance
class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' forgets to pay taxes.');
  }
}

let john = new Person('John Doe', 'green');
john.greet();

let angela = new Adult('Angela Yu', 'red');
angela.greet();
angela.payTaxes();
