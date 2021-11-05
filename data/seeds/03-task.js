exports.seed = function (knex, Promise) {
    return knex("tasks").insert([
        {task_description: "task description 1", task_notes: "this is notes 1", task_completed: true, project_id: 1},
        {task_description: "task description 2", task_notes: "this is notes 2", task_completed: false, project_id: 1},
        {task_description: "task description 3", task_notes: "this is notes 3", task_completed: true, project_id: 2},
        {task_description: "task description 4", task_notes: "this is notes 4", task_completed: true, project_id: 2}
        
    ])
}