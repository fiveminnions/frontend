import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";
import "./Feedback.css";
import { connect } from 'react-redux';
import { feedBackActions } from '../_actions';
import { submitFeedBack } from '../_actions/feedback.actions';

class FeedbackForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rating: 1,
            comment: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    onHandleChange(e) {
        this.setState({ comment: e.target.value })
    }

    handleSubmit() {
        const data = {
            rating: this.state.rating,
            comment: this.state.comment
        }
        this.props.submitFeedBack(data);

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
                                        <h3 className="box-title">Feedback</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="container well well-sm">
                                                    <div>
                                                        <div className=" col-md-4">How would you rate the Process of Interview?</div>
                                                        <StarRatingComponent
                                                            name="rate1"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating}
                                                            onStarClick={this.onStarClick.bind(this)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className=" col-md-4">How would you rate the Process of Interview?</div>
                                                        <StarRatingComponent
                                                            name="rate1"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating}
                                                            onStarClick={this.onStarClick.bind(this)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className=" col-md-4">How would you rate the Process of Interview?</div>
                                                        <StarRatingComponent
                                                            name="rate1"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating}
                                                            onStarClick={this.onStarClick.bind(this)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className=" col-md-4">How would you rate the Process of Interview?</div>
                                                        <StarRatingComponent
                                                            name="rate1"
                                                            starCount={5}
                                                            size={100}
                                                            value={rating}
                                                            onStarClick={this.onStarClick.bind(this)}
                                                        />
                                                    </div>
                                                    <div className="col-md-12 row">
                                                        <div className=" col-md-4">Provide your valuble comments:</div>
                                                        <textarea className="col-md-6" colSpan="5" placeholder="Enter your comments" value={this.state.comment} onChange={this.onHandleChange.bind(this)}></textarea>
                                                    </div>
                                                    <div className="col-md-12" style={{ padding: "5px" }}>
                                                        <button className="btn btn-primary" style={{ width: "25%", float: "right" }} onClick={this.handleSubmit.bind(this)}>Save</button>
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


function mapStateToProps(state) {
    const { feedBackData } = state.feedbackReducer;
    return {
        feedBackData
    };
}

export default connect(mapStateToProps, { submitFeedBack })(FeedbackForm);
