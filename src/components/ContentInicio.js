import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';



const TextInicio = styled.div`
padding-top: 4rem;
max-width: 1200px;
width: 95%;
margin: 0 auto;



@media (min-width: 1366px){
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
}

p{
    line-height: 2;
    margin-top: 2rem;
}

`;

const ContentInicio = () => {
    const info = useStaticQuery(graphql`
    
    query {
        allDatoCmsPagina(filter:{slug:{eq:"inicio"}}){
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

    //    console.log(info.allDatoCmsPagina.nodes[0]);

    const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0];
    return (
        <>

            <h2
                css={css`
                 text-align: center;
                 font-size: 4rem;
                 margin-top: 4rem;
            
            `}
            >{titulo}</h2>
            <TextInicio>
                <p>{contenido}</p>
                <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
            </TextInicio>

        </>
    )
}

export default ContentInicio
