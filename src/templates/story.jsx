import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../layouts/index';
import withMetaData from '../layouts/withMetadata';
import Slide from '../components/story/slide';
import HoverArea from '../components/story/hoverArea';
import SlideContentTypes from '../slideContentTypes';
import InfoCard from '../components/story/infoCard';

const LayoutWithMetaData = withMetaData(Layout);

class StoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: '',
    };

    this.onCardSelected = this.onCardSelected.bind(this);
    this.onCardClosed = this.onCardClosed.bind(this);
  }

  onCardSelected(slug) {
    this.setState({
      activeCard: slug,
    });
    // This is a hack. Please fix it later
    // eslint-disable-next-line
    document.querySelector('body').style.overflow = 'hidden';
  }

  onCardClosed() {
    this.setState({
      activeCard: '',
    });

    // eslint-disable-next-line
    document.querySelector('body').style.overflow = '';
  }

  render() {
    const { data } = this.props;
    const { activeCard } = this.state;
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

    const infoCards = story.slides
      .filter(
        // eslint-disable-next-line
        slide => slide.slideContent[0].__typename === SlideContentTypes.TextContent
          && slide.slideContent[0].infoCards,
      )
      .reduce((arr, slide) => arr.concat(slide.slideContent[0].infoCards), [])
      .map(card => (
        <InfoCard
          headerImageUrl={card.headerImage.file.url}
          cardTitle={card.title}
          cardContent={card.text.childMarkdownRemark.html}
          isActive={card.slug === activeCard}
          onCloseClick={this.onCardClosed}
        />
      ));

    const isCardActive = activeCard !== '';
    return (
      <LayoutWithMetaData
        isStory
        infoCards={infoCards}
        isCardActive={isCardActive}
        storyTitle={story.title}
      >
        <HoverArea />
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
