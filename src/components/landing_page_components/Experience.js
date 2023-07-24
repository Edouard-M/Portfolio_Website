import React from 'react'

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
        <div className='experience-title'>{title}</div>
        <div className='experience-subtitle'>{subtitle}</div>
        <div className='experience-text'>{text}</div>
        <ul className='experience-list'>
            {listItems}
        </ul>
      </div>
    </div>
  )
}

export default Experience
