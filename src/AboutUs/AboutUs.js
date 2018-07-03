import React from 'react';
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";

export default class AboutUs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fromId: "",
            toId: '',
            subject: "",
            cc: "",
            body:''
        };
    }

    render() {

        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <Menu></Menu>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">About Us</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="container well well-sm">
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-6">To</div>
                                                        <div className=" col-md-6">
                                                            <input type="text" value={this.state.toId} ></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-6">CC</div>
                                                        <div className=" col-md-6">
                                                            <input type="text" value={this.state.cc} ></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-6">Subject</div>
                                                        <div className=" col-md-6">
                                                            <input type="text" value={this.state.subject} ></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-5">Provide your valuble comments:</div>
                                                        <textarea className="col-md-3" placeholder="Enter your comments" value={this.state.body}></textarea>
                                                    </div>
                                                    <div className="col-md-12" style={{ padding: "5px", float: "left" }}>
                                                        <button className="btn btn-primary col-md-5">Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="row">
                                            <div className="col-sm-3 col-xs-6">
                                                <div className="description-block border-right">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>



            </div>
        );
    }

}