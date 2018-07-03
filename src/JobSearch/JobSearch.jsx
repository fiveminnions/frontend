import React from 'react';
import * as bootstrap from 'react-bootstrap';
import './dataTable.css'
import { loadavg } from 'os';

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
      <div>
        <div className="col-md-12 panel" style={{ height: "50px", border: "1px solid gray" }}>
          <h4>
            <div className="col-md-3">JobId</div>
            <div className="col-md-3">Designation</div>
            <div className="col-md-3">Skills</div>
            <div className="col-md-3">Location</div>
          </h4>
        </div>
        <ul>
          {jobsApplied.jobs.map(function (job) {
            return (
              <li key={job.jobID}>
                <div>
                  <UXComp job={job}></UXComp>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
    );
  }
}


class UXComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1'
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }
  render() {
    return (
      <div>
        <bootstrap.PanelGroup
          accordion
          id="accordion-controlled-example"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <bootstrap.Panel eventKey="1">
            <bootstrap.Panel.Heading>
              <bootstrap.Panel.Title toggle>
                <div className="col-md-3">{this.props.job.jobId}</div>
                <div className="col-md-3">{this.props.job.Designation}</div>
                <div className="col-md-3">{this.props.job.SkillSet}</div>
                <div className="col-md-3">{this.props.job.Location}</div>
               </bootstrap.Panel.Title>
            </bootstrap.Panel.Heading>
            <bootstrap.Panel.Body collapsible>Panel content 1</bootstrap.Panel.Body>
          </bootstrap.Panel>
        </bootstrap.PanelGroup>
      </div>
    )
  }
}