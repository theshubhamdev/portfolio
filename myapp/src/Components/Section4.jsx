import React from 'react'
import {Fade} from "react-reveal"
import {Grid} from '@mui/material';

import {SiGithub,SiLinkedin,SiFacebook,SiInstagram} from "react-icons/si";
import Footer from './Footer';

export default function Section4() {
    return (
        <div className="full-w" id="Connect-With-Me">
        <Fade bottom>
            <Grid className="full-wh" style={{alignItems:"center",padding:"9rem 0 2rem!important"}} container>
                <Grid className="intro-start text-primary text-center align-self-end" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <h1 className="text-primary">Connect With Me</h1>
                </Grid>
                <Grid className="second-box text-center align-center align-self-start" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container className="social-icons-container">
                        <Grid item xs={6} md={2} >
                            <a className="social-icons" href="https://in.linkedin.com/in/shubham-lakhmani-02b3401ba"><SiLinkedin /></a>
                        </Grid>
                    <Grid item xs={6} md={2}>
                            <a className="social-icons" href="https://github.com/Shubham-Lakhmani"><SiGithub/></a>
                        </Grid>
                        <Grid item xs={6} md={2} >
                            <a className="social-icons" href="https://www.instagram.com/_jordan_rock/"><SiInstagram /></a>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <a className="social-icons" href="https://www.facebook.com/shubhamlakhmani2"><SiFacebook /></a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Fade>
        
      </div>
    )
}
