import React from 'react'
import { Link} from 'react-router-dom'
// Style
import styled from "styled-components";

const Navbar = ()=>{
        return (
            <Navbarnews>
            <div className="blinking">Get Latest News</div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/top-headlines">Top HeadLines</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </Navbarnews>
        )
}

const Navbarnews = styled.div`
    .navbar {
        background-color: tomato;
        color:white;
    }
    .hed{
        background-color: orange;
        color: black;
        padding: 10px;
        font-weight:bold;
        font-family: "Asap", sans-serif;

        
    }

    .blinking {
            background-color: orange;
            color: black;
            padding: 10px;
            font-weight:bold;
            font-family: "Asap", sans-serif;
             animation: pulsecolor 4s infinite;
             text-align: center;
           }
           
           @keyframes pulsecolor {
             0% {
               color: rgba(245, 0, 0, 1);
             }
             
               25% {
               color: tomato;
             }
             50% {
               color: rgba(245, 0, 0, 1);
             }
               75% {
               color: tomato;
             }
             
               100% {
               color: red;
             }
           }
           
`;


export default Navbar
