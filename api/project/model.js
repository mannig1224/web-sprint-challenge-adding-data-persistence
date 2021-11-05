// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjects = async () => {
    const data = await db('projects as p')
      .select('p.*')

    const result = data.map(project => {
      return ({
        ...project,
        project_completed: project.project_completed === 1 ? true : false 
      }
    )
    })
    return result;

}

const getProjectById = (project_id) => {
  return db("projects").where("project_id", project_id).first();
}

const insert = (project) => {
  return db('projects')
  .insert(project)
  .then((project_id) => {
    return db("projects")
      .where("project_id", project_id)
      .first()
      .then((res) => {
        return { ...res, project_completed: !!project.project_completed};
      })
  })
}

module.exports = {
    getProjects,
    getProjectById,
    insert
  }