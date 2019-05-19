import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text as ReactNativeText } from 'react-native'
import { reduce } from "ramda"
import { presets } from "./Text.presets"

class Text extends Component {

  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
  }

  Content = () => {
    const { preset = "default", i18nText, text, children, style: styleOverride } = this.props
    const content = i18nText || text || children

    // assemble the style
    const presetToUse = presets[preset] || presets.default
    let style
    if (Array.isArray(styleOverride)) {
      style = reduce((acc,term) => {
        return { ...acc, ...term }
      }, presetToUse, styleOverride)
    } else {
      style = { ...presetToUse, ...styleOverride }
    }
    // [styles.contentContainer, this.props.style]
    return  (
      <ReactNativeText style={style}>
        {content}
      </ReactNativeText>
    )
  }

  render () {
    return (
      <this.Content />
    )
  }
}

export {
  Text
}