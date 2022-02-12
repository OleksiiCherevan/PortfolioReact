import './style.scss'

import { useEffect, useState } from 'react/cjs/react.development'

import { serverAPI, } from '../../assets/js/util'
import { getWorks as getStaticWorks } from '../../assets/js/data'

import WorkCard from '../../Atoms/WorkCard'
import Separate from '../../Atoms/Separate'
import PageHeader from '../../Atoms/PageHeader'

const Works = () => {
    const [works, setWorks] = useState([])

    useEffect(() => {
        setWorks(getStaticWorks())
    }, [])

    return (
        <div className='works'>
            <PageHeader>Works</PageHeader>

            <div className='works__cards'>
                {works.map(work =>
                <div className='works__card' key={work.id}>
                        <WorkCard key={work.id} {...work}></WorkCard>
                        <Separate></Separate>
                </div>)}
            </div>
        </div>)
}

export default Works