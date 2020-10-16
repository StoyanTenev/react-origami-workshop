import React, { Component } from 'react'
import styles from './publications.module.css'
import Origam from '../../components/origam/Origam'
import PageLayout from '../../components/pageLayout/PageLayout'

class Publications extends Component {
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
            <PageLayout>
                <main className={styles.main}>
                    <h1 className={styles.h1}>
                        Publications
                </h1>
                    <div>
                        {this.renderOrigamis()}
                    </div>
                </main>
            </PageLayout>
        )
    }
}

export default Publications