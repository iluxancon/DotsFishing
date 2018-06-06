class AnonymousUserNavigation extends React.Component {
  render() {
    return (
      <>
        <br />
        <li>
          <a title="Памятка" href="http://qbit.dots.org.ua/documents/instruction.pdf">
            Памятка
          </a>
        </li>
        <li></li>

        <li>
          <a title="Справка по системе" href="/help">
            Помощь
          </a>
        </li>

        <li>
          <a title="Войти в систему" href="/login">
            Войти
          </a>
        </li>
      </>
    )
  }
}

class AuthenticatedUserNavigation extends React.Component {
  render() {
    return (
      <>
        <li>
          <a title="Список турниров" href="/contests">
            Турниры
          </a>
        </li>

        <li>
          <a title="Личная информация" href="/users?id=11570">
            Профайл
          </a>
        </li>
        <br />

        <li>
          <a title="Памятка" href="http://qbit.dots.org.ua/documents/instruction.pdf">
            Памятка
          </a>
        </li>
        <li>
          <a title="Личные сообщение" href="/messages">
            Вопросы{' '}
          </a>
        </li>

        <li></li>

        <li>
          <a title="Справка по системе" href="/help">
            Помощь
          </a>
        </li>

        <li>&nbsp;</li>
        <li>
          <a title="Выйти из системы" href="/logout">
            Выйти
          </a>
        </li>
      </>
    )
  }
}

export default class Navigation extends React.Component {
  render() {
    return (
      <div id="nav">
        <ul>
          {this.props.user ? (
            <AuthenticatedUserNavigation user={this.props.user} />
          ) : (
            <AnonymousUserNavigation />
          )}

          {this.props.user && (
            <>
              <li>&nbsp;</li>
              <li><b id="user_nickname">{this.props.user.username}</b></li>
            </>
          )}

          <li>&nbsp;</li>
          <li>
            <a title="DOTS" href="http://dots.org.ua/">
              DOTS
            </a>
          </li>
          <li>
            <a title="QBIT" href="http://qbit.org.ua/">
              QBIT
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
