import React from 'react';
import * as bootstrap from 'react-bootstrap';
import ShowTimeline from '../Timeline/ShowTimeline'

const products = [];

const jobsApplied = {
  jobs: [{
    jobID: "1",
    Designation: 'Band 4',
    SkillSet: 'java , Spring boot',
    Location: 'OTP- Chennai'
  },
  {
    jobID: "2",
    Designation: 'Band 5',
    SkillSet: 'javaScript , React',
    Location: 'OTP- Chennai'
  }]
}

export default class ExpandRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true

    };
  }



  render() {
    console.log("Applied jobs", jobsApplied)
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)',
      expandAll: true
    };



    return (
      <div style={{marginLeft:"1%"}}>
        <div className="col-md-12 row" style={{ height: "50px", border: "1px solid #ccc",background:"whitesmoke",borderRadius:"3px",marginBottom:"11px" }}>
          <h4>
            <div className="col-md-3">JobId</div>
            <div className="col-md-3">Designation</div>
            <div className="col-md-3">Skills</div>
            <div className="col-md-3">Location</div>
          </h4>
        </div>
        <ul className="row col-md-12" style={{padding:0,listStyle:"none"}}>
        <bootstrap.PanelGroup
          accordion id="jobList"
        >
          {jobsApplied.jobs.map(function (job) {
            return (
              <li key={job.jobID}>
                <div>
                  <UXComp job={job}></UXComp>
                </div>
              </li>
            )
          })}
</bootstrap.PanelGroup>
        </ul>
      </div>
    );
  }
}


class UXComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: ''
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey : this.props.jobID });
  }
  render() {
    return (
      <div>
        
          <bootstrap.Panel eventKey={this.props.job.jobID}>
            <bootstrap.Panel.Heading style={{minHeight:"50px"}}>
              <bootstrap.Panel.Title toggle>
                <div className="col-md-3">{this.props.job.jobID}</div>
                <div className="col-md-3">{this.props.job.Designation}</div>
                <div className="col-md-3">{this.props.job.SkillSet}</div>
                <div className="col-md-3">{this.props.job.Location}</div>
               </bootstrap.Panel.Title>
            </bootstrap.Panel.Heading>
            <bootstrap.Panel.Body collapsible><ShowTimeline/></bootstrap.Panel.Body>
          </bootstrap.Panel>
      </div>
    )
  }
}