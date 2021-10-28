import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';


const Button = styled(Link)`
margin-top: 2rem;
padding: 1rem;
background: rgba(44, 62, 80, 0.85);
width: 100%;
color: #fff;
display: block;
text-decoration: none;
text-transform: uppercase;
font-weight: 700;
text-align: center;


`;
const ArticlePreview = ({article}) => {
    const {contenido,imagen,titulo,slug} = article
    return (
        <div
        css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
        `}
        >
              <GatsbyImage image={imagen.gatsbyImageData} alt="inicio" />
          <div
            css={css`
            padding: 3rem;
            
            `}
          
          >
              <h3
              css={css`
              font-size: 3rem;
              
              `}
              >{titulo}</h3>
              <p>{contenido}</p>

              <Button to={slug}>Ver más</Button>

          </div>
        </div>
    )
}

export default ArticlePreview
