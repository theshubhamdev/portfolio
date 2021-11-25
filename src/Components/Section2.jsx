import React from 'react'
import { Fade } from 'react-reveal'
import {Grid} from '@mui/material';

export default function Section2() {
    return (
        <div className="full-w" id="About-Me">
            <Fade bottom>
                <Grid className="full-wh" style={{height:"100vh",alignItems:"center",padding:"9rem 0 2rem!important"}} container>
                    <Grid className="full-w intro-start text-center text-primary align-self-end" item sm={12} xs={12} md={6} lg={6} xl={6}>
                        <h1>About Me</h1>
                    </Grid>
                    <Grid className="second-box flex-1 flex-col flex intro-text about align-self-start" style={{flexDirection:"column"}} item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h2><span className="colorful-text">Shubham Lakhmani</span></h2>
                        <p className="py-2 text-secondary">Hi 👋 Let me introduce myself</p>
                        <p className="py-2 text-secondary">I Started My Career as a <span className="text-primary">Fullstack Web Developer </span>when I was <span className="text-primary">17 y.o</span>.</p>
                        <p className="py-2 text-secondary">In Search of Gaining Work Experience, I build My First Website for <a href="https://thestandard.in/" style={{textDecoration:"none"}}><span className="text-primary">The Standard</span></a></p>
                        <p className="py-2 text-secondary"><a href="https://thestandard.in/" style={{textDecoration:"none"}}><span className="text-primary">The Standard</span></a> helped me a lot in Understanding Real World <span className="text-primary">Development and Management Skills</span>.</p>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    )
}
