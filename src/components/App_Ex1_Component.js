import React, { Component } from 'react'

export default class App_Ex1_Component extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div style={style.header}>
                <h1>Header</h1>
            </div>
        )
    }
}


const style = {
    header:{
        backgroundColor: '#ff0000',
        height: 100,
        color: '#000'
    }
}

