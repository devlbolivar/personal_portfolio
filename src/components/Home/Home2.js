import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¿QUIEN <span className="main-color"> SOY?</span>
            </h1>

            <p className="home-about-body">
              Soy un desarrollador web con ganas de crear cosas increíbles en la
              web. Me apasiona todo lo relacionado con la programación y estoy
              siempre buscando nuevos desafíos y oportunidades para aprender y
              crecer en mi carrera.
            </p>
            <p className="home-about-body">
              En mi tiempo libre, me gusta estar al día con las últimas
              tendencias y tecnologías del desarrollo web, y también disfruto
              trabajando en proyectos personales y colaborando con la comunidad.
              He tenido la suerte de trabajar en una variedad de proyectos
              interesantes a lo largo de mi carrera, desde sitios web de
              comercio electrónico hasta aplicaciones móviles y sistemas de
              gestión de contenidos. Me encanta poder ayudar a las empresas a
              alcanzar sus objetivos a través de soluciones digitales atractivas
              y eficientes.
            </p>
            <p className="home-about-body">
              Si estás buscando un desarrollador web con ganas de crear cosas
              increíbles, no dudes en echar un vistazo a mi portafolio y
              contactar conmigo. ¡Estaré encantado de charlar contigo!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
              Siéntete libre de <span className="main-color">conectar </span>
              conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
