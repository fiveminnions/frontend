import React, {Component} from 'react';
import "../../assets/css/_all-skins.min.css";
import "../../assets/css/AdminLTE.css";

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    Menu
                </a>
                <nav className="navbar navbar-static-top">
                <span className="col-md-3 col-md-offset-5" style={{color:"white",fontSize:"22px",paddingTop:"8px"}}>Employee Onboarding</span>
                    <div className="navbar-custom-menu pull-right">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="images/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </header>
        )
    }
}