// 19. Classes
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    display(){
        console.log(this.name,this.age);
    }
}

let p1 = new Person("Tushar",21);
p1.display();

//output: Tushar 21