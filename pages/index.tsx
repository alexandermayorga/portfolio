import Head from "next/head";
import Layout from "@/components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Alex Mayorga | Full Stack JavaScript Developer</title>
        <meta
          name="description"
          content="Alexander Mayorga | Full Stack JavaScript Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Container>
        <Row>
          <Col md="6">
            <div
              style={{ height: "50vh" }}
              className="align-items-center d-flex text-light"
            >
              <Row>
                <Col xs="12">
                  <h1 className="lead fs-1">Hi there! 👋🏻 I{"'"}m Alex</h1>
                </Col>
                <Col xs="12">
                  <h2 className="display-4">
                    <span className="text-sky">Full</span>{" "}
                    <span className="text-magenta me-1">Stack</span>{" "}
                    <span className="text-lemongrass">JavaScript</span>{" "}
                    <span className="">Developer</span>
                  </h2>
                </Col>
                <Col xs="12">
                  <p className="fs-5">
                    I thrive on transforming code into captivating digital
                    experiences. With a creative mindset and a penchant for
                    thinking outside the box, I craft custom website solutions
                    that blend functionality and artistry.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md="6">
            <div>
              <h3 className="text-light">Experience</h3>
              <Row>
                <Col md="12">
                  <Card bg="transparent" text="light" className="mb-3">
                    <Card.Body>
                      <Card.Title className="mb-2">
                        Lead Front End Web Developer · 3 Men Movers
                      </Card.Title>
                      <Card.Subtitle className="mb-2">
                        July 2017 - May 2023
                      </Card.Subtitle>
                      <Card.Text>
                        During my time at 3 Men Movers, I had the opportunity to
                        contribute significantly to our digital projects. I was
                        responsible for the successful deployment of our Online
                        Booking tool, collaborating closely with diverse teams.
                        Additionally, I worked on UX/UI enhancements, website
                        optimizations, and email template management. It was a
                        collaborative effort that I am proud to have been a part
                        of.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Card bg="transparent" text="light" className="mb-3">
                    <Card.Body>
                      <Card.Title>
                        Dealerwebb Services · Front End Web Developer
                      </Card.Title>
                      <Card.Subtitle>November 2015 - June 2017</Card.Subtitle>
                      <Card.Text>
                        During my time at Dealerwebb Services, I had the
                        opportunity to collaborate on various web projects. I
                        focused on client websites, employing WordPress and
                        Twitter Bootstrap, and developed an internal web tool
                        that significantly streamlined email creation processes,
                        reducing the time by half. I took pride in enhancing our
                        clients
                        {"'"}
                        online presence while optimizing our internal workflow
                        for increased efficiency.
                      </Card.Text>
                      <Badge pill bg="light" text="dark" className="me-2">
                        Wordpress
                      </Badge>
                      <Badge pill bg="light" text="dark" className="me-2">
                        Javascript
                      </Badge>
                      <Badge pill bg="light" text="dark" className="me-2">
                        CSS
                      </Badge>
                      <Badge pill bg="light" text="dark" className="me-2">
                        CMS
                      </Badge>
                      <Badge pill bg="light" text="dark" className="me-2">
                        Bootstrap
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Card bg="transparent" text="light" className="mb-3">
                    <Card.Body>
                      <Card.Title>White Shark Media · Web Developer</Card.Title>
                      <Card.Subtitle>December 2013 - June 2015</Card.Subtitle>
                      <Card.Text>
                        During my tenure at the digital marketing agency, I
                        crafted visually appealing websites from concept to
                        launch. I specialized in WordPress and CMS systems,
                        adeptly integrating third-party solutions like Google
                        Analytics and AdWords for data-driven insights. I
                        thrived in troubleshooting, content updates, maintenance
                        tasks, and plugin installations, ensuring optimal user
                        experiences and measurable outcomes.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container> */}

      {/* INTRO */}
      <Container className="text-light">
        <div style={{ height: "70vh" }} className="align-items-center d-flex">
          <Row>
            <Col xs="12">
              <h1 className="lead fs-1">Hi there! 👋🏻 I{"'"}m Alex</h1>
            </Col>
            <Col xs="12">
              <h2 className="display-4">
                <span className="text-sky">Full</span>{" "}
                <span className="text-magenta me-1">Stack</span>{" "}
                <span className="text-lemongrass">JavaScript</span>{" "}
                <span className="">Developer</span>
              </h2>
            </Col>
            <Col xs="12">
              <p className="fs-5">
                I thrive on transforming code into captivating digital
                experiences. With a creative mindset and a penchant for thinking
                outside the box, I craft custom website solutions that blend
                functionality and artistry.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      {/* EXPERIENCE */}
      <Container>
        <h2 className="text-light mb-3">Experience</h2>
        <Row>
          <Col md="9" className="offset-1">
            <Card bg="transparent" text="light" className="mb-3">
              <Card.Body>
                <Card.Title className="mb-2">
                  <span className="text-sky">Lead Front End Web Developer</span>{" "}
                  · <span className="text-lemongrass"> 3 Men Movers</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-magenta">
                  July 2017 - May 2023
                </Card.Subtitle>
                <Card.Text>
                  During my time at 3 Men Movers, I had the opportunity to
                  contribute significantly to our digital projects. I was
                  responsible for the successful deployment of our Online
                  Booking tool, collaborating closely with diverse teams.
                  Additionally, I worked on UX/UI enhancements, website
                  optimizations, and email template management. It was a
                  collaborative effort that I am proud to have been a part of.
                </Card.Text>
                <div>
                  <Badge pill bg="success" text="light" className="me-2">
                    Wordpress
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    Javascript
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    CSS
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    CMS
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    Bootstrap
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="9" className="offset-md-2">
            <Card bg="transparent" text="light" className="mb-3">
              <Card.Body>
                <Card.Title>
                  <span className="text-sky">Front End Web Developer</span> ·{" "}
                  <span className="text-lemongrass">Dealerwebb Services</span>
                </Card.Title>
                <Card.Subtitle className="text-magenta">
                  November 2015 - June 2017
                </Card.Subtitle>
                <Card.Text>
                  During my time at Dealerwebb Services, I had the opportunity
                  to collaborate on various web projects. I focused on client
                  websites, employing WordPress and Twitter Bootstrap, and
                  developed an internal web tool that significantly streamlined
                  email creation processes, reducing the time by half. I took
                  pride in enhancing our clients
                  {"'"}
                  online presence while optimizing our internal workflow for
                  increased efficiency.
                </Card.Text>
                <div>
                  <Badge pill bg="success" text="light" className="me-2">
                    Wordpress
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    Javascript
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    CSS
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    CMS
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    Bootstrap
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="9" className="offset-md-1">
            <Card bg="transparent" text="light" className="mb-3">
              <Card.Body>
                <Card.Title>
                  <span className="text-sky">Web Developer</span> ·{" "}
                  <span className="text-lemongrass">White Shark Media</span>
                </Card.Title>
                <Card.Subtitle className="text-magenta">
                  December 2013 - June 2015
                </Card.Subtitle>
                <Card.Text>
                  During my tenure at the digital marketing agency, I crafted
                  visually appealing websites from concept to launch. I
                  specialized in WordPress and CMS systems, adeptly integrating
                  third-party solutions like Google Analytics and AdWords for
                  data-driven insights. I thrived in troubleshooting, content
                  updates, maintenance tasks, and plugin installations, ensuring
                  optimal user experiences and measurable outcomes.
                </Card.Text>
                <div>
                  <Badge pill bg="success" text="light" className="me-2">
                    Wordpress
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    Javascript
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    CSS
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    CMS
                  </Badge>
                  <Badge pill bg="success" text="light" className="me-2">
                    Bootstrap
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* PROJECTS */}
      <Container>
        {/* 
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        */}
        {/* <Row className="justify-content-end">
          <Col md="6">
            <Card>
              <Row>
                <Col md="4">
                  <Card.Img variant="top" src="holder.js/100px180" />
                </Col>
                <Col md="8">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card{"'"}s content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </Layout>
  );
}
