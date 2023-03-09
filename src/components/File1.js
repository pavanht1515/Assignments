import React from "react"
import stylesheet from './stylesheet.css'



function File1() {

  var hamburger = document.querySelector(".hamburger");
  const App = (props) => {
    React.useEffect(() => {
      hamburger.addEventListener('click', function(){
        document.querySelector("body").classList.toggle("active");
    })
  });
}
  return (
    <div className="wrapper">
      <div className="sidebar">
        <img src={"/images/multikartlogo.png"} ></img>
        <ul>
          <li> <p>MAIN MENU</p></li><br></br><br></br>
          <li>
            <a>
              <span class="icon"><i class="fas fa-dashboard"></i></span>
              <span class="item">Dashboard</span>
            </a>
          </li><br></br><br></br>
          <li>
            <a>
              <span class="icon"><i class="fas fa-user"></i></span>
              <span class="item">User</span>
            </a>
          </li>
        </ul>
      </div>

        <div className="section">
            <div className="top_navbar">
                <div className="hamburger">
                    <a>
                        <i className="fas fa-bars"></i>                        
                    </a>
                </div>
                <div>
                 <img src="./images/profile.jpeg"  className="profile" ></img>
                 <i>pavan</i>
                 <p>super admin</p>
                </div>             
            </div>
        </div>
    </div>
  
  )
}

export default File1;
