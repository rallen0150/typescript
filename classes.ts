interface UserInterface {
    name: String;
    email: String;
    age: Number;

    register();
    payInvoice();
}

class User implements UserInterface {
    name: String;
    email: String;
    age: Number;

    constructor(name: String, email: String, age: Number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created '+this.name);
    }

    register() {
        console.log(this.email+" is now registered")
    }

    payInvoice() {
        console.log(this.name+" paid invoice");
    }
}

// let john = new User("John Doe", "jdoe@gmail.com", 34);
// john.register();

class Member extends User {
    id: Number;

    constructor(id: number,name: String, email: String, age: Number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

let mike: User = new Member(1, "Mike Jones", "mjones@yahoo.com", 22);
mike.payInvoice();