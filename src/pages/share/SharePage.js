import React, { Component } from 'react'
import Button from '../../components/button/Button'
import Origam from '../../components/origam/Origam'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'
import styles from './share.module.css'

class Share extends Component {
    constructor(props) {
        super(props)

        this.state = {
            origamis: [],
            description: ''
        }
    }

    static contextType = UserContext

    getOrigamis = async () => {
        const response = await fetch('http://localhost:4000/api/origami')
        const origamis = await response.json()

        this.setState({
            origamis
        })
    }

    renderOrigamis = () => {
        if (!this.context.loggedIn) {
            return
        } else {
            const { origamis } = this.state
            const lastThreePost = origamis.filter(origam => {
                return !origam.author.username.localeCompare(this.context.user.username);
            })

            return lastThreePost.reverse().slice(0, 3).map(origam => {
                return (<Origam key={origam._id} {...origam} />
                )
            })
        }
    }

    changeTextarea = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    onSubmit = async (event) => {
        event.preventDefault()
        try {
            const body = {
                "description": this.state.description
            }

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': document.cookie.split('=')[1]
                },
                body: JSON.stringify(body)
            }

            const response = await fetch('http://localhost:4000/api/origami', requestOptions)
            const data = await response.json()

            if (data._id) {
                this.props.history.push('/')
            } else {
                return
            }
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        this.getOrigamis();
    }

    render() {
        return (
            <PageLayout>
                <div className={styles.input}>
                    <div className={styles['post-control']}>
                        <h1>
                            Share your thoughts
                    </h1>
                        <form onSubmit={this.onSubmit}>
                            <textarea className={styles.textarea} onChange={this.changeTextarea} />
                            <Button text='Post' type='submit' />
                        </form>
                    </div>
                    <div>
                        <div className={styles.posts}>
                            <h2>Last 3 post on your wall</h2>
                            {this.renderOrigamis()}
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default Share
