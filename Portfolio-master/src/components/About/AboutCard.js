import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Bhavya Tyagi </span>
            from <span className="purple">Ghaziabad, India.</span>
            <br />I am a Computer Science undergraduate with a strong focus on
            machine learning, analytics, and building products powered by data.
            <br />
            I enjoy turning ideas into end-to-end solutions—from model
            development to deployment and performance monitoring.
            <br />
            <br />
            Outside of coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess and strategy games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing technical blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing violin
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Machine learning engineers are architects of the future,
            transforming data into decisions that improve lives."
          </p>
          <footer className="blockquote-footer">Bhavya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
