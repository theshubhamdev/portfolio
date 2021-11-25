
import React from 'react'
import {Fade} from "react-reveal"
import {Grid} from '@mui/material';

export default function Section3() {
    return (
        <div className="full-w" id="My-Works">
        <Fade bottom>
            <Grid className="full-wh" style={{alignItems:"center",padding:"9rem 0 2rem!important"}} container>
                <Grid className="intro-start text-primary text-center align-self-end" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <h1 className="text-primary">My Works</h1>
                </Grid>
                <Grid className="flex-col second-box left align-center align-self-start" item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid>
                        {/*  eslint-disable-next-line */}
                        <a className="text-secondary" href="https://www.thestandard.in/" target="_blank"><h4>The Standard Website</h4></a>
                    </Grid>
                    <Grid>
                        {/*  eslint-disable-next-line */}
                        <a className="text-secondary" href="https://play.google.com/store/apps/details?id=com.thestandard.main" target="_blank"><h4>The Standard Android App</h4></a>
                    </Grid>
                    <Grid>
                        {/*  eslint-disable-next-line */}
                        <a className="text-secondary" href="https://play.google.com/store/apps/details?id=com.tictactoe.theshubham" target="_blank"><h4>Tic Tac Toe Game</h4></a>
                    </Grid>
                </Grid>
            </Grid>
        </Fade>
      </div>
    )
}
