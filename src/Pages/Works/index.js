import './style.scss'

import { useEffect, useState } from 'react/cjs/react.development'

import { serverAPI, } from '../../assets/js/util'
import { getWorks as getStaticWorks } from '../../assets/js/data'

import WorkDetail from '../../Atoms/WorkCard'

const Works = () => {
    const [works, setWorks] = useState([])

    const fetchWorks = async () => {
        await fetch(serverAPI + '/api/works')
            .then(req => req.json())
            .then(res => {
                setWorks(res)
            })
            .catch(err => err)
    }

    useEffect(() => {
        setWorks(getStaticWorks())
        fetchWorks()
    }, [])

    return (
        <div className='works'>
            <h1 className='works__title'>
                Works
            </h1>

            <div className='works__body'>
                {works.map(work =>
                <div key={work.id}>
                    {/* <Link to={`/work/${work.id}`}> */}
                        <WorkDetail key={work.id} {...work}></WorkDetail>
                    {/* </Link> */}
                </div>)}
            </div>
        </div>)
}

export default Works