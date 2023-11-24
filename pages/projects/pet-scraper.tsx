import Layout from "@/components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Head from "next/head";

export default function petScraper() {
  return (
    <Layout>
      <Head>
        <title>
          Pet Scraper Project | Alex Mayorga Full Stack JavaScript Developer
          Portfolio
        </title>
        {/* <meta
          name="description"
          content="Explore the Pet Scraper project in Alexander Mayorga's portfolio, showcasing advanced web development techniques. This project employs Cheerio for scraping and processing animal data, a MongoDB database for efficient storage, and a React, Next.js, TypeScript, and Bootstrap 5 front-end for a user-friendly interface. Experience the benefits of TypeScript, including type safety, developer tooling, improved error handling, and performance optimization with PurgeCSS. Discover API endpoints, detailed documentation, and a robust CI/CD strategy for seamless testing and deployment."
        /> */}
        <meta
          name="description"
          content="Explore Pet Scraper—a showcase of advanced web development techniques by Alexander Mayorga. Features TypeScript, MongoDB, React, and a robust CI/CD strategy."
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
          <Col className="text-light">
            <h1 className="display-1 text-lemongrass">Pet Scraper</h1>
            <p className="lead">
              The goal of this project is to create a centralized platform that
              aggregates animal data from multiple animal shelters&apos;
              websites, facilitating the search for dogs and cats for potential
              local pet owners. The project aims to provide a user-friendly
              interface where users can easily find and adopt pets in their
              local area.
            </p>
            <div id="project-links" className="">
              <Button
                variant="light"
                size="lg"
                className="me-2 mb-2"
                href="https://petscraper-client.vercel.app/"
                target="_blank"
              >
                <i className="bi-laptop"></i> Demo
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="me-2 mb-2"
                href="https://github.com/alexandermayorga/petscraper"
                target="_blank"
              >
                <i className="bi-github"></i> Repo - Server
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                className="mb-2"
                href="https://github.com/alexandermayorga/petscraper-client"
                target="_blank"
              >
                <i className="bi-github"></i> Repo - Client
              </Button>
            </div>
            <hr className="border border-2 border-magenta opacity-100" />
            <h2 className="text-lemongrass display-3">Key Features</h2>
            <ul>
              <li>
                <strong>Scraping and Data Processing:</strong> The back-end of
                the site is responsible for scraping animal data from various
                animal shelters&apos; websites using Cheerio. It processes,
                filters, and organizes the data, ensuring it is ready for
                display on the front-end.
              </li>
              <li>
                <strong>Centralized Database:</strong> The scraped animal data
                is stored in a MongoDB database using Mongoose for efficient and
                schema-based data modeling.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> The front-end, built
                with React, Next.js, TypeScript, and Bootstrap 5, provides an
                intuitive user interface where potential pet owners can easily
                search for dogs and cats based on different criteria such as
                breed, age, and gender.
              </li>
              <li>
                <strong>Type Safety:</strong> TypeScript brings static typing to
                the development process, enhancing code quality and providing
                early detection of potential errors. It improves maintainability
                and collaboration in larger codebases.
              </li>
              <li>
                <strong>Developer Tooling:</strong> TypeScript offers features
                like autocompletion, intelligent code navigation, and
                refactoring tools, improving developer productivity and reducing
                debugging time.
              </li>
              <li>
                <strong>Improved Error Handling:</strong> TypeScript catches
                common errors during the development phase, reducing runtime
                errors and providing more robust error handling in the
                application.
              </li>
              <li>
                <strong>Performance Optimization:</strong> PurgeCSS is employed
                to remove unused CSS from the project, reducing the CSS build
                files{"'"} size and improving loading times.
              </li>
              <li>
                <strong>API Endpoints:</strong> The back-end server provides an
                API for data consumption. It exposes several endpoints that
                allow users to retrieve specific data and customize their search
                options. Detailed documentation regarding data fetching from
                these API endpoints can be found in the &quot;API&quot; section
                on the live site:{" "}
                <Link
                  href={"https://petscraper-client.vercel.app/documentation"}
                  className="text-magenta"
                  target="_blank"
                >
                  https://petscraper-client.vercel.app/documentation
                </Link>
                .
              </li>
              <li>
                <strong>CI/CD Strategy:</strong> The project follows a
                continuous integration and continuous deployment (CI/CD)
                strategy, ensuring that changes are thoroughly tested and
                deployed efficiently.
              </li>
            </ul>
            <p>
              The project utilizes a combination of front-end and back-end
              technologies to achieve its objectives. Let&apos;s explore the
              tools used in each part:
            </p>
            <h2 className="text-lemongrass mb-3 display-3">Technologies Used</h2>
            <h3 className="text-lime">Backend</h3>
            <ul>
              <li>
                <strong>Node.js:</strong> A JavaScript runtime environment used
                for server-side development.
              </li>
              <li>
                <strong>Express:</strong> A web application framework for
                handling HTTP requests and responses.
              </li>
              <li>
                <strong>Cheerio:</strong> A library for extracting data from
                HTML and XML documents.
              </li>
              <li>
                <strong>MongoDB:</strong> A popular NoSQL document-oriented
                database used for storing the scraped animal data.
              </li>
              <li>
                <strong>Mongoose:</strong> An Object Data Modeling (ODM) library
                for MongoDB, providing schema-based data modeling.
              </li>
            </ul>
            <h3 className="text-lime">Frontend</h3>
            <ul>
              <li>
                <strong>React:</strong> A JavaScript library for building user
                interfaces.{" "}
              </li>
              <li>
                <strong>Next.js:</strong> A powerful framework built on top of
                React, providing features like routing, image optimization, and
                server-side rendering (SSR) for improved SEO leverage.
              </li>
              <li>
                <strong>TypeScript:</strong> A typed superset of JavaScript that
                brings static typing and compile-time checks to the development
                process. TypeScript enhances code quality, provides improved
                developer tooling, and reduces runtime errors.
              </li>
              <li>
                <strong>Axios:</strong> A library used for making HTTP requests
                from the front-end to the back-end APIs.
              </li>
              <li>
                <strong>Bootstrap 5:</strong> A widely-used CSS framework that
                provides pre-built components and a responsive grid system for
                easier and faster front-end development.
              </li>
              <li>
                <strong>PurgeCSS:</strong> A tool utilized to remove unused CSS
                from the project, reducing the CSS build files{"'"} size and
                improving performance.
              </li>
            </ul>

            <p>
              By leveraging Node.js, Express, Cheerio, MongoDB, Mongoose, React,
              Next.js, TypeScript, Axios, Bootstrap 5, PurgeCSS, and a robust
              CI/CD strategy, this web project aims to streamline the pet
              adoption process by aggregating animal data from various
              shelters&apos; websites, providing a centralized platform for
              potential local pet owners to find their ideal pets while
              benefiting from the advantages of TypeScript in terms of type
              safety, code quality, and developer productivity.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
