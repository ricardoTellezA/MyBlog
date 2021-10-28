import React from 'react'
import { Global, css } from '@emotion/core'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import useSeo from '../hooks/useSeo'

const Layout = (props) => {
    const seo = useSeo();
    const {fallbackSeo:{description, title}} = seo;
    console.log(seo);
    return (

        <>


            <Global
                styles={css`
              html{
                font-size: 62.5%;
                box-sizing: border-box;
              }

              *, *:before, *:after {
                        box-sizing: inherit;
                    }
                  body {
                      font-size: 18px;
                      font-size: 1.8rem;
                      line-height: 1.5;
                      font-family: 'PT Sans', sans-serif;
                  }

                  h1, h2, h3{
                      margin: 0;
                      line-height: 1.5;
                  }

                  h1,h2{
                      font-family: 'Roboto', serif;
                  }


                  h3{
                      font-family: 'PT Sans', sans-serif;
                  }

                  ul{
                      list-style: none;
                      margin: 0;
                      padding: 0;
                  }
              
              
              
              `}

            />

            <Helmet>
                <title>{title}</title> 
                <meta name="description" conten={description}/>
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet"></link>


            </Helmet>
            <Header />
            {props.children}
            <Footer title={title} />

        </>
    )
}

export default Layout
