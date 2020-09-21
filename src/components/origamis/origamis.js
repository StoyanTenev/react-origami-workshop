import React, { Component } from 'react'
import styles from './origamis.module.css'
import Origam from '../origam/origam'

class Origamis extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: []
        }

    }

    getOrigamis = async () => {
        const response = await fetch('http://localhost:4000/api/origami')
        const origamis = await response.json()

        this.setState({
            origamis
          })
    }

    renderOrigamis = () => {
        const { origamis } = this.state

        return origamis.map(origam => {
            return (<Origam key={origam._id} {...origam} />
            )
        })
    }

    componentDidMount() {
        this.getOrigamis()
    }


    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.h1}>
                    Origamis
                </h1>
                <div>
                    {this.renderOrigamis()}
                </div>
            </div>
        )
    }
}

export default Origamis