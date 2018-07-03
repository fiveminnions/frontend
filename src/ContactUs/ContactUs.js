import React from 'react';
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";

export default class ContactUs extends React.Component {

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

    onHandleToChange(e) {
        this.setState({ toId: e.target.value })
    }

    onHandleSubjectChange(e) {
        this.setState({ subject: e.target.value })
    }

    onHandleCCChange(e) {
        this.setState({ cc: e.target.value })
    }

    onHandleBodyChange(e) {
        this.setState({ body: e.target.value })
    }

    handleSubmit() {

        const data = {
            toId: this.state.toId,
            comment: this.state.comment
        }
        console.log("Data submitted", data)
    }
    render() {
        const { rating } = this.state;

        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <Menu></Menu>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Dashboard</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="container well well-sm">
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-6">To</div>
                                                        <div className=" col-md-6">
                                                            <input type="text" value={this.state.toId} onChange={this.onHandleToChange.bind(this)}></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-6">CC</div>
                                                        <div className=" col-md-6">
                                                            <input type="text" value={this.state.cc} onChange={this.onHandleCCChange.bind(this)}></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-6">Subject</div>
                                                        <div className=" col-md-6">
                                                            <input type="text" value={this.state.subject} onChange={this.onHandleSubjectChange.bind(this)}></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-5">Provide your valuble comments:</div>
                                                        <textarea className="col-md-3" placeholder="Enter your comments" value={this.state.body} onChange={this.onHandleBodyChange.bind(this)}></textarea>
                                                    </div>
                                                    <div className="col-md-12" style={{ padding: "5px", float: "left" }}>
                                                        <button className="btn btn-primary col-md-5" onClick={this.handleSubmit.bind(this)}>Send</button>
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