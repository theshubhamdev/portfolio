import React from "react";
import { Grid } from "@mui/material";
import {
  AiFillHeart
} from "react-icons/ai";
import {SiGithub,SiLinkedin,SiFacebook,SiInstagram} from "react-icons/si";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Grid style={{alignItems:"baseline"}} container>
      <Grid xs={12} sm={12} md={4} item className="text-secondary footer-copywright">
          <h6>Designed and Developed with <span className="red"><AiFillHeart/></span> by Shubham Lakhmani</h6>
        </Grid>
        <Grid xs={12} sm={12} md={4} item className="text-secondary footer-copywright">
          <h6>Copyright © {year} The Shubham</h6>
        </Grid>
        <Grid xs={12} sm={12} md={4} item className="footer-copywright">
          <ul className="footer-icons flex flex-1 flex-row">
            
            <li className="social-icons-footer">
              <a
                href="https://in.linkedin.com/in/shubham-lakhmani-02b3401ba"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
            <li className="social-icons-footer">
              <a
                href="https://github.com/shubham-lakhmani"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
            </li>
            <li className="social-icons-footer">
              <a
                href="https://www.instagram.com/_jordan_rock/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiInstagram />
              </a>
            </li>
            <li className="social-icons-footer">
              <a
                href="https://www.facebook.com/shubhamlakhmani2"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiFacebook />
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
  );
}

export default Footer;