import React from "react"
import { oneLine, stripIndent } from "common-tags"

exports.onRenderBody = (
  { setHeadComponents, setPreBodyComponents },
  pluginOptions
) => {
  if (
    process.env.NODE_ENV === `production` ||
    pluginOptions.includeInDevelopment
  ) {
    setHeadComponents([
      <style
        key="plugin-google-optimize-anti-flicker-style"  
        dangerouslySetInnerHTML={{
        __html: stripIndent`.async-hide { opacity: 0 !important}`
      }} />,
      <script
        key="plugin-google-optimize-anti-flicker-script"
        dangerouslySetInnerHTML={{
          __html: stripIndent`
            <!-- Anti-flicker snippet (recommended)  -->
            (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
            h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
            (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
            })(window,document.documentElement,'async-hide','dataLayer',4000,
            {'${pluginOptions.id}':true});`,
        }}
      />
    ])
  }
}