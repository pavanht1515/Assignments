import React from "react"

const File3 = () => {
  return (
    <div>
    
      <ul className="sortBy">
         <li><i className="fa-solid fa-arrow-up-short-wide"></i>Sort By</li>
         
         <li><i className="fa-sharp fa-solid fa-filter"></i>Filter By</li>
         <li> <i className="fa-solid fa-magnifying-glass"><input type={"text"}  placeholder="Search Here"></input> </i></li>

      </ul>


    <br/><br/><br/>
    <i className="profile1">
        <img src="./images/profile.jpeg" alt="profile_picture"></img></i>
                Anamika Roy
                <p>Designer</p>
                <i className="profile1"><i>Active</i>
                </i> 
                    


    </div>

  )
};
export default File3;
