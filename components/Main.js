import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

export default class extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>{`Система проверки задач - Q-Bit - ${this.props.title}`}</title>
          <link rel="stylesheet" href="/static/screen.css" type="text/css" media="all" />
        </Head>

        <Header />

        <div id="wrapper">
          <Navigation user={this.props.user} />
          <div id="content">{this.props.children}</div>
          <Footer />
        </div>
      </>
    )
  }
}
