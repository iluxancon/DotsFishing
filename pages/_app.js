import App, { Container } from 'next/app'

import Main from '../components/Main'

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Main title={pageProps.title} user={pageProps.user}>
          <Component {...pageProps} />
        </Main>
      </Container>
    )
  }
}
