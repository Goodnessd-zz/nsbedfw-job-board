import React from 'react';
import {fetchJobPostings} from './apiCalls';
import './JobBoard.css';
import logo from './logo.png'

export default class JobBoard extends React.Component {
  constructor(){
    super();
    const jobPostings = fetchJobPostings();
    this.state = {jobPostings}
  }

  render() {
    const listJobBoardItems = this.state.jobPostings.map(jobPost =>
      <li className="job-board-item" key={jobPost.id}>{jobPost.industry}</li>
    )

    return (
      <div className="job-board">
        <img src={logo} className="nsbe-logo" alt="logo" />
        <h1>NSBEDFW Job Board</h1>
        <div className="job-board-container">
          <ul className="job-board-item-list">{listJobBoardItems}</ul>
        </div>
      </div>
    )
  }
}