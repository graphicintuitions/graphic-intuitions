import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from "../../templates/case-study-post";

const CaseStudyPreview = ({ entry, widgetFor, getAsset }) => (
  <CaseStudyTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    intro={entry.getIn(['data', 'intro'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    logo={getAsset('logo')}
    callout={widgetFor('callout')}
    featured_image={getAsset('featured_image')}
  />
)

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default CaseStudyPreview
