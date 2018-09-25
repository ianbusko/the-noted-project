import React from 'react';
import PropTypes from 'prop-types';
import rehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import '../../../less/textSlideContent.less';

class TextSlideContent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onCardClicked = this.onCardClicked.bind(this);

    // eslint-disable-next-line
    this.renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        a: fields => (
          <a
            className="Hello-there"
            href={fields.href}
            onClick={this.onCardClicked.bind(fields.href)}
          >
            {fields.children[0]}
          </a>
        ),
      },
    }).Compiler;
  }

  onCardClicked(e) {
    e.preventDefault();
    const { onCardSelected } = this.props;
    const cardSlug = e.target.getAttribute('href');
    onCardSelected(cardSlug);
  }

  render() {
    const {
      headerImageUrl, headerTitle, textAst, textSlideIndex, textSlideTotal, storyName,
    } = this.props;
    return (
      <div className="article-text">
        <header className="article-text-header">
          {headerImageUrl && (
            <div
              className="header-image"
              style={{
                backgroundImage: `url(https:${headerImageUrl})`,
              }}
            />
          )}

          {!headerImageUrl
            && headerTitle && <h3 className="article-title">{headerTitle}</h3>}
        </header>

        <div className="article-text-content">
          {headerImageUrl && <h3 className="article-title">{headerTitle}</h3>}

          <div>{this.renderAst(textAst)}</div>
        </div>

        {/* TODO: fix this mess */}
        <footer className="article-text-footer">
          <p>
            {`The Noted project | ${storyName} | part ${textSlideIndex} of ${textSlideTotal}`}
          </p>
        </footer>
      </div>
    );
  }
}

TextSlideContent.propTypes = {
  onCardSelected: PropTypes.func.isRequired,
  // eslint-disable-next-line
  textAst: PropTypes.object.isRequired,
  headerImageUrl: PropTypes.string,
  headerTitle: PropTypes.string,
  textSlideIndex: PropTypes.number.isRequired,
  textSlideTotal: PropTypes.number.isRequired,
  storyName: PropTypes.string.isRequired,
};

TextSlideContent.defaultProps = {
  headerImageUrl: '',
  headerTitle: '',
};

export default TextSlideContent;

export const textSlideContentFragment = graphql`
  fragment textSlideContentFragment on ContentfulSlideContentText {
    headerTitle
    headerImage {
      file {
        url
      }
    }
    text {
      childMarkdownRemark {
        htmlAst
      }
    }
    infoCards {
      ...infoCardFragment
    }
  }
`;
