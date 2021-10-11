import React from 'react'
import { AppBar,Toolbar,Typography, Link } from '@mui/material'

export default function Header() {
    return (
        <AppBar
        color="default"
        position="fixed"
        style={{zIndex:10,margin:"0 auto",width:"100vw"}}
        className="header-fixed"
      >
        <Toolbar sx={{ flexWrap: 'wrap',backgroundColor:"#000" }}>
                <Typography className="text-primary" variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    <Link style={{textDecoration:"none"}} href="https://theshubham.in"><span className="text-primary">TS.</span></Link>
                </Typography>
          <nav>
            <Link
              variant="button"
              href="#About-Me"
              sx={{ my: 1, mx: 1.5 }}
              style={{textDecoration:"none"}}
            >
                <span className="text-secondary">
              About
              </span>
            </Link>
            <Link
              variant="button"
              href="#My-Works"
              sx={{ my: 1, mx: 1.5 }}
              style={{textDecoration:"none"}}
            >
            <span className="text-secondary">
              Works
              </span>
            </Link>
            <Link
              variant="button"
              href="#Connect-With-Me"
              sx={{ my: 1, mx: 1.5 }}
              style={{textDecoration:"none"}}
            >
            <span className="text-secondary">               
              Connect
              </span>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    )
}
