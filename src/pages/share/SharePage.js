import React, { useContext, useState, useEffect } from 'react'
import Button from '../../components/button/Button'
import Origam from '../../components/origam/Origam'
import PageLayout from '../../components/pageLayout/PageLayout'
import UserContext from '../../Context'
import styles from './share.module.css'

const Share = () => {
    const [origamis, setOrigamis] = useState([])
    const [description, setDescription] = useState('')
    const [newPost, setNewPost] = useState(false)
    const context = useContext(UserContext)

    const renderOrigamis = () => {
        if (!context.user.loggedIn) {
            return
        } else {
            const lastThreePost = origamis.filter(origam => {
                return !origam.author.username.localeCompare(context.user.username);
            })

            return lastThreePost.reverse().slice(0, 3).map(origam => {
                return (<Origam key={origam._id} {...origam} />
                )
            })
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const body = {
                "description": description
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
            const origamiObj = await response.json()

            if (origamiObj._id) {
                setNewPost(true)
                setDescription('')
            } else {
                return
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetch('http://localhost:4000/api/origami')
            .then(promise => promise.json())
            .then(responseOrigamis => setOrigamis(responseOrigamis))
            .catch(err => console.error(err))

        setNewPost(false)
    }, [newPost])

    return (
        <PageLayout>
            <div className={styles.input}>
                <div className={styles['post-control']}>
                    <h1>
                        Share your thoughts
                </h1>
                    <form onSubmit={onSubmit}>
                        <textarea className={styles.textarea} onChange={(event) => setDescription(event.target.value)} value={description} />
                        <Button text='Post' type='submit' />
                    </form>
                </div>
                <div>
                    <div className={styles.posts}>
                        <h2>Last 3 post on your wall</h2>
                        {renderOrigamis()}
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Share
