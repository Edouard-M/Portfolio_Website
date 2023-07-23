import React from 'react'

import {FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa'
import {RiJavascriptFill} from 'react-icons/ri'
import {IoLogoPython} from 'react-icons/io5'
import {SiDjango} from 'react-icons/si'
import {BiLogoPostgresql, BiLogoGithub} from 'react-icons/bi'
import {TbBrandVscode} from 'react-icons/tb'
import {BiLogoLinkedin, BiLogoGmail} from 'react-icons/bi'
import { Link } from "react-router-dom";
import {FaCircleArrowDown} from 'react-icons/fa6'


function IconesList() {
  return (
    <div className='skills-icones-list'>
        <div className='skills-icone'><IoLogoPython/></div>
        <div className='skills-icone'><SiDjango/></div>
        <div className='skills-icone'><RiJavascriptFill/></div>
        <div className='skills-icone'><FaReact/></div>
        <div className='skills-icone'><FaHtml5/></div>
        <div className='skills-icone'><FaCss3Alt/></div>
        <div className='skills-icone'><BiLogoPostgresql/></div>
        <div className='skills-icone'><BiLogoGithub/></div>
        <div className='skills-icone'><TbBrandVscode/></div>
    </div>
  )
}

export default IconesList
