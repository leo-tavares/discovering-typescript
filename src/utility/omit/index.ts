type State = "active" | "disabled";

type Project = {
  name: string;
  description: string;
  state: State;
};

type ProjectPreview = Omit<Project, "description">;

const project: ProjectPreview = {
  name: "discovering-typescript",
  state: "active",
};

//Pick<Project, "name" | "state">
project;

/* @signature
 * type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
 */
