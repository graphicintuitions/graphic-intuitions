import CMS from 'netlify-cms-app'
import React, { useState, useEffect } from 'react';
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CaseStudyPreview from './preview-templates/CaseStudyPreview'
import * as ColorWidget from "netlify-cms-widget-color"
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyle, Site, theme } from "../css/theme";

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
          <StyleSheetManager target={iframeRef}>
            <ThemeProvider theme={theme}>
              <React.Fragment>
                <GlobalStyle/>
                <Site>
                  {children}
                </Site>
              </React.Fragment>
            </ThemeProvider>
          </StyleSheetManager>
        
    )
  );
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', withStyledComponentsRendered(BlogPostPreview))
CMS.registerPreviewTemplate('case-studies', CaseStudyPreview)
CMS.registerWidget("color", ColorWidget.Control)
