import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';


const ImageBackground = styled(BackgroundImage)`
height: 500px;
`;


const TextImage = styled.div`
background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63,.8));
color: #fff;
height: 100%;
display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
text-align: center;


h1{
    font-size: 4rem;
    margin: 0;
   @media(min-width: 992px){
       font-size: 5.8rem;

   }

}

p{
    font-size: 2rem;

    @media(min-width: 992px){
       font-size: 1.6rem;

   }
}



`;

const ImageB = () => {
    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq:"developer.jpg"}){
          sharp:childImageSharp {
             fluid{
               ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    
    `);

    return (
        <div>
            <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft"> 
             
             <TextImage>
                 <h1>Bienvenido a MyBlog</h1>
                 <p>Este es un Blog para desarrolladores</p>

             </TextImage>
            
             </ImageBackground>
        </div>
    )
}

export default ImageB
