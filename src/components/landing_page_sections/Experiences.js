import React from 'react'
import Experience from '../landing_page_components/Experience'
import {Reveal} from '../animations/Reveal'


function Experiences({data}) {
  return (
    <div className='experiences-main'>
        <div className='center'><Reveal><h2>{data[0].section}<span className='point'>.</span></h2></Reveal></div>
        <div className='experiences-container'>
            <div className='experiences-column experiences-column-left'>
                <div className='experiences-subtitle'>{data[0].subtitle1}</div>
                <Experience title={data[1].title} subtitle={data[1].subtitle} text={data[1].text} list={data[1].list} image={data[1].image}/>
                <Experience title={data[2].title} subtitle={data[2].subtitle} text={data[2].text} list={data[2].list} image={data[2].image}/>
                <Experience title={data[3].title} subtitle={data[3].subtitle} text={data[3].text} list={data[3].list} image={data[3].image}/>
            </div>
            <div className='experiences-column experiences-column-right'>
                <div className='experiences-subtitle'>{data[0].subtitle2}</div>
                <Experience title={data[4].title} subtitle={data[4].subtitle} text={data[4].text} list={data[4].list} image={data[4].image}/>
                <Experience title={data[5].title} subtitle={data[5].subtitle} text={data[5].text} list={data[5].list} image={data[5].image}/>
                <Experience title={data[6].title} subtitle={data[6].subtitle} text={data[6].text} list={data[6].list} image={data[6].image}/>
            </div>
        </div>
        <div className='experiences-button'>{data[0].download_button}</div>
    </div>
  )
}

export default Experiences
