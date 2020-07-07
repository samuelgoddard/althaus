const createSubjects = require(`./gatsby/createSubjects`)
const createCourses = require(`./gatsby/createCourses`)
const createResources = require(`./gatsby/createResources`)
const createCareers = require(`./gatsby/createCareers`)
const createResourceCategories = require(`./gatsby/createResourceCategories`)

exports.createPages = async ({ actions, graphql }) => {
  await createSubjects({ actions, graphql })
  await createCourses({ actions, graphql })
  await createResources({ actions, graphql })
  await createCareers({ actions, graphql })
  await createResourceCategories({ actions, graphql })
}