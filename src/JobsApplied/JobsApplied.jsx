import React from 'react';
import * as bootstrap from 'react-bootstrap';
import ShowTimeline from '../Timeline/ShowTimeline'
import Menu from '../Menu/container/Menu'
import "../assets/css/_all-skins.min.css";
import "../assets/css/AdminLTE.css";

const products = [];

const jobsAppliedObj = {
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

export default class JobsApplied extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true

    };
  }



  render() {
    console.log("Applied jobs", jobsAppliedObj)
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)',
      expandAll: true
    };



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
                        <div style={{ marginLeft: "1%" }}>
                          <div className="col-md-12 row" style={{ height: "50px", border: "1px solid #ccc", background: "whitesmoke", borderRadius: "3px", marginBottom: "11px" }}>
                            <h4>
                              <div className="col-md-3">JobId</div>
                              <div className="col-md-3">Designation</div>
                              <div className="col-md-3">Skills</div>
                              <div className="col-md-3">Location</div>
                            </h4>
                          </div>
                          <ul className="row col-md-12" style={{ padding: 0, listStyle: "none" }}>
                            <bootstrap.PanelGroup
                              accordion id="jobList"
                            >
                              {jobsAppliedObj.jobs.map(function (job) {
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


class UXComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: ''
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey: this.props.jobID });
  }
  render() {
    return (
      <div>

        <bootstrap.Panel eventKey={this.props.job.jobID}>
          <bootstrap.Panel.Heading style={{ minHeight: "50px" }}>
            <bootstrap.Panel.Title toggle>
              <div className="col-md-3">{this.props.job.jobID}</div>
              <div className="col-md-3">{this.props.job.Designation}</div>
              <div className="col-md-3">{this.props.job.SkillSet}</div>
              <div className="col-md-3">{this.props.job.Location}</div>
            </bootstrap.Panel.Title>
          </bootstrap.Panel.Heading>
          <bootstrap.Panel.Body collapsible><ShowTimeline /></bootstrap.Panel.Body>
        </bootstrap.Panel>
      </div>
    )
  }
}