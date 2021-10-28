import React from 'react';
import { graphql } from 'gatsby';
import Layout from './Layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import {css} from '@emotion/core';

export const query = graphql`

query($slug:String!){
    allDatoCmsArticle(filter:{slug:{eq:$slug}}){
          nodes{
            titulo
            contenido
            imagen{
                gatsbyImageData
            }
          }
    }
  }

`;

const ArticleTemplate = ({ data: { allDatoCmsArticle: { nodes } } }) => {

    const { titulo, contenido, imagen } = nodes[0];

    return (
        <Layout>
            <main
            css={css`
            margin: 0 auto;
            max-width: 1200px;
            width: 95%;
            
            `}
            >
                <h1
                css={css`
                text-align: center;
                margin-top: 4rem;
                
                `}
                
                >{titulo}</h1>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
            </main>
        </Layout>
    )
}

export default ArticleTemplate
