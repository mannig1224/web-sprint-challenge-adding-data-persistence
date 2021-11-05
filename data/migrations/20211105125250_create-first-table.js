exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.text('project_name', 128)
            .notNullable()
        tbl.text('project_description', 128)
        tbl.boolean("project_completed")
            .defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.text('resource_name')
            .notNullable()
            .unique();
        tbl.text('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.text('task_description')
            .notNullable()
        tbl.text('task_notes')
        tbl.boolean('task_completed')
            .defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
    .createTable('project_resources', tbl => {
        tbl.increments("project_resources_id")
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project_id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.integer("resource_id")
            .unsigned()
            .notNullable()
            .references("resource_id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
    
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
