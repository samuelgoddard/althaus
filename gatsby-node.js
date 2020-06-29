const createSubjects = require(`./gatsby/createSubjects`)
const createCourses = require(`./gatsby/createCourses`)

exports.createPages = async ({ actions, graphql }) => {
  await createSubjects({ actions, graphql })
  await createCourses({ actions, graphql })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}