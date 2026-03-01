import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import  Wanderstay  from  "../../Assets/Projects/Wanderstay.png";
import  Resume from  "../../Assets/Projects/Resume.png";
import  Netflix from  "../../Assets/Projects/Netflix.png";

import Quickcard  from  "../../Assets/Projects/Quickcard.png";

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
              
              isBlog={false}
              imgPath={Wanderstay}
              title="wanderstay"
              description="WanderStay is a modern travel web application built with React that allows users to explore hotels, read travel blogs, and manage a wishlist. The project uses Redux Toolkit for state management, React Router for navigation, and includes unit testing with Vitest"
              ghLink="https://github.com/priynshu30/wanderstay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
         
              isBlog={false}
              imgPath={Resume}
              title="Online Resume Builder"
              description="On Internet there are hundreds of resume Builder Websites but they all are paid Or loaded with Advertisements and also Time consuming .
But Now On our Website , you can get Free Access to Create wonderful Resumes in Just few minutes .
You will get two HR approved Resume templetes and also you can download Resume in PDF format for free.
It is so easy to create Resume on our website , just Select Templete - Fill details - and your Resume is Ready to download"
              ghLink="https://github.com/priynshu30/Almabetter-Resume-Builder-Capstone-Project-frontend/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              imgPath={Netflix}
              title="Netflix Clone"
              description="Netflix clone using HTML and CSS. It is a static website which is a replica of the original Netflix website. It has features like the search bar, login and signup page, movie details page, and homepage."
              ghLink="https://github.com/priynshu30/NETLFIX-CLONE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quickcard}
              isBlog={false}
              title="QuickCart"
              description="QuickCart is a full-stack eCommerce web application designed and developed as part of my college project. It includes secure authentication, database connectivity, and automated background functions to manage user data efficiently."
              ghLink="https://github.com/priynshu30/QuickCart"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;