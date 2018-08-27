import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CardHeader from '../infoCards/cardHeader';
import CloseArea from '../infoCards/closeArea';
import '../../less/infoCard.less';

const InfoCard = ({
  headerImageUrl, cardTitle, cardContent, isActive, onCloseClick,
}) => (
  <article className={`info-card ${isActive ? 'active' : ''}`}>
    <CloseArea onCloseClick={onCloseClick} />
    <CardHeader imageUrl={headerImageUrl} title={cardTitle} />

    {/* eslint-disable-next-line */}
    <div className="card-content" dangerouslySetInnerHTML={{ __html: cardContent }} />
  </article>
);

InfoCard.propTypes = {
  headerImageUrl: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardContent: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

InfoCard.defaultProps = {
  isActive: false,
};

export default InfoCard;

export const infoCardFragment = graphql`
  fragment infoCardFragment on ContentfulInfoCard {
    slug
    headerImage{
      file{
        url
      }
    }
    title
    text{
      childMarkdownRemark{
        htmlAst
      }
    }
  }
`;
