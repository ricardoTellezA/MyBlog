import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';



const Content = styled.main`
padding: 4rem;
max-width: 1200px;
width: 95%;
margin: 0 auto;

@media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
}

p{
line-height: 2;
margin-top: 2rem;
}





`;
const ContentAbout = () => {
    const result = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter:{slug:{eq:"sobre"}}){
           nodes{
             titulo
            contenido
            imagen{
                gatsbyImageData
            }
          }
        }
      }
    
    
    `);

    const { titulo, contenido, imagen } = result.allDatoCmsPagina.nodes[0];
    return (
        <>
            <h2
            css={css`
            margin-top: 4rem;
            text-align: center;
            font-size: 4rem;

            
            `}
            
            >{titulo}</h2>
            <Content>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
            </Content>

        </>
    )
}

export default ContentAbout
