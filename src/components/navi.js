import React from 'react';

export default function Header() {
    return (
        <nav id="mainNavi">
            <ul id="ulNavi">
                <li class="title">tm-</li>
                <li><a class="item" href="#">Home</a></li>
                <li><a class="item" href="#">About Me</a></li>
                <li class="dropdown">
                    <a href="#" class="dropbtn">Assignments</a>
                    <div class="dropdown-content">
                        <a href="#">Centennial College</a>
                        <a href="#">University of Toronto</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="#"class="dropbtn">Works</a>
                    <div class="dropdown-content">
                        <a href="#">24Our Music</a>
                        <a href="#">Amp the Sound</a>
                        <a href="#">Dollar Gamers</a>
                        <a href="#">Feed My Curiosity</a>
                        <a href="#">Personal Works</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}