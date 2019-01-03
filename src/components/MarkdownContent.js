import React from 'react'
import PropTypes from 'prop-types'
const remark = require('remark');
const remarkHTML = require('remark-html');
const recommended = require('remark-preset-lint-recommended');

const MarkdownContent = ({ content, className }) => (
  <div className={className} 
       dangerouslySetInnerHTML={
         { 
          __html: remark()
                    .use(recommended)
                    .use(remarkHTML)
                    .processSync(content)
                    .toString()
          }
       } 
  />
)

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}


export default MarkdownContent