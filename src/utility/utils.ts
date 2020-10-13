interface Task {
  title: string;
  description: string;
}
export const printTask = (task: Task) => {
  console.log(`\n${task.title}\n${task.description}\n`);
};
