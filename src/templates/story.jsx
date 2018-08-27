import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../layouts/index';
import Slide from '../components/story/slide';
import withMetaData from '../layouts/withMetadata';

const LayoutWithMetaData = withMetaData(Layout);

class StoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line
      activeCard: '',
    };

    this.onCardSelected = this.onCardSelected.bind(this);
    this.onCardClosed = this.onCardClosed.bind(this);
  }

  onCardSelected(slug) {
    this.setState({
      // eslint-disable-next-line
      activeCard: slug,
    });
  }

  onCardClosed() {
    this.setState({
      // eslint-disable-next-line
      activeCard: '',
    });
  }

  render() {
    const { data } = this.props;
    const story = get(data, 'contentfulStory');
    const slides = story.slides.map(slide => (
      <Slide
        backgroundImageUrl={slide.backgroundImage.file.url}
        hoverText={slide.photoCaption}
        slideContent={slide.slideContent[0]}
        onCardSelected={this.onCardSelected}
        key={slide.id}
      />
    ));
    return (
      <LayoutWithMetaData isStory>
        <div>Welcome to the story!</div>
        {slides}
      </LayoutWithMetaData>
    );
  }
}

StoryPage.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default StoryPage;

export const pageQuery = graphql`
  query StoryBySlug($slug: String!) {
    contentfulStory(slug: { eq: $slug }) {
      title
      metaTagTitle
      metaTagImage {
        file {
          url
        }
      }
      slides {
        ...storySlideFragment
      }
    }
  }
`;
