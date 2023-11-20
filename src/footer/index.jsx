import React from 'react'
import msuLogo from "./assets/msuLogo.png"
import MTIPLogo from "./assets/MTIP_Logo.png"
import techlinkLogo from "./assets/tecklinkLogo.webp"

export default function Footer() {
  return (
    <div>
        <div>
            <h3>Thank you to our sponsors</h3>
            {/* <div>
                <img src={MTIPLogo} alt="MTIP logo" />
                <img src={msuLogo} alt="msu logo" />
                <img src={techlinkLogo} alt="techLink logo" />
            </div> */}
            <div>
                <a href="#headLine">Top</a>
                <a href="#about">About</a>
                <a href="#events">Events</a>
                <a href="#schedule">Schedule</a>
            </div>
            <div>
                <p>
                    The Montana Innovation Partnership (MTIP) is based at Montana State University TechLink Center. We are funded in part through a cooperative agreement with the U.S. Small Business Administration with additional funding from the Montana Department of Commerce
                </p>
            </div>
        </div>
        
    </div>
  )
}