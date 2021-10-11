import React from 'react'
import {Fade} from "react-reveal"
import {Grid} from '@mui/material';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiAndroid,
  DiBootstrap
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiAwsamplify, SiGraphql, SiHyper, SiTypescript, SiVisualstudiocode,SiNextdotjs,SiCpanel} from "react-icons/si";
import { FaAws } from 'react-icons/fa';
import {IoIosAppstore} from "react-icons/io"

export default function Section1() {
    return (
        <div className="full-w" id="Home">
        <Fade bottom>
            <Grid className="full-wh" style={{alignItems:"center",padding:"9rem 0 2rem!important"}} container>
                <Grid className="intro-start text-primary text-center align-self-end" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <h1 className="text-primary">Hello, There!</h1>
                    <h1 className="colorful-text">I'M SHUBHAM</h1>
                    <p className="text-secondary text-xs">App Developer | Web developer | Open Source Contributor </p>
                </Grid>
                <Grid className="second-box text-center align-center align-self-start" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container className="tech-icons-container">
                    <Grid item xs={2} md={2} className="tech-icons">
                            <CgCPlusPlus />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <DiReact />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <DiJavascript1 />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <DiNodejs />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <FaAws />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <SiAwsamplify />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <SiGraphql />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <SiTypescript />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <SiNextdotjs />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <DiBootstrap />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <SiCpanel />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <DiGit />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <SiVisualstudiocode/>
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <SiHyper />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <DiAndroid />
                        </Grid>
                        <Grid item xs={2} md={2} className="tech-icons">
                            <IoIosAppstore />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fade>
      </div>
    )
}
