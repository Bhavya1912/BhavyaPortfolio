import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavya Tyagi </span>
            from <span className="purple"> Ghaziabad, India.</span>
            <br /> I am a Third Year student pursuing Bachelor of Technology in Computer Science.
            <br />
            I am driven by the opportunity to contribute to the advancement of machine learning and its application to solve complex problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> palying Chess and Valorant
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Violin
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Machine Learning engineers are the architects of the future, building intelligent systems that can revolutionize industries and improve lives."{" "}
          </p>
          <footer className="blockquote-footer">Bhvaya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
