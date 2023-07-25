import React from 'react'
import {Reveal} from '../animations/Reveal'

function Experience({ title, subtitle, text, list, image }) {

    let list_query = []
    for (let i = 0; i < list.length; i++) {
        list_query[i] = <li>{list[i]}</li> ;
    }

    const listItems = list.map(item =>
        <li key={item.text}>
          {item.text}
        </li>
      );

  return (
    <div className='experiences-experience'>
      <div className='experience-timeline'><div className='experience-circle'><img className='experience-logo' src={require(`../../assets/icones/${image}`)} alt='sg'/></div></div>
      <div className='experience-container'>
      <Reveal><div className='experience-title'>{title}</div></Reveal>
      <Reveal><div className='experience-subtitle'>{subtitle}</div></Reveal>
      <Reveal><div className='experience-text'>{text}</div></Reveal>
      <Reveal><ul className='experience-list'>
            {listItems}
        </ul></Reveal>
      </div>
    </div>
  )
}

export default Experience
