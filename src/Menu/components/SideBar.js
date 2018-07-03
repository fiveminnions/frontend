import React, { Component } from 'react';
import "../../assets/css/_all-skins.min.css";
import "../../assets/css/AdminLTE.css";

export default class SideBar extends Component {
    render() {
        return (
            <aside className="main-sidebar" style={{ minHeight: "974px" }}>
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="images/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Maria</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li>
                            <a href="/jobsApplied">
                                <i className="fa fa-calendar"></i> <span>Jobs Applied</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/feedback">
                                <i className="fa fa-envelope"></i> <span>Feedback</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/contactus">
                                <i className="fa fa-envelope"></i> <span>Contact Us</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/aboutus">
                                <i className="fa fa-building-o"></i> <span>About Us</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}
