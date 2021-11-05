exports.seed = function (knex, Promise) {
    return knex("resources").insert([
        {resource_name: "Resource 1", resource_description: "this is project 1"},
        {resource_name: "Resource 2", resource_description: "this is project 2"},
        {resource_name: "Resource 3", resource_description: "this is project 3"}
        
    ])
}