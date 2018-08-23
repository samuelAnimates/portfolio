import React, { Component } from 'react';
import './TestPage.css';

class TestPage extends Component {
  // Initialize state
  state = { projects: [] }

  // Fetch projects after first mount
  componentWillMount() {
    this.getprojects();
  }

  getprojects = () => {
    // Get the projects and store them in state
    fetch('/api/projects')
        .then(res => res.json())
        .then(res => this.setState({projects: res}));
  }

  render() {
    return (
      <div className="TestPage">
        {/* Render the projects if we have them */}
        {this.state.projects.length!==0 &&
          <div>
            <ul className="projects">
              {this.state.projects.map((project, index) =>
                <li key={index}>
                    {project.shortName}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getprojects}>
              Get More
            </button>
          </div>
        }
        {this.state.projects.length===0 &&
          // Render a helpful message otherwise
          <div>
            <h1>No projects :(</h1>
            <button
              className="more"
              onClick={this.getprojects}>
              Try Again?
            </button>
          </div>
        }
      </div>
    );
  }
}

export default TestPage;