import React, {Component} from "react"
import { connect } from "react-redux"
import About from "./About";
import { changeName, increment } from 'store/modules/about'

class AboutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : null
        }
    }
    handleClick = number => {
        const {increment} = this.props
        increment(number)
        console.log(number,'in')
    }
    componentDidMount() {
        // console.log('componentDidMount')
        // const axios = require('axios')
        // var n = this
        // axios.get('http://localhost:8080/study01/hisd.do')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response.data);
        //         console.log(n.state);
        //         n.setState ({
        //             data: response.data
        //         })
        //         console.log(n.state)
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });

    }

    render() {
        const { name, number } = this.props
        console.log('hi',this.props, this.state)
        return <About onClick = {this.handleClick} number = {number} name={name} />
    }
}

const mapStateToProps = state => ({
    number : state.about.number,
    name : state.about.name
})
const mapDispatchToProps = dispatch => ({
    increment : number => dispatch(increment(number)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutContainer);
