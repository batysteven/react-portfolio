import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import work1 from '../../assets/img/work-1.jpg';
import work2 from '../../assets/img/work-2.png';
import work3 from '../../assets/img/work-3.png';
import work4 from '../../assets/img/work-4.png';
import work5 from '../../assets/img/work-5.png';
import work6 from '../../assets/img/work-6.png';
import github from '../../assets/img/github.svg';


function Projects() {

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="project-container">
                        <img src={work1} alt="pizza-hunt" className="project-img" />
                        <div className="project-innards">
                            <a href="https://arcane-bastion-68718.herokuapp.com/" className="text-innards">
                                <h3>Pizza Hunt</h3>
                                <h4>MongoDB/Node</h4>
                            </a>
                            <a href="https://github.com/batysteven/pizza-hunt">
                                <img src={github} alt="github" className="project-github"/>
                            </a>
                        </div>
                    </Col>
                    <Col md="auto" className="project-container">
                        <img src={work2} alt="the-minimal-prepper" className="project-img"/>
                        <div className="project-innards">
                            <a href="https://minimal-prepper.herokuapp.com/" className="text-innards">
                                <h3>The Minimal Prepper</h3>
                                <h4>MySql/Handlebars</h4>
                            </a>
                            <a href="https://github.com/daniwhitlock/the-minimal-prepper">
                                <img src={github} alt="github" className="project-github"/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="project-container">
                        <img src={work3} alt="note-taker" className="project-img" />
                        <div className="project-innards">
                            <a href="https://note-taker-steven.herokuapp.com/" className="text-innards">
                                <h3>Note Taker</h3>
                                <h4>MySql/CSS</h4>
                            </a>
                            <a href="https://github.com/batysteven/note-taker">
                                <img src={github} alt="github" className="project-github"/>
                            </a>
                        </div>
                    </Col>
                    <Col md="auto" className="project-container">
                        <img src={work4} alt="tech-blog" className="project-img" />
                        <div className="project-innards">
                            <a href="https://tech-blog-steven.herokuapp.com/" className="text-innards">
                                <h3>The Tech Blog</h3>
                                <h4>MySql/CSS</h4>
                            </a>
                            <a href="https://github.com/batysteven/tech-blog">
                                <img src={github} alt="github" className="project-github"/>
                            </a>
                        </div>


                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="project-container">
                        <img src={work5} alt="budget-tracker" className="project-img" />
                        <div className="project-innards">
                            <a href="https://stormy-coast-00682.herokuapp.com/" className="text-innards">
                                <h3>Budget Tracker</h3>
                                <h4>MongoDB/PWA</h4>
                            </a>
                            <a href="https://github.com/batysteven/budget-tracker">
                                <img src={github} alt="github" className="project-github"/>
                            </a>
                        </div>


                    </Col>
                    <Col md="auto" className="project-container">
                        <img src={work6} alt="leftovers" className="project-img" />
                        <div className="project-innards">
                            <a href="https://tonganknight.github.io/awesome-sauce/" className="text-innards">
                                <h3>Leftovers</h3>
                                <h4>Javascript/CSS/Node</h4>
                            </a>
                            <a href="https://github.com/tonganknight/awesome-sauce">
                                <img src={github} alt="github" className="project-github"/>
                            </a>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;