import React, { Component } from 'react';
import './TestPage.css';

class TestPage extends Component {
  // Initialize state
  state = { projects: [] }

  // Fetch projects after first mount
  componentDidMount() {
    this.getprojects();
  }

  getprojects = () => {
    // Get the projects and store them in state
    fetch('/api/projects')
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="TestPage">
        {/* Render the projects if we have them */}
        {projects.length ? (
          <div>
            <ul className="projects">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of projects, and they never
                change positions in the array.
              */}
              {projects.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getprojects}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No projects :(</h1>
            <button
              className="more"
              onClick={this.getprojects}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default TestPage;