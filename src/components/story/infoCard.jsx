import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';
import CardHeader from '../infoCards/cardHeader';
import CloseArea from '../infoCards/closeArea';
import '../../less/infoCard.less';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: fields => (
      <a
        href={fields.href}
        // Prevent opening a new tab for anchor navigation
        target={`${fields.href.startsWith('#') ? '' : '_blank'}`}
        rel="noopener noreferrer"
      >
        {fields.children[0]}
      </a>
    ),
  },
}).Compiler;

const InfoCard = ({
  headerImageUrl, cardTitle, cardContentAst, isActive, onCloseClick,
}) => (
  <article className={`info-card ${isActive ? 'active' : ''}`}>
    <CloseArea
      isCard
      onCloseClick={onCloseClick}
    />
    <CardHeader imageUrl={headerImageUrl} title={cardTitle} />
    <div className="card-content">
      {renderAst(cardContentAst)}
    </div>
  </article>
);

InfoCard.propTypes = {
  headerImageUrl: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  // eslint-disable-next-line
  cardContentAst: PropTypes.object.isRequired,
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
