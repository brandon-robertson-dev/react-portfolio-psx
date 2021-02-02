<BrowserRouter>
  <div class="topnav" >
    <Link to='/' class="active" ><img src={nameIcon} height="30" alt="Home"></img></Link>
    {/* <li><Link to='/loading'>Loading</Link></li> */}
    <div id="myLinks">
      <Link to='/aboutme'><img src={aboutIcon} height="40" alt="About"></img></Link>
      <Link to='/contact'><img src={contactIcon} height="40" alt="Contact"></img></Link>
      <Link to='/projects'><img src={projectsIcon} height="40" alt="Projects"></img></Link>
    </div>
    <a href="javascript:void(0)" class="icon" >
      <i class="fa fa-bars"></i>
    </a>
  </div>
  
</BrowserRouter>