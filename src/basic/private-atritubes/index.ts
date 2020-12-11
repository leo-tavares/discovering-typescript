class Project {
  //   inicialização de menbros clássica
  //   private _name: string;
  //   constructor(name: string) {
  //     this._name = name;
  //   }
  //shorthand para inicializar/declarar membros
  constructor(private _name: string) {}

  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
}

const myProject = new Project("Anything");
console.log(myProject.name); //Anything
myProject.name = "cs101";
console.log(myProject.name); //cs101

export default Project;
