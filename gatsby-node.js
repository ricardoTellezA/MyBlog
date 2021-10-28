exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
  query{
    allDatoCmsArticle{
          nodes{
            slug
          }
    }
  }
  
  `);

  // console.log(result.data.allDatoCmsArticle.nodes);

  if(result.errors) {
    reporter.panicOnBuild('No hubo resultados',result.errors);
    return;
  }           

  //TODO CORRECTO, CREAMOS LOS ARCHIVOS
  const articles = result.data.allDatoCmsArticle.nodes;
  articles.forEach(article => {
    actions.createPage({
      path: article.slug,
      component: require.resolve('./src/components/article.js'),
      context: {
        slug: article.slug,
      },
    });
  });



}
