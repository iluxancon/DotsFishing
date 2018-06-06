import ContestInfo from "../components/ContestInfo.js"



export default class extends React.Component {
  state = {
    contests: null,
  }
  static async getInitialProps() {
    return { user: { username: "root" } }
  }



  componentDidMount() {
    fetch("http://dots-practice-2018.xeon.prostoksi.com/contests-json", {
      'credentials': 'include', 
      //headers: { 'Cookie': "DSID=WzETbgEkzCkXOX1H" }
    })
      .then(data => data.json())
      .then(contests => this.setState({ contests: contests }))
  }

  render() {
    if (this.state.contests === null) {
      return <div>Идет загрузка турниров...</div>
    }
    
    const contestComponents = this.state.contests.map(contest => (
      <ContestInfo
        id = {contest.id}
        name={contest.title}
        type={contest.type}
        date_of_start={contest.start_time}
        //teacher_name={contest.teacher_name}
        going={contest.status}
        registered={contest.registration_type}
      />
    ))
    return (
      <>
        <h1>ТУРНИРЫ</h1>
        <div class="search">
          <table width="100%">
            <tr>
              <td width="30%" />
              <td width="70%" align="right" text-align="right">
                <form id="searchform" class="i" action="contests" method="get">
                  <label>
                    {`Поиск по названию: `}
                    <input
                      type="text"
                      class="e"
                      name="search"
                      value=""
                      size="20"
                      maxlength="60"
                    />
                  </label>
                  <input type="submit" class="b" value="Искать" />
                </form>
              </td>
            </tr>
          </table>
        </div>
        <table id="conteststable" class="t" cellSpacing="0" width="100%">
          <tbody>
            <tr>
              <th />
              <th width="60%" nowrap="yes" class="l">
                <a href="contests?sort=1">Название</a>
              </th>
              <th width="20%" nowrap="yes">
                Состояние
              </th>
              <th width="20%" nowrap="yes">
                <a href="contests?sort=3">Ваш статус</a>
              </th>
            </tr>
            {contestComponents}
          </tbody>
        </table>
        <div>
          <br />
          Страницы: <a class="nc">1</a>
        </div>
      </>
    )
  }
}
