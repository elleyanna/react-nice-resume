import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;

        return (
          <a
            href={projects.url}
            rel="noopener"
            target="_blank"
            title={projects.title}
          >
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Weird Reddit!</h1>

            <div id="portfolio-wrapper">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
