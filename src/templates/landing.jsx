import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Block from "../components/Block/Block";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

function Landing({ data }) {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Block/>
    </Layout>
  );
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
