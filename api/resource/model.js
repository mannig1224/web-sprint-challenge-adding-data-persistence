// build your `Resource` model here
// build your `Project` model here
const db = require('../../data/dbConfig');

const getResources = async () => {
    const data = await db('resources as r')
      .select('r.*')
    return data;

}

const getResourceById = (resource_id) => {
  return db("resources").where("resource_id", resource_id).first();
}

const insert = (resources) => {
  return db('resources')
  .insert(resources)
  .then((resource_id) => {
    return db("resources")
      .where("resource_id", resource_id)
      .first()
  })
}

module.exports = {
    getResources,
    getResourceById,
    insert
  }