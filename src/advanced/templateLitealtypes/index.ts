//Esse código funciona com o ts4.1+ e/ou deno 1.6+

type techs = "Javascript" | "Typescript" | "React Native" | "Firebase";

type ProjectTech = `Este projeto usa ${techs} como principal tecnologia`;

const projectIntro: ProjectTech =
  "Este projeto usa Typescript como principal tecnologia";

/*
Type '"Este projeto usa Flow"' is not assignable to type 
'"Este projeto usa Javascript como principal tecnologia"
| "Este projeto usa Typescript como principal tecnologia"
| "Este projeto usa React Native como principal tecnologia"
| "Este projeto usa Firebase como principal tecnologia"'.(2322)
*/
const projectIntro2: ProjectTech = "Este projeto usa Flow";
