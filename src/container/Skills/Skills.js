import React from 'react';
import classes from './Skills.css';
import fireBase from '../../assests/fireBase.png';
import git from '../../assests/git.png';
import react from '../../assests/react.png';
import node from '../../assests/node.png';
import redux from '../../assests/redux.png';
import javascript from '../../assests/javaScript.png';
import jQuery from '../../assests/jQuery.png';
import laravel from '../../assests/laravel.png';
import bootstrap from '../../assests/Bootstrap.png';
import html from '../../assests/html.png';
import css from '../../assests/css3.png';
import dw from '../../assests/dw.png';
import intell from '../../assests/IntelliJ.png';
import ps from '../../assests/ps.png';
import php from '../../assests/php.png';
import mysql from '../../assests/mySQL.png';
import antd from '../../assests/antd.png';
import material from '../../assests/material.png';
import BasicInfo from '../../components/BasicInfo/BasicInfo';

import Aux from '../../hoc/Ax';

const Skills = () =>{
    return(
        <Aux>
            <div className={classes.Skills}>
                <h1>Skills</h1>

                <BasicInfo>
                    <p>The proccess of learning new things never ends.</p>
                    <p>I still learning more to upgrade my skills.</p>
                </BasicInfo>

                <div>

                    <div className={classes.SkillsAlign}>
                        <div><img src={react} alt="React"/><p>React</p></div>
                        <div><img src={redux} alt="Redux"/><p>Redux</p></div>
                        <div><img src={css} alt="Css"/><p>Css3</p></div>
                    </div>

                    <div className={classes.SkillsAlign}>
                        <div><img src={antd} alt="Ant Design"/><p>Ant Design</p></div>
                        <div><img src={material} alt="Material ui"/><p>Material ui</p></div>
                        <div><img src={javascript} alt="Javascript"/><p>JavaScript(ES6)</p></div>
                    </div>

                    <div className={classes.SkillsAlign}>
                        <div><img src={fireBase} alt="Firebase"/><p>Firebase</p></div>
                        <div><img src={node} alt="Node.js"/><p>Node.js</p></div>
                        <div><img src={mysql} alt="Mysql"/><p>MySQL</p></div>
                    </div>

                    <div className={classes.SkillsAlign}>

                        <div><img src={html} alt="Html"/><p>Html5</p></div>
                        <div><img src={git} alt="Git"/><p>Git</p></div>
                        <div><img src={dw} alt="Dreamweaver"/><p>Dreamweaver</p></div>
                    </div>


                    <div className={classes.SkillsAlign}>
                        <div><img src={php} alt="PHP"/><p>PHP</p></div>
                        <div><img src={ps} alt="Photoshop"/><p>Photoshop</p></div>
                        <div><img src={intell} alt="IntelliJ"/><p>IntelliJ</p></div>
                    </div>

                    <div className={classes.SkillsAlign}>
                        <div><img src={jQuery} alt="jQuery"/><p>jQuery</p></div>
                        <div><img src={laravel} alt="Laravel"/><p>Laravel</p></div>
                        <div><img src={bootstrap} alt="Bootstrap"/><p>Bootstrap</p></div>
                    </div>

                </div>
            </div>

        </Aux>



    )
};

export default Skills;