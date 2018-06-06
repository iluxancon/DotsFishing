export default class ContestInfo extends React.Component {
  render() {
    return (
      <>
        <h1>Турнир</h1>

        <table id="contestinfotable" cellspacing="4" cellpadding="2">
          <tbody>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Название:
              </td>
              <td width="80%">{this.props.name}</td>
            </tr>
            <tr>
              <td class="b" width="20%">
                Тип турнира:
              </td>
              <td width="80%">{this.props.type}</td>
            </tr>

            <tr>
              <td colspan="2">
                <span class="h2">Условия</span>
              </td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Время начала:
              </td>
              <td class="h" width="80%">
                {this.props.date_of_start}
              </td>
            </tr>
            <tr>
              <td class="b">Длительность:</td>
              <td class="h">1000 - 16:40:00</td>
            </tr>
            <tr>
              <td class="b">Время окончания:</td>
              <td class="h">30.05.2020 17:40:00</td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Статус:
              </td>
              <td class="h" width="80%">
                {this.props.going}
              </td>
            </tr>
            <tr>
              <td class="b">Прошло от начала:</td>
              <td class="h">276 - 10:47:35</td>
            </tr>
            <tr>
              <td class="b">Осталось до конца:</td>
              <td class="h">724 - 05:52:25</td>
            </tr>

            <tr>
              <td colspan="2">
                <span class="h2">Участие</span>
              </td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true" valign="top">
                Способ регистрации:
              </td>
              <td class="h" width="80%">
                {this.props.registered}
              </td>
            </tr>
            <tr>
              <td class="b" width="20%" nowrap="true">
                Ваше состояние:
              </td>
              <td class="h" width="80%">
                {this.props.mode}
              </td>
            </tr>

            <tr>
              <td colspan="2">
                <span class="h2">Меню Турнира</span>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <ul class="m">
                  <li>
                    <a href="contest_users">&#0187; Участники</a>
                  </li>
                  <li>
                    <a href="problems">&#0187; Задачи</a>
                  </li>
                  <li>
                    <a href="solutions">&#0187; Решения</a>
                  </li>
                  <li>
                    <a href="solutions?new=1">&#0187; Отправить</a>
                  </li>
                  <li>
                    <a href="standings">&#0187; Результаты</a>
                  </li>
                  <li>
                    <a title="Покинуть турнир" href="contests?logout">
                      &#0187; Покинуть
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <b>
            <a href="contests?logout" title="Выйти">
              Выйти
            </a>
          </b>
        </p>
        <p>&nbsp;</p>
      </>
    );
  }
}
