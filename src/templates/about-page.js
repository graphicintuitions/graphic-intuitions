import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Cell, Container, Grid } from "../css/theme";
import aboutImg from "../img/about-us.svg";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container>
      <Grid style={{ marginBottom: "200px" }}>
        <Cell width={6}>
          <h1>
            {title}
          </h1>
          <PageContent className="content" content={content}/>
        </Cell>
        <Cell width={4} left={8}>
          <img src={aboutImg} alt={"GI building"} className={"img-responsive"}/>
        </Cell>
      </Grid>
      <Grid>
        <Cell width={8} left={3} style={{marginBottom: "40px"}}>
          <Grid>
            <Cell width={12}>
              <h2>Our Team</h2>
            </Cell>
            
            <Cell width={4}>
              <img src={"https://picsum.photos/1000/1000/?image=1062"} alt={"person"} className={"img-responsive"}/>
            </Cell>
            <Cell width={8}>
              <h3>Paul Pugly - Lead Developer</h3>
              <p>We are a full-service digital marketing agency focused on helping you grow your business. We understand that you have the best knowledge of your business, and that without understanding that business ourselves we cannot provide the service that you deserve. It is only by working directly with you that can we create original, captivating and profitable digital marketing strategies and marketing materials to help increase your business, and in turn your profit.</p>
            </Cell>

            <Cell width={4}>
              <img src={"https://picsum.photos/1000/1000/?image=1025"} alt={"person"} className={"img-responsive"}/>
            </Cell>
            <Cell width={8}>
              <h3>Paul Pugly - Lead Developer</h3>
              <p>We are a full-service digital marketing agency focused on helping you grow your business. We understand that you have the best knowledge of your business, and that without understanding that business ourselves we cannot provide the service that you deserve. It is only by working directly with you that can we create original, captivating and profitable digital marketing strategies and marketing materials to help increase your business, and in turn your profit.</p>
            </Cell>

            <Cell width={4}>
              <img src={"https://picsum.photos/1000/1000/?image=1062"} alt={"person"} className={"img-responsive"}/>
            </Cell>
            <Cell width={8}>
              <h3>Paul Pugly - Lead Developer</h3>
              <p>We are a full-service digital marketing agency focused on helping you grow your business. We understand that you have the best knowledge of your business, and that without understanding that business ourselves we cannot provide the service that you deserve. It is only by working directly with you that can we create original, captivating and profitable digital marketing strategies and marketing materials to help increase your business, and in turn your profit.</p>
            </Cell>

            <Cell width={4}>
              <img src={"https://picsum.photos/1000/1000/?image=1025"} alt={"person"} className={"img-responsive"}/>
            </Cell>
            <Cell width={8}>
              <h3>Paul Pugly - Lead Developer</h3>
              <p>We are a full-service digital marketing agency focused on helping you grow your business. We understand that you have the best knowledge of your business, and that without understanding that business ourselves we cannot provide the service that you deserve. It is only by working directly with you that can we create original, captivating and profitable digital marketing strategies and marketing materials to help increase your business, and in turn your profit.</p>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
