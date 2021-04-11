"use strict";
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("only string");
    }
    this._name = newName;
  }
  get surname() {
    return this._surname;
  }
  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw new TypeError("only string");
    }
    this._surname = newSurname;
  }
}
//=========================================================>
class Student extends User {
  constructor(name, surname, yearOfAdmission) {
    super(name, surname);
    this.yearOfAdmission = yearOfAdmission;
  }
  get course() {
    if (typeof this.yearOfAdmission !== "number") {
      throw new TypeError("Only Number");
    }
    let nowYear = new Date().getFullYear();
    let corse = nowYear - this.yearOfAdmission;
    if (corse > 5) {
      return `Закончил учёбу ${corse} лет назад`;
    }
    return `${corse} Курс`;
  }
}
const student1 = new Student("Andy", "Faker", 2018);
