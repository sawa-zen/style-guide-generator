import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, css } from 'styled-components'
import { AppRegistry } from 'react-native-web'

class MyDocument extends Document {

  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    AppRegistry.registerComponent('Main', () => Main)
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const styles = [
      getStyleElement()
    ]

    return { ...page, styleTags, styles } // return styles collected
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="msapplication-tap-highlight" content="no"/>
          <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
          {this.props.styleTags}
        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}

const globalCSS = `
  html, body {
    margin: 0;
    padding: 0;
    font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  }
`;

export default MyDocument;
