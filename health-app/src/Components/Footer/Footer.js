import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
        <footer>
<div class="footer">
<div class="row">
<a href="#"><FacebookIcon/></a>
<a href="#"><InstagramIcon/></a>
<a href="#"><TwitterIcon/></a>
</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="row">
Gold Gym Copyright © 2023 Gold Gym - All rights reserved || Designed By: Arun Anand 
</div>
</div>
</footer>
    </div>
  )
}

export default Footer