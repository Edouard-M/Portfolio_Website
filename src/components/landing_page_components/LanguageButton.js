import React from 'react'

var translate = 0;
var color1 = "var(--color-main)";
var color2 = "var(--color-white)";
var backgroundcolor = "var(--color-main)";

function LanguageButton({activeLanguage, setActiveLanguage, value1, value2}) {

    const handleClick = () => {
        if(activeLanguage === value1){
            setActiveLanguage(value2);
            translate = 0;
            color1 = "var(--color-main)";
            color2 = "var(--color-white)";
            backgroundcolor = "var(--color-main)";
        }
        else{
            setActiveLanguage(value1);
            translate = 100;
            color1 = "var(--color-white)";
            color2 = "var(--color-second)";
            backgroundcolor = "var(--color-second)";
        }

        console.log(activeLanguage)
        console.log(translate)
      };

    return (
    <div onClick={() => handleClick()} className='landingpage_language_button' style={{background:`${backgroundcolor}`}}>
        <div style={{width:"45%", height:"80%", position:"absolute", background:"var(--color-white)", borderRadius:"50px", left:"5%", transition:"all 0.3s", transform:`translateX(${translate}%)`}}></div>
        <div style={{left:"19%", position:"absolute", color:`${color1}`, transition:"all 0.3s"}}>{value1}</div>
        <div style={{right:"19%", position:"absolute", color:`${color2}`, transition:"all 0.3s"}}>{value2}</div>
    </div>
    )
    }

export default LanguageButton
