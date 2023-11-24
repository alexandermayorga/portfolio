import Layout from "@/components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Head from "next/head";

export default function evernoteClone() {
  return (
    <Layout>
      <Head>
        <title>
          Evernote Clone Project | Alex Mayorga Full Stack JavaScript Developer
          Portfolio
        </title>
        <meta
          name="description"
          content="Explore the Evernote Clone project showcase in Alexander Mayorga's portfolio. This exhibit exemplifies a Full Stack JavaScript Developer's proficiency in utilizing state-of-the-art technologies, including React, Editor.js, React Router, and Firebase solutions such as hosting, NoSQL database Firestore, and Firebase Authentication. Dive into the features and functionality, showcasing a meticulous blend of innovation and functionality in web development by Alexander Mayorga."
        />
        <meta
          name="description"
          content="Explore Evernote Clone—a showcase of Full Stack JavaScript skills, featuring React, Editor.js, Firebase, and innovative web development by Alexander Mayorga."
        />
      </Head>
      <style jsx>
        {`
          li strong {
            color: #8be9fd;
          }
        `}
      </style>

      <Container>
        <Row>
          <Col>
            <div id="project-header">
              <h1 className="display-1 text-lemongrass">Evernote Clone</h1>
              <p className="lead text-light">
                A simplified version of the popular note-taking application,
                Evernote. The project focuses on recreating the core
                functionalities of Evernote in a minimalistic and user-friendly
                web application.
              </p>
              <div id="project-links" className="">
                <Button
                  variant="light"
                  size="lg"
                  className="me-2 mb-2"
                  href="https://evernote-clone-2023.web.app/"
                  target="_blank"
                >
                  <i className="bi-laptop"></i> Demo
                </Button>{" "}
                <Button
                  variant="outline-light"
                  size="lg"
                  className="me-2 mb-2"
                  href="https://github.com/alexandermayorga/evernote-clone-2023"
                  target="_blank"
                >
                  <i className="bi-github"></i> Repo
                </Button>
              </div>
            </div>

            <hr className="border border-2 border-magenta opacity-100" />
          </Col>
        </Row>
        <Row>
          <Col className="text-light">
            {/* <div style={{ height: "30vw" }} className="d-flex">
              <Row className="my-5 align-items-center">
                <Col md={{ span: 5, offset: 1 }}>
                  <h2 className="text-lemongrass display-2">Inspiration</h2>
                </Col>
                <Col md="5">
                  <p className="lead">
                    Being a huge fan of note taking apps like{" "}
                    <Link href="https://evernote.com/" target="_blank">
                      Evernote
                    </Link>{" "}
                    and{" "}
                    <Link href="https://www.notion.so/" target="_blank">
                      Notion
                    </Link>
                    , I decided to replicate one of the tools I use the most to
                    learn what it goes behind building tools such as this.
                  </p>
                </Col>
              </Row>
            </div> */}

            {/* <Row>
              <Col md="6" xs="auto" className="offset-2 text-light mb-5">
                <h2 className="display-1 text-sky border-bottom border-lime border-3 d-inline-block">
                  Project Goals
                </h2>
                <br />
                <h2 className="ms-5 display-1 text-magenta border-bottom border-lemongrass border-3 d-inline-block">
                  and Challenges
                </h2>
              </Col>
            </Row> */}

            {/* <h2 className="text-lemongrass"> </h2> */}
            {/* <ul>
              <li>
                <p>Going beyond a textarea</p>
                <p>
                  From the beginning I wanted the add the ability for users to
                  write more than just plain text inside notes. I like the
                  features other note taking apps have such as headings, tables,
                  checklists, bulleted lists, etc. Hence, I needed to find a
                  tool to help me with this as this will be the main feature
                  towards which the app will revolve {'"'}providing a modern
                  interface for note taking{'"'}
                </p>
              </li>
              <li>
                <p>Authentication</p>
                <p>
                  Another Feature I wanted to implement to make it a more robust
                  application was authentication. Thinking about the app as a
                  more mature project, I decided to add a feature most modern
                  apps utilize.
                </p>
              </li>
            </ul> */}

            <div className="mb-4">
              <h2 className="text-lemongrass display-3">Key Features</h2>
              <p>
                The Evernote Clone project offers several key features,
                including:
              </p>
              <ul>
                <li>
                  <strong>Rich Text Editing:</strong> The integration of
                  EditorJS allows users to create notes with advanced formatting
                  options, including tables, headings, dividers, lists, and
                  checklists. This enhances the versatility and expressiveness
                  of the note-taking experience.
                </li>
                <li>
                  <strong>Note Sorting:</strong> Users have the ability to sort
                  their notes based on various criteria such as date created,
                  date updated, or title. This provides flexibility in
                  organizing and managing notes effectively.
                </li>
                <li>
                  <strong>User Authentication:</strong> Users are able to create
                  accounts and securely log in to the application, ensuring the
                  privacy and security of their notes.
                </li>

                <li>
                  <strong>Server Security:</strong> The project incorporates
                  server-side security measures to restrict access to notes,
                  ensuring that each note can only be accessed by its creator.
                  This feature protects user data and maintains confidentiality.
                </li>

                <li>
                  <strong>Mobile Responsiveness:</strong> The Evernote Clone
                  application is designed to be mobile-responsive, ensuring that
                  it renders properly and offers a seamless experience across
                  different devices, including mobile phones and desktops.
                </li>
                <li>
                  <strong>
                    CI/CD with GitHub Actions and Firebase Hosting:
                  </strong>{" "}
                  The project is set up for Continuous Integration and
                  Continuous Deployment (CI/CD) using GitHub Actions. Whenever
                  new changes are pushed to the project&apos;s GitHub
                  repository&apos;s main branch, GitHub Actions automatically
                  triggers the build, testing, and deployment
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-lemongrass mb-3 display-3">Technologies Used</h2>
              <p>
                The project utilizes a combination of front-end and back-end
                technologies to achieve its objectives. Let&apos;s explore the
                tools used in each part:
              </p>
              <h3 className="text-lime">Backend</h3>
              <Row>
                {/* <Col md={{ span: 3, offset: 1 }} className="text-center">
                  <i
                    className="devicon-firebase-plain-wordmark colored"
                    style={{ fontSize: "8rem" }}
                  ></i>
                </Col> */}
                <Col md="12">
                  <p>
                    For the backend, I chose{" "}
                    <i
                      className="devicon-firebase-plain colored fs-5"
                      // style={{ fontSize: "8rem" }}
                    ></i>
                    <strong className="text-lemongrass">Firebase</strong> as the
                    hosting solution, providing a reliable and scalable
                    infrastructure. Firebase is also used for{" "}
                    <strong className="text-magenta">authentication</strong>,
                    allowing users to securely access their notes. Additionally,{" "}
                    <strong className="text-sky">Firestore</strong>, a NoSQL
                    database offered by Firebase, is utilized to store and
                    manage the notes created by users.
                  </p>
                </Col>
              </Row>
            </div>

            <h3 className="text-lime">Frontend</h3>
            <p>
              The frontend of the project incorporates the following
              technologies and frameworks:
            </p>
            <ul>
              <li>
                <strong>HTML5, CSS3, JavaScript, and Sass:</strong> These web
                technologies form the foundation for creating the user interface
                and styling the application.
              </li>
              <li>
                <strong>Bootstrap 5:</strong> Bootstrap is employed as the CSS
                framework to enhance the visual appearance and responsiveness of
                the application. It provides a set of pre-defined styles and
                components that facilitate rapid development.
              </li>
              <li>
                <strong>React:</strong> The project utilizes React, a popular
                front-end JavaScript library, to build the user interface
                components and handle the application&apos;s state management
                efficiently.
              </li>
              <li>
                <strong>EditorJS:</strong> To enable a more robust editing
                experience, the project integrates EditorJS as a rich text
                editor. EditorJS allows users to create notes with enhanced
                features such as tables, headings, dividers, lists, and
                checklists. You can learn more about EditorJS and its benefits
                at{" "}
                <Link
                  href={"https://editorjs.io"}
                  className="text-magenta"
                  target="_blank"
                >
                  https://editorjs.io
                </Link>
                .
              </li>
              <li>
                <strong>React Router:</strong> The latest version of React
                Router is employed to handle client-side navigation within the
                application. This enables seamless transitions between different
                sections of the app and improves user experience.
              </li>
              <li>
                <strong>TypeScript:</strong> The project incorporates TypeScript
                to enhance code reliability and maintainability. TypeScript
                provides type safety, allowing for easier debugging and reducing
                potential runtime errors.
              </li>
              <li>
                <strong>ViteJS:</strong> Instead of using webpack, which is
                highly popular in react projects, the project utilizes ViteJS
                for front-end tooling. ViteJS is a build tool that focuses on
                fast development and better performance. While webpack is still
                a valid option, ViteJS proved to be fast and easy to work with.
                More information about ViteJS can be found at{" "}
                <Link
                  href={"https://vitejs.dev/"}
                  className="text-magenta"
                  target="_blank"
                >
                  https://vitejs.dev/
                </Link>
                .
              </li>
            </ul>
            <p>
              By leveraging these tools and features, the Evernote Clone project
              aims to provide users with a simplified, yet powerful, note-taking
              application that caters to their organizational and creative
              needs.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
