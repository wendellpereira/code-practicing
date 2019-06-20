class Person {
  constructor({name, nationality, bthYear}) {
    this.name = name;
    this.nationality = nationality;
    this.age = new Date
    this.age = this.age.getFullYear() - bthYear;
  }
}

class Professional extends Person{
  constructor({name, nationality, bthYear, profession, yearsExperience}) {
    super({name: name, bthYear: bthYear, nationality: nationality});
    this.profession = profession;
    this.yearsExperience = yearsExperience;
  }
}

console.log(new Professional({
  name : 'Wendell',
  bthYear: 1976,
  yearsExperience: 20,
  nationality: 'Brazilian',
  profession: 'Developer'}));
