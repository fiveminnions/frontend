import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class FeedbackForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rating: 1,
            comment: ''
        };
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
        console.log("Data submitted", data)
    }
    render() {
        const { rating } = this.state;

        return (

            <div  className="container well well-sm">
                <div>
                    <div className=" col-md-5">How would you rate the Process of Interview?</div>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        size={100}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                </div>
                <div className="col-md-12 row">
                <div className=" col-md-5">Provide your valuble comments:</div>
                    <textarea className="col-md-3" placeholder="Enter your comments" value={this.state.comment} onChange={this.onHandleChange.bind(this)}></textarea>
                </div>
                <div className="col-md-12" style={{padding:"5px",float:"left"}}>
                    <button className="btn btn-primary col-md-5" onClick={this.handleSubmit.bind(this)}>Save</button>
                </div>
            </div>

        );
    }

}