export default class ContestInfo extends React.Component {
  render() {
    return (
      <>
        <tr>
          <td />
          <td class="pt">
            <div>
              <a href={`/contests/details?id=${this.props.id}`}>{this.props.name}</a>
            </div>
            <div class="s">
              <div>
                <span class="g">Тип турнира</span> <b>{this.props.type}</b>
              </div>
              <div>
                <span class="g">Начало: </span> {this.props.date_of_start}
              </div>
              <div>
                <span class="g">Преподаватель: </span>
                <a href="/users?id=1002">{this.props.teacher_name}</a>
              </div>
            </div>
          </td>
          <td class="pc">{this.props.going}</td>
          <td class="pc">{this.props.registered}</td>
        </tr>
      </>
    )
  }
}
