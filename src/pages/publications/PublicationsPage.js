import React, { useState, useEffect } from 'react'
import styles from './publications.module.css'
import Origam from '../../components/origam/Origam'
import PageLayout from '../../components/pageLayout/PageLayout'

const Publications = () => {
    const [origamis, setOrigamis] = useState([])

    const getOrigamis = async () => {
        const response = await fetch('http://localhost:4000/api/origami')
        const origamis = await response.json()

        setOrigamis(origamis)
    }

    const renderOrigamis = () => {
        return origamis.map(origam => {
            return (<Origam key={origam._id} {...origam} />
            )
        })
    }

    useEffect(() => {
        getOrigamis()
    }, [])

    return (
        <PageLayout>
            <main className={styles.main}>
                <h1 className={styles.h1}>
                    Publications
            </h1>
                <div>
                    {renderOrigamis()}
                </div>
            </main>
        </PageLayout>
    )
}

export default Publications