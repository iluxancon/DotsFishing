export default class extends React.Component {
    state = {
        text: 'asd'
    }

    handleClick = () => {
        this.setState({ text: 'clicked' })
    }

    componentDidMount() {
        //this.state.text = 'mounted'
        setTimeout(
            () => {
                this.setState({ text: 'mounted' })
            },
            3000
        )
    }
    
    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <button onClick={this.handleClick}>CLICK!</button>
            </>
        )
    }
}