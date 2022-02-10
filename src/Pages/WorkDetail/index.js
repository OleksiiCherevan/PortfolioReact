import './style.scss'

import { useState,useEffect } from 'react'
import { serverAPI, currentRoute } from '../../assets/js/util'

import { getWorks as getStaticWorks } from '../../assets/js/data'
import { useParams } from 'react-router'


const WorkDetail = () => {
    // const id = currentRoute()[3][currentRoute()[3].length-1]
    const { id } = useParams();
    const [work, setWork] = useState(getStaticWorks()[id])

    useEffect(() => {
        fetchWork()
    }, [])

    
    const fetchWork = () => {
        fetch(serverAPI + '/api/work/'+id)
        .then(req => req.json())
        .then(res => setWork(res))
        .catch(err => console.error(err))
    }


    const {title, describe, date, tag, img, html} = work ? work : {}
    return (
        <div className='work-presenter small-padding-bottom'>
            <div className='work-presenter__header'>
                <div className='work-snippet'>
                    <h1 className='work-snippet__title work-snippet_tittle_h1'>
                        {title}
                    </h1>

                    <div className='work-snippet__meta-container'>
                        <div className='work-snippet__datetime-published'>
                            {date}
                        </div>

                        <div className='work-snippet__hubs-items'>
                            {tag ? tag.join(' ') : '' }
                        </div>
                    </div>
                </div>
            </div>

            {/* body */}
            <div className='work-body'>
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <div className='work-body-describe'>{describe}</div>

                    <img src={img}></img>

                    <div>
                        {html ? html.map(item => <p key={item}>{item}</p>) : []}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default WorkDetail