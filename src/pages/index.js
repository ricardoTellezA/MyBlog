import * as React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import ImageB from "../components/ImageB";
import ContentInicio from "../components/ContentInicio";
import useArticles from "../hooks/useArticles";
import ArticlePreview from "../components/ArticlePreview";



const ListArticles = styled.ul`
max-width: 1200px;
width: 95%;
margin: 4rem auto 0 auto;


@media (min-width: 768px) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
}

`;

const IndexPage = () => {
  const articles = useArticles();
  // console.log(articles);
  return (

    <Layout>
      <ImageB />
      <ContentInicio />

      <h2
        css={css`
      text-align: center;
      margin-top: 5rem;
      font-size: 3rem;
      
      `}
      >Mis Posts</h2>

      <ListArticles>
        {articles.map(article => (
          <ArticlePreview article={article} key={article.id} />
        ))}
      </ListArticles>



    </Layout>
  )
}

export default IndexPage
