import Head from "next/head";
import Layout from "@/components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Link from "next/link";
// import styles from '@/styles/Home.module.css'

export default function Home() {
  function badgesRepeater(items: string[], bg: string = "lime") {
    return items.map((item, index) => (
      <Badge key={index} pill text="dark" className={`me-2 bg-${bg}`}>
        {item}
      </Badge>
    ));
  }

  return (
    <Layout>
      <Head>
        <title>
          Alex Mayorga | Full Stack JavaScript Developer | Online Portfolio
        </title>
        <meta
          name="description"
          content="Alexander Mayorga | Full Stack JavaScript Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* INTRO */}
      <Container className="text-light">
        <div style={{ height: "70vh" }} className="d-flex align-items-center">
          <Row className="align-items-lg-center">
            <Col lg="6">
              <h1 className="lead fs-1">
                Hi there!{" "}
                <span className="d-inline-block animate-wave">👋🏻</span> I{"'"}m
                Alex
              </h1>
              <h2 className="display-3">
                {/* {"{ "} <br /> */}
                <span className="text-magenta">Full</span>{" "}
                <span className="text-sky">Stack</span>{" "}
                <span className="text-lemongrass">JavaScript</span>{" "}
                <span className="">Developer</span>
                {/* <br />{" }"} */}
              </h2>
              <div className="mb-2">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/alex-mayorga/"
                  className="text-lime text-decoration-none fs-2 me-3 d-inline-block animate-levitate"
                  title="LinkedIn"
                >
                  <i className="devicon-linkedin-plain"></i>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/alexandermayorga"
                  title="Github"
                  className="text-lime text-decoration-none fs-2 d-inline-block animate-levitate"
                >
                  <i className="devicon-github-plain"></i>
                </Link>
              </div>
            </Col>
            <Col lg="6">
              <p className="fs-4">
                I thrive on transforming {"<"}
                <span className="text-magenta">code</span>
                {"/>"} into captivating{" "}
                <span className="text-lemongrass">digital experiences</span> .
                With a creative mindset and a penchant for thinking{" "}
                <span className="d-inline-block animate-glow fs-3">🧠</span>{" "}
                outside the <span className="text-sky">[</span>{" "}
                <span className="text-violet">box</span>{" "}
                <span className="text-sky">]</span>, I craft custom website
                solutions that blend{" "}
                <span className="text-magenta">functionality</span>{" "}
                <span className="d-inline-block animate-spin fs-3">⚙️</span> and{" "}
                <span className="text-lime">artistry</span>{" "}
                <span className="fs-3">
                  🎨<span className="d-inline-block animate-swing">🖌️</span>
                </span>
                .
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      {/* EXPERIENCE */}
      <Container className="mb-5">
        <Row>
          <Col lg="5" xl="3">
            <h2 className="display-2 text-lemongrass mb-3">Experience</h2>
          </Col>
          <Col lg="7" xl="9">
            <Row>
              <Col lg="10" className="offset-lg-1">
                <Card
                  bg="transparent"
                  text="light"
                  className="mb-3 border-violet border-2 border"
                >
                  <Card.Body>
                    <Card.Title className="mb-2">
                      <span className="text-lemongrass me-1">
                        Lead Front End Web Developer
                      </span>{" "}
                      @ <span className="text-sky ms-1">3 Men Movers</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-magenta">
                      July 2017 - May 2023
                    </Card.Subtitle>
                    <Card.Text>
                      During my time at 3 Men Movers, I had the opportunity to
                      contribute significantly to our digital projects. I was
                      responsible for the successful deployment of our Online
                      Booking tool for moving and packing reservations,
                      collaborating closely with diverse teams. Additionally, I
                      worked on UX/UI enhancements, website optimizations, and
                      email template management. It was a collaborative effort
                      that I am proud to have been a part of.
                    </Card.Text>
                    <div>
                      {badgesRepeater([
                        "Wordpress",
                        "Javascript",
                        "CSS",
                        "Bootstrap",
                        "Google Maps APIs",
                        "WooCommerce",
                        "PHP",
                        "MySQL",
                        "Git",
                        "Gitlab",
                        "Strapi",
                      ])}
                    </div>
                    <Link
                      href="https://www.3menmovers.com"
                      target="_blank"
                      className="stretched-link"
                    ></Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="10" className="offset-lg-2">
                <Card
                  bg="transparent"
                  text="light"
                  className="mb-3 border-violet border-2 border"
                >
                  <Card.Body>
                    <Card.Title>
                      <span className="text-lemongrass me-1">
                        Front End Web Developer
                      </span>{" "}
                      @{" "}
                      <span className="text-sky ms-1">Dealerwebb Services</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-magenta">
                      November 2015 - June 2017
                    </Card.Subtitle>
                    <Card.Text>
                      During my time at Dealerwebb Services, I had the
                      opportunity to collaborate on various web projects. I
                      focused on client websites, employing WordPress and
                      Twitter Bootstrap, and developed an internal web tool that
                      significantly streamlined email creation processes,
                      reducing the time by half. I took pride in enhancing our
                      clients
                      {"'"}
                      online presence while optimizing our internal workflow for
                      increased efficiency.
                    </Card.Text>
                    <div>
                      {badgesRepeater([
                        "Wordpress",
                        "Javascript",
                        "CSS",
                        "CMS",
                        "Bootstrap",
                      ])}
                    </div>
                  </Card.Body>
                  <Link
                    href="https://dealerwebb.com/"
                    target="_blank"
                    className="stretched-link"
                  ></Link>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="10" className="offset-lg-1">
                <Card
                  bg="transparent"
                  text="light"
                  className="mb-3 border-violet border-2 border"
                >
                  <Card.Body>
                    <Card.Title>
                      <span className="text-lemongrass me-1">
                        Web Developer
                      </span>{" "}
                      @ <span className="text-sky ms-1">White Shark Media</span>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-magenta">
                      December 2013 - June 2015
                    </Card.Subtitle>
                    <Card.Text>
                      During my tenure at the digital marketing agency, I
                      crafted visually appealing websites from concept to
                      launch. I specialized in WordPress and CMS systems,
                      adeptly integrating third-party solutions like Google
                      Analytics and AdWords for data-driven insights. I thrived
                      in troubleshooting, content updates, maintenance tasks,
                      and plugin installations, ensuring optimal user
                      experiences and measurable outcomes.
                    </Card.Text>
                    <div>
                      {badgesRepeater([
                        "Wordpress",
                        "Javascript",
                        "CSS",
                        "CMS",
                        "Bootstrap",
                        "Google Analytics",
                        "Call Tracking",
                      ])}
                    </div>
                    <Link
                      href="https://www.whitesharkmedia.com/"
                      target="_blank"
                      className="stretched-link"
                    ></Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/******************* SOF: PROJECTS *******************/}
      <Container id="projects">
        <Row>
          <Col md="6" xs="auto" className="offset-2 text-light mb-5">
            <h2 className="display-1 text-sky border-bottom border-lime border-3 d-inline-block">
              Projects
            </h2>
            <br />
            <h2 className="ms-5 display-1 text-magenta border-bottom border-lemongrass border-3 d-inline-block">
              Showcase
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md="8" xl="8" className="project mb-md-5 mt-2 offset-md-1">
            <Card
              bg="transparent"
              text="light"
              className="mb-3 border-violet border-2 border"
            >
              {/* <Card.Img variant="top" src="holder.js/100px350" /> */}
              <Card.Body>
                <Card.Title className="mb-2 text-lemongrass h5" as="h3">
                  Evernote Clone
                </Card.Title>
                <Card.Text>
                  The Evernote Clone project is a user-friendly web application
                  that recreates the essential features of Evernote. Powered by
                  Firebase, React, and EditorJS, it enables users to create and
                  manage notes with rich text editing capabilities. The project
                  ensures server security, supports note sorting, and offers
                  seamless mobile responsiveness. It also leverages CI/CD
                  through GitHub Actions for automated deployment to Firebase
                  Hosting, enabling frequent and reliable updates.
                </Card.Text>
                <div>
                  {badgesRepeater(
                    [
                      "React",
                      "Javascript",
                      "CSS",
                      "Sass",
                      "Bootstrap",
                      "EditorJS",
                      "React Router",
                      "TypeScript",
                      "Firebase",
                      "Git",
                      "Github",
                      "ViteJS",
                    ],
                    "lime"
                  )}
                </div>
                <Link
                  href="/projects/evernote-clone"
                  className="stretched-link"
                ></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" xl="7" className="project mb-md-3">
            <Card
              bg="transparent"
              text="light"
              className="mb-3 border-violet border-2 border"
            >
              {/* <Card.Img variant="top" src="holder.js/100px350" /> */}
              <Card.Body>
                <Card.Title className="mb-2 text-lemongrass h5" as="h3">
                  Web Crawler for Animal Shelters
                </Card.Title>
                <Card.Text>
                  This project builds a centralized platform that consolidates
                  animal data from multiple shelter websites, simplifying the
                  pet adoption process for local users. Using Node.js, Express,
                  React, and Next.js, it employs web scraping, MongoDB storage,
                  and TypeScript for enhanced development. With Bootstrap 5 for
                  responsive design and a CI/CD strategy, the platform offers a
                  user-friendly interface, API endpoints, and optimized
                  performance for efficient pet search and adoption.
                </Card.Text>
                <div>
                  {badgesRepeater(
                    [
                      "NodeJS",
                      "Express",
                      "React",
                      "NextJS",
                      "TypeScript",
                      "Axios",
                      "CheerioJS",
                      "MongoDB",
                      "Mongoose",
                      "CSS",
                      "Sass",
                      "PurgeCSS",
                      "Bootstrap",
                      "Git",
                      "Github",
                    ],
                    "lime"
                  )}
                </div>
                <Link
                  href="/projects/pet-scraper"
                  className="stretched-link"
                ></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" xl="5" className="project mt-md-5">
            <Card
              bg="transparent"
              text="light"
              className="mb-3 mt-md-5 border-violet border-2 border"
            >
              {/* <Card.Img variant="top" src="holder.js/100px350" /> */}
              <Card.Body>
                <Card.Title className="mb-2 text-lemongrass h5" as="h3">
                  Online Booking Tool
                </Card.Title>
                <Card.Text>
                  Transforming the moving experience, our Online Booking Web
                  Application offers seamless scheduling, allowing users to
                  choose trustworthy movers and plan up to six months in
                  advance. Leveraging CRM APIs, the platform delivers real-time
                  data on mover availability. Intuitive interfaces, personalized
                  options, and automated communication simplify the moving
                  process. Developed with HTML5, CSS3, JavaScript, and Google
                  Maps API, it ensures operational efficiency, reliability, and
                  exceptional user satisfaction, reshaping industry practices.
                </Card.Text>
                <div>
                  {badgesRepeater(
                    [
                      "Wordpress",
                      "Javascript",
                      "CSS",
                      "Bootstrap",
                      "Google Maps APIs",
                      "PHP",
                      "MySQL",
                      "Git",
                      "Gitlab",
                      "Strapi",
                    ],
                    "lime"
                  )}
                </div>
                <Link
                  href="/projects/online-booking"
                  className="stretched-link"
                ></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
