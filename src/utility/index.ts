import { printTask } from "./utils.ts";

interface Task {
  title: string;
  description: string;
}

const updateTask = (tasks: Task, optionalTaskProperties: Partial<Task>) => ({
  ...tasks,
  ...optionalTaskProperties,
});

const firstTask = {
  title: "go to the supermarket",
  description: "buy milk, bread and butter",
};

const updatedFistTask = updateTask(firstTask, {
  description: "beef and eggs",
});

printTask(firstTask);
//remember that we are not generating mutation on firstTask
printTask(updatedFistTask);