import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import object from "../../Assets/obj.jpg";
import uberImage from "../../Assets/Projects/uber architecture.jpg";
import tradImage from "../../Assets/trad.jpg";
import taxiImage from "../../Assets/taxi.jpg";
import healthImage from "../../Assets/health.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of machine learning and data engineering work I have built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Multiple Disease Prediction"
              description="Built a machine learning web app to predict diabetes, heart disease, and Parkinson's risk from clinical inputs. Focused on clean UI, reliable inference, and practical healthcare use-cases."
              ghLink="https://github.com/Bhavya1912/ML-WebApp"
              demoLink="https://drive.google.com/drive/folders/1nxW2wrHRpUbEcqDAAhCjSNJ1hoXbAQ3S?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradImage}
              isBlog={false}
              title="Algorithmic Trading Strategies"
              description="Implemented and compared multiple algorithmic trading strategies, with portfolio construction logic and performance-oriented analysis for equal-weight investing."
              ghLink="https://github.com/Bhavya1912/algorithmic-trading/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uberImage}
              isBlog={false}
              title="Uber Data Analytics Pipeline"
              description="Designed an end-to-end analytics pipeline using GCP, Mage, BigQuery, and Looker Studio to transform raw ride data into business-ready dashboards and insights."
              ghLink="https://github.com/Bhavya1912/Uber-data-pipeline-analytics-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={object}
              isBlog={false}
              title="Object Recognition with ResNet50"
              description="Developed an image recognition system using transfer learning with ResNet50 to classify objects with high accuracy on custom image datasets."
              ghLink="https://github.com/Bhavya1912/Object-Recognition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxiImage}
              isBlog={false}
              title="Yellow Taxi Demand Prediction"
              description="Forecasted short-term taxi pickup demand at a 10-minute interval granularity using historical spatio-temporal trends to support smarter fleet allocation."
              ghLink="https://github.com/Bhavya1912/Yellow-Taxi-Demand-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthImage}
              isBlog={false}
              title="Medical Insurance Cost Prediction"
              description="Trained a regression model to estimate medical insurance charges using demographic and behavioral features such as age, BMI, smoking status, and region."
              ghLink="https://github.com/Bhavya1912/Medical-Insurance-Cost-Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
