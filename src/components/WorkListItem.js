import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const WorkListItem = ({ testimonials }) => (
  <div>
    
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default WorkListItem
