import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CaseStudyPreview from './preview-templates/CaseStudyPreview'
import * as ColorWidget from "netlify-cms-widget-color"

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('case-studies', CaseStudyPreview)
CMS.registerWidget("color", ColorWidget.Control)
