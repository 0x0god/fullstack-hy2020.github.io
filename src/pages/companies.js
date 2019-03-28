import { BodyText } from '../components/BodyText/BodyText';
import { DeveloperStory } from '../components/DeveloperStory/DeveloperStory';
import Element from '../components/Element/Element';
import Footer from '../components/Footer/Footer';
import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import mainSEOtags from '../content/mainSEOtags';
import stories from '../content/stories/stories';

const Companies = () => (
  <Layout>
    <SEO title="Yritysesittelyt" keywords={[...mainSEOtags]} />

    <Element className="container">
      <BodyText
        className="col-10 spacing"
        heading={{
          title: 'Devaaja-tarinoita yhteistyökumppaneiltamme',
          level: 'h1',
        }}
      />

      {stories.map(story => (
        <DeveloperStory key={story.name} {...story} />
      ))}

      <Element className="spacing" />
    </Element>

    <Footer />
  </Layout>
);

export default Companies;
