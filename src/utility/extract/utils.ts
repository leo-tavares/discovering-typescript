import { BaseProject } from "./index.ts";

export const printProject = ({name, description, state}: BaseProject) => {
    console.log(`The project ${name} aims to ${description} and is ${state}`);
};
