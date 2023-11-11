import Layout from "@/components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Button from "react-bootstrap/Button";

export default function evernoteClone() {
  return (
    <Layout>
      <style jsx>
        {`
          li strong {
            color: #8be9fd;
          }
        `}
      </style>
      <Container>
        <Row>
          <Col className="text-light">
            <h1 className="display-1 text-lemongrass">Evernote Clone 2023</h1>
            <p className="lead">
              The Evernote Clone project aims to create a simplified version of
              the popular note-taking application, Evernote. The project focuses
              on recreating the core functionalities of Evernote in a
              minimalistic and user-friendly web application.
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
            <hr className="border border-2 border-magenta opacity-100" />
            <h2 className="text-lime">Key Features</h2>
            <p>
              The Evernote Clone project offers several key features, including:
            </p>
            <ul>
              <li>
                <strong>User Authentication:</strong> Users are able to create
                accounts and securely log in to the application, ensuring the
                privacy and security of their notes.
              </li>
              <li>
                <strong>Rich Text Editing:</strong> The integration of EditorJS
                allows users to create notes with advanced formatting options,
                including tables, headings, dividers, lists, and checklists.
                This enhances the versatility and expressiveness of the
                note-taking experience.
              </li>
              <li>
                <strong>Server Security:</strong> The project incorporates
                server-side security measures to restrict access to notes,
                ensuring that each note can only be accessed by its creator.
                This feature protects user data and maintains confidentiality.
              </li>
              <li>
                <strong>Note Sorting:</strong> Users have the ability to sort
                their notes based on various criteria such as date created, date
                updated, or title. This provides flexibility in organizing and
                managing notes effectively.
              </li>
              <li>
                <strong>Mobile Responsiveness:</strong> The Evernote Clone
                application is designed to be mobile-responsive, ensuring that
                it renders properly and offers a seamless experience across
                different devices, including mobile phones and desktops.
              </li>
              <li>
                <strong>CI/CD with GitHub Actions and Firebase Hosting:</strong>{" "}
                The project is set up for Continuous Integration and Continuous
                Deployment (CI/CD) using GitHub Actions. Whenever new changes
                are pushed to the project&apos;s GitHub repository&apos;s main
                branch, GitHub Actions automatically triggers the build,
                testing, and deployment
              </li>
            </ul>
            <p>
              The project utilizes a combination of front-end and back-end
              technologies to achieve its objectives. Let&apos;s explore the
              tools used in each part:
            </p>
            <h2 className="text-lime">Backend</h2>
            <p>
              For the backend, <strong>Firebase</strong> is chosen as the
              hosting solution, providing a reliable and scalable
              infrastructure. Firebase is also used for{" "}
              <strong>authentication</strong>, allowing users to securely access
              their notes. Additionally, <strong>Firestore</strong>, a NoSQL
              database offered by Firebase, is utilized to store and manage the
              notes created by users.
            </p>
            <h2 className="text-lime">Frontend</h2>
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
