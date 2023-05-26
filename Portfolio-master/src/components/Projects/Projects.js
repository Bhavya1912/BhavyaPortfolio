import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import object from "../../Assets/obj.jpg"
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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Multiple Disease Prediction"
              description="This is an ML app for predicting the likelihood of three diseases - diabetes, heart disease, and Parkinson's disease - based on a set of input features. The app uses machine learning algorithms to analyze the input data and provide predictions with high accuracy."
              ghLink="https://github.com/Bhavya1912/ML-WebApp"
              demoLink="https://drive.google.com/drive/folders/1nxW2wrHRpUbEcqDAAhCjSNJ1hoXbAQ3S?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradImage}
              isBlog={false}
              title="Algorithmic Trading Algorithms"
              description="algorithmic trading strategies. Each strategy focuses on a specific investment approach and provides recommendations for constructing an equal-weight portfolio"
              ghLink="https://github.com/Bhavya1912/algorithmic-trading/tree/main"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uberImage}
              isBlog={false}
              title="Uber Data Analytics"
              description="The goal of this project is to perform data analytics on Uber data using various tools and technologies, including GCP Storage, Python, Compute Instance, Mage Data Pipeline Tool, BigQuery, and Looker Studio."
              ghLink="https://github.com/Bhavya1912/Uber-data-pipeline-analytics-"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={object}
              isBlog={false}
              title="Object Recognition"
              description="This is a deep learning project that demonstrates how to use ResNet50 to perform object recognition on images. ResNet50 is a convolutional neural network architecture that has been trained on a large dataset of images, and is capable of identifying objects in images with high accuracy.

              object Recognition using ResNet50 with Transfer Learning. "
              ghLink="https://github.com/Bhavya1912/Object-Recognition"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxiImage}
              isBlog={false}
              title="Yellow Taxi Demand Prediction"
              description="Given previous info about number of pickups in regions, predict the expected number of pickups in the next 10 minute interval."
              ghLink="https://github.com/Bhavya1912/Yellow-Taxi-Demand-Prediction"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthImage}
              isBlog={false}
              title="Medical-Insurance-Cost-Prediction"
              description="This project aims to build a linear regression model to predict the cost of medical insurance based on various factors such as age, BMI, smoking habits, region, and others. The dataset used in this project is publicly available on Kaggle."
              ghLink="https://github.com/Bhavya1912/Medical-Insurance-Cost-Prediction"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
