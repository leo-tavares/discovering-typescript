type ProjectState = "active" | "disabled" | "backlog";

interface Project {
  name: string;
  description: string;
  state: ProjectState;
}

type Projects = Readonly<Project>[];

const myProjectsOnGithub: Projects = [
  {
    name: "discovering-typescript",
    description: "help people to understand key concepts of typescript",
    state: "active",
  },
  {
    name: "diet tracker",
    description: "Helping people to live healthier",
    state: "active",
  },
];

//error: TS2540 [ERROR]: Cannot assign to 'state' because it is a read-only property.
// myProjectsOnGithub[1].state = "backlog";

const printProject = (projects: Projects) => {
  projects.map(({ name, description, state }) =>
    console.log(`\nThe project ${name} aims to ${description} and is ${state}\n`)
  );
};

printProject(myProjectsOnGithub)