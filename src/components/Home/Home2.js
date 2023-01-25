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
              PERMITEME<span className="purple"> PRESENTARME </span> A MI MISMO
            </h1>

            <p className="home-about-body">
              Me encanta programar, es una de esas cosas que puedo hacer sin que
              me paguen, pero aun así me hace sentir cómodo con un buen sueldo
              &#128516;
              <br />
              Con el tiempo he aprendido a compaginar mi lado artístico, siendo
              músico desde muy joven, con mi lado lógico. Y al fin y al cabo,
              somos creadores, construyendo y reinventando continuamente un
              mundo que requiere conocimiento, pasión, empatía y humanidad.
              <br />
              Disfruto aprendiendo constantemente y aprendiendo rápido, es una
              habilidad que valoro como ingeniero de software, en un campo donde
              todo se actualiza rápidamente. Desde hace 7 años formo parte del
              ejército de programadores que hacen el mundo más intuitivo,
              inclusivo y accesible. Me encanta aplicar buenas prácticas y trato
              de escribir código que sea legible y comprensible para otros
              programadores, es algo que me motiva a buscar mejores y más
              sencillas soluciones. Algunas de mis habilidades son resolver
              problemas, aprender rápido, compartir conocimientos y ayudar a los
              demás. En cuanto a las tecnologías que domino, puedo mencionar
              ReactJs, Typescript, Javascript, React Testing Library, React
              Native, Html, Css, Bootstrap, Material UI, Php, Mysql, PostgreSQL,
              Git y Linux. Disfruto ser parte de equipos cohesionados que
              generan un ambiente de calidad y compañerismo.
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
              Siéntete libre de <span className="purple">conectar </span>conmigo
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
