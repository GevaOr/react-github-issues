import React, { useState } from "react";
import "./App.css";

function App() {
  const [issues, setIssues] = useState([
    {
      id: "1",
      status: "open",
      title: "title 1",
      tags: ["issue: bug report", "needs triage"],
      author: "name 1",
      openDate: new Date(2020, 10, 20),
      comments: [],
    },
    {
      id: "2",
      status: "open",
      title: "title 2",
      tags: ["issue: needs investigation"],
      author: "name 2",
      openDate: new Date(2020, 10, 19),
      comments: [],
    },
    {
      id: "3",
      status: "open",
      title: "title 3",
      tags: ["issue: proposal"],
      author: "name 3",
      openDate: new Date(2020, 10, 18),
      comments: ["Please do this"],
    },
    {
      id: "4",
      status: "open",
      title: "title 4",
      tags: [],
      author: "name 4",
      openDate: new Date(2020, 10, 17),
      comments: [],
    },
    {
      id: "5",
      status: "closed",
      title: "title 5",
      tags: ["tag: enhancement"],
      author: "name 5",
      openDate: new Date(2020, 10, 16),
      comments: ["please do this", "very good"],
    },
  ]);
  function openIssues(issues) {
    let counter = 0;
    for (let i = 0; i < issues.length; i++) {
      if (issues[i].status === "open") {
        counter++;
      }
    }
    return counter;
  }
  function closedIssues(issues) {
    let counter = 0;
    for (let i = 0; i < issues.length; i++) {
      if (issues[i].status === "closed") {
        counter++;
      }
    }
    return counter;
  }
  return (
    <>
      <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {openIssues(issues)} Open
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {closedIssues(issues)} Closed
                </a>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Author
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Label
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Milestones
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Assignee
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#">
                Sort
              </a>
            </li>
          </ul>
        </nav>
        <div className="issues">
          {issues.map((issue) => {
            let dateStr = `${issue.openDate.getDate()}/${issue.openDate.getMonth()}/${issue.openDate.getFullYear()}`;
            if (issue.status === "open") {
              issue.class = "open-issue";
            } else {
              issue.class = "closed-issue";
            }
            let imgElem;
            if (issue.comments.length > 0) {
              imgElem = (
                <a className="issue-comments">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-mailbox issue-img"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854z"
                    />
                    <path d="M5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                  </svg>
                  {issue.comments.length}
                </a>
              );
            } else {
              imgElem = <span></span>;
            }
            return (
              <div className={issue.class} key={issue.id}>
                <div className="issue-lines">
                  <div className="issue-top-line">
                    <span className="issue-title">{issue.title}</span>
                    <span className="issue-tags">
                      {issue.tags.map((tag) => {
                        let backColor;
                        let textColor = "black";
                        switch (tag) {
                          case "issue: bug report":
                            backColor = "orange";
                            break;
                          case "needs triage":
                            backColor = "red";
                            textColor = "white";
                            break;
                          case "issue: needs investigation":
                            backColor = "RGB(209,6,232)";
                            break;
                          case "issue: proposal":
                            backColor = "yellow";
                            break;
                          case "tag: enhancement":
                            backColor = "blue";
                            textColor = "white";
                        }
                        return (
                          <span
                            className="issue-tag"
                            style={{
                              backgroundColor: backColor,
                              color: textColor,
                            }}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                  <div className="issue-btm-line">
                    #{issue.id} opened {dateStr} by {issue.author}
                  </div>
                </div>
                {imgElem}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
