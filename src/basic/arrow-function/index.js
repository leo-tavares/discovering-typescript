function addOne(num1) {
  return num1 + 1;
}

const addOne = num1 => num1 + 1;

function sum(num1, num2) {
  return num1 + num2;
}

const sum = (num1, num2) => num1 + num2;

//return an object literal
const updateTask = (tasks, optionalTaskProperties) => ({
  ...tasks,
  ...optionalTaskProperties,
});

function updateTask(tasks, optionalTaskProperties) {
    return {
        ...tasks,
        ...optionalTaskProperties
    }
}