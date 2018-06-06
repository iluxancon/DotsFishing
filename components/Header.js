export default class extends React.Component {
  render() {
    return (
      <div id="header">
        <table border="0">
          <tbody>
            <tr>
              <td>
                <a href="/contests" title="Q-BIT">
                  <img
                    src="http://qbit.dots.org.ua/images/logo.gif"
                    width="100"
                    height="70"
                    border="0"
                    alt="Q-BIT Logo"
                  />
                </a>
              </td>
              <td>
                <h1>Молодёжное научное общество Q-Bit, г. Харьков</h1>
                <h2>
                  ПРАКТИКУМ ПО ПРОГРАММИРОВАНИЮ (&#0171;DOTS&#0187; v1.5
                  <img
                    alt="b"
                    src="http://qbit.dots.org.ua/images/b.gif"
                    style={{ marginBottom: '-4px' }}
                  />)
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
