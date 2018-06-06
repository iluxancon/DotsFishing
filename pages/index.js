export default class extends React.Component {
  render() {
    return (
      <>
        <h1>ПРЕДСТАВЬТЕСЬ</h1>

        <p>&nbsp;</p>
        <form id="loginform" action="/contests" method="">
          <input type="hidden" value="" />
          <table id="loginformtable">
            <tbody>
              <tr>
                <td>
                  <span className="ft">Логин:</span>
                </td>
                <td>
                  <input
                    type="text"
                    tabIndex="1"
                    value="popo"
                    size="20"
                    maxlength="60"
                    class="e"
                    style={{ width: '150px' }}
                  />
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <span class="ft">Пароль:</span>
                </td>
                <td>
                  <input
                    type="password"
                    tabindex="2"
                    value="popo"
                    size="20"
                    maxlength="60"
                    class="e"
                    style={{ width: '150px' }}
                  />
                </td>
                <td>
                  &nbsp;<a href="restore" class="fh">
                    Забыли пароль?
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="ft">&nbsp;</span>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id="remember_me"
                    tabindex="3"
                    value="1209600"
                    class="e cb"
                  />
                  <label htmlFor="remember_me"> Запомнить вход</label>
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  &nbsp;<input type="hidden" value="WzETbgEkzCkXOX1H" />
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <input type="submit" class="b" tabIndex="4" value="Войти" />
                </td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </form>
      </>
    )
  }
}
