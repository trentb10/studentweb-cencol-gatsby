import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
    return (
        <nav id="mainNavi">
            <ul id="ulNavi">
                <li class="title">tm-</li>
                <li><Link to="/"><div class="item" href="#">Home</div></Link></li>
                <li><Link to="/"><div class="item" href="#">About Me</div></Link></li>
                <li class="dropdown">
                    <Link to="/assignments"><div href="#" class="dropbtn">Assignments</div></Link>
                    <div class="dropdown-content">
                        <Link to=""><div href="#">Centennial College</div></Link>
                        <Link to=""><div href="#">University of Toronto</div></Link>
                    </div>
                </li>
                <li class="dropdown">
                    <Link to="/"><div id="mainNavi" class="dropbtn">Works</div></Link>
                    <div class="dropdown-content">
                        <Link to=""><div href="#">24Our Music</div></Link>
                        <Link to=""><div href="#">Amp the Sound</div></Link>
                        <Link to=""><div href="#">Dollar Gamers</div></Link>
                        <Link to=""><div href="#">Feed My Curiosity</div></Link>
                        <Link to=""><div href="#">Personal Works</div></Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

/**
 * 
 * trentb10 (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
 * 
 */