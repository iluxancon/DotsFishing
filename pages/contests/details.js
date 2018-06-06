import DetailsInfo  from "../../components/DetailsInfo.js"

export default class extends React.Component {
    state = {
      details: null,
    }

    static async getInitialProps({query}) {
        return {id: query.id}
    }

    componentDidMount() {
        fetch("http://dots-practice-2018.xeon.prostoksi.com/contests-json?id=" + this.props.id, {
          'credentials': 'include', 
          //headers: { 'Cookie': "DSID=WzETbgEkzCkXOX1H" }
        })
          .then(data => data.json())
          .then(details => this.setState({ details: details }))
      }
      
       


  render() {
    if (this.state.details === null) {
        return <div>Идет загрузка...</div>
    }

    console.log(this.state)
    const detailsContests = <DetailsInfo
            name={this.state.details.title}
            type={this.state.details.type}
            date_of_start={this.state.details.start_time}
            going={this.state.details.status}
            registered={this.state.details.registration_status}
            mode={this.state.details.participation_mode}
            />
    

    return (
      <>
       {detailsContests}
        
      </>
    );
 }

}
