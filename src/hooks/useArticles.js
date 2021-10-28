import { graphql, useStaticQuery } from "gatsby";

const useArticles = () => {
    const data = useStaticQuery(graphql`
    query{
        allDatoCmsArticle{
          nodes{
            titulo
            id
            slug
            contenido
            imagen{
                gatsbyImageData
            }
          }
        }
      }
    
    
    `);
    return data.allDatoCmsArticle.nodes.map(article => ({
        titulo: article.titulo,
        id: article.id,
        slug: article.slug,
        contenido: article.contenido,
        imagen: article.imagen
    }));
   
}

export default useArticles;