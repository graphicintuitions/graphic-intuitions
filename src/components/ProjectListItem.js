import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const ProjectListItem = ({ project }) => (
  <div>
    <img src={project.logo} />
    <h3>{project.title}</h3>
  </div>
)

ProjectListItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  logo: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

export default ProjectListItem
