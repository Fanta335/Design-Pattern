class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _heightM: number;
  private _weightKg: number;
  private _biologicalSex: string;

  constructor(firstName: string, lastName: string, age: number, heightM: number, weightKg: number, biologicalSex: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._heightM = heightM;
    this._weightKg = weightKg;
    this._biologicalSex = biologicalSex;
  }

  public get heightM() {
    return this._heightM;
  }

  public get weightKg() {
    return this._weightKg;
  }

  public get name() {
    return this._firstName + this._lastName;
  }

  public toString() {
    return this.name;
  }
}

class Example {
  public static calculateBMI(person: Person) {
    return person.weightKg / (person.heightM * person.heightM);
  }
}

let person = new Person("Thomas", "Danny", 23, 1.5, 65, "male");
console.log(Example.calculateBMI(person));
