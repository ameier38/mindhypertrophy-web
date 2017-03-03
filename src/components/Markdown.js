// based on react-remarkable
// https://github.com/acdlite/react-remarkable

import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import katex from 'markdown-it-katex'
import hljs from 'highlight.js'

class Markdown extends Component{
  render() {
    return (
      <div>
        {this.content()}
      </div>
    )
  }
  content() {
    return React.Children.map(this.props.children, child => {
      if (typeof child === 'string') {
        return <span dangerouslySetInnerHTML={{ __html: this.renderMarkdown(child) }} />
      }
      else {
        return child
      }
    })
  }
  renderMarkdown(source) {
    if (!this.markdown) {
      this.markdown = new MarkdownIt({
        highlight: (str, lang) => {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }
          return '' // use external default escaping
        }
      })
      this.markdown.use(katex)
    }
    return this.markdown.render(source)
  }

}

export default Markdown