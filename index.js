function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logTaskState : function() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed`);
    },
    completeTask : function() {
      this.complete = true;
    }
  }
  return task;
}




const task1 = newTask("Clean cat litter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "bruh");
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();
