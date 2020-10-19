import { printProject } from "./utils.ts";

export type ProjectState = "active" | "disabled" | "backlog";

export interface BaseProject {
  name: string;
  description: string;
  state: ProjectState;
}

type Id = string;

interface Project {
  id: Id;
  name: string;
  description: string;
  state: ProjectState;
  subProjects: Array<Id>; // alternativamente => Id[]
  members: Array<Id>; // alternativamente => Id[]
}

//type SharedKeys = "name" | "description" | "state"
type SharedKeys = Extract<keyof Project, keyof BaseProject>;

/**
 * type SharedProjectData = {
 *  name: string;
 *  description: string;
 *  state: ProjectState;
 * }
 */
type SharedProjectData = {
  [k in SharedKeys]: Project[k];
};

/**
 * Alternativamente SharedProjectData pode ser escrito deste forma
 * type SharedProjectData<T, U> =[K in Extract<keyof T, keyof U>]: T[K];
 */

const projectSummary: SharedProjectData = {
  name: "discovering-typescript",
  state: "active",
  description: "help people to understand key concepts of typescript",
};

printProject(projectSummary);
