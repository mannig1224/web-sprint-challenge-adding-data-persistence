// build your `Task` model here
const db = require('../../data/dbConfig');

const getTask = async () => {
    const data = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
    const result = data.map(task => {
        return ({
          ...task,
          task_completed: task.task_completed === 1 ? true : false 
        }
      )
      })
      return result;

}
const insert = (task) => {
    return db('tasks')
    .insert(task)
    .then((task_id) => {
      return db("tasks")
        .where("task_id", task_id)
        .first()
        .then((res) => {
          return { ...res, task_completed: !!res.task_completed};
        })
    })
  }
module.exports = {
    getTask,
    insert
}