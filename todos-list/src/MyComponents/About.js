import React from 'react'
import { Link } from 'react-router-dom';

export const About = () => {
     let myStyle2 = {
     minHeight:"83vh",
     margin:"40px auto"
  }
    return (
        <div className="container my-3"  align="left" justify-content="center" style={myStyle2}>
           <h3><span>Hello, I'm Tisha Chauhan</span></h3><br/>
           <h5>🖥️ Final Year Computer Engineer Student</h5>
           <h5>💡 Passionate about<span> front-end web development</span></h5> 
           <h5>🛠️ Skills: HTML, CSS, JavaScript, Bootstrap, React</h5>
           <h5>
           <ul type="none">😄 Topic:
               <li type="none">📈 In this project i have created Todos-List App, </li>
               <li type="none">📈 where you can add new todos, </li>
               <li type="none">📈 that will display and also can delete that added Todos. </li>
            </ul>
            </h5>
          <h5>🔗 <Link to="https://www.linkedin.com/in/tisha-chauhan-29b6ba314">Connect on LinkedIn</Link></h5>
          <h5>📫 <Link to="https://github.com/Tisha-Chauhan123">GitHub.me</Link></h5>
        </div>
    );
} 