import Layout from "@/components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Head from "next/head";

export default function onlineBooking() {
  return (
    <Layout>
      <Head>
        <title>
          Online Booking Tool Project | Alexander Mayorga Full Stack Developer
          Portfolio
        </title>
        <meta
          name="description"
          content="Explore the Online Booking Tool project by Alexander Mayorga, showcasing full-stack development expertise, A/B testing, and seamless API integration for enhanced functionality."
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
            <h1 className="display-1 text-lemongrass">Online Booking Tool</h1>
            <p className="lead">
              In my role as the Lead Front-End Developer for{" "}
              <Link
                href="https://3menmovers.com"
                className="text-magenta"
                target="_blank"
              >
                3 Men Movers
              </Link>
              , I took charge of the company&apos;s website and Online Booking
              Tool. The objective was to enhance user experience and increase
              conversion rates. This involved implementing A/B testing, user
              behavior analysis through tools like Hotjar, and managing and
              collaborating with remote developers, designers, and SEO
              specialists.
            </p>
            <hr className="border border-2 border-magenta opacity-100" />
            <h2 className="text-lime">Key responsibilities and achievements</h2>
            <ul>
              <li>
                Introduction of Webpack for performance optimization in the
                Online Booking Tool.
              </li>
              <li>
                Conducting A/B testing and implementing user behavior insights
                from Hotjar to boost conversion rates.
              </li>
              <li>
                Development of multiple app versions for A/B testing, aimed at
                improving user engagement and conversions.
              </li>
              <li>
                Integration of various API endpoints, including CRM-based
                scheduling, mover and packer and Google Maps API for route
                calculation and service location determination.
              </li>
              <li>
                Implementation of email automation using cron jobs, ensuring
                seamless communication with customers.
              </li>
              <li>
                Collaboration with SEO/AdWords specialists for content and
                script optimizations, including Analytics, AdWords, and call
                tracking.
              </li>
              <li>
                Migration of the initial WordPress-based website to Angular,
                utilizing technologies like Strapi for content management and
                Azure for hosting.
              </li>
            </ul>
            <h2 className="text-lemongrass display-3">Technologies Used</h2>
            <h2 className="text-lime">Frontend</h2>
            <ul>
              <li>
                <strong>Languages:</strong> HTML5, CSS3, JavaScript, jQuery
              </li>
              <li>
                <strong>Frameworks and Libraries:</strong> Bootstrap,
                Handlebars.js, CLNR.js
              </li>
              <li>
                <strong>Frontend Build Tool:</strong> Webpack
              </li>
              <li>
                <strong>User Interface Design:</strong> Created interactive and
                responsive user interfaces for seamless user experience.
              </li>
            </ul>
            <h2 className="text-lime">Backend</h2>
            <ul>
              <li>
                <strong>Languages:</strong> PHP
              </li>
              <li>
                <strong>Database:</strong> MySQL
              </li>
              <li>
                <strong>Server-Side Scripting:</strong> Developed server-side
                functionalities for seamless data processing.
              </li>
              <li>
                <strong>API Integration:</strong> Connected frontend with
                backend through AJAX and REST APIs, enabling dynamic content
                updates.
              </li>
            </ul>

            <h2 className="text-lime">Content Management Systems (CMS):</h2>
            <ul>
              <li>
                <strong>Strapi:</strong> Utilized Strapi for efficient content
                management, enabling easy updates and modifications.
              </li>
              <li>
                <strong>WordPress:</strong> Worked on customizations, plugin
                installations, maintenance, and backups within the WordPress
                environment.
              </li>
            </ul>
            <h2 className="text-lime">Mapping and Geolocation Services:</h2>
            <ul>
              <li>
                <strong>Google Maps API Suite:</strong> Integrated Google Maps’
                Distance Matrix and Places API for route calculation, address
                verification, and determining service locations. Implemented
                logic to calculate route costs and display nearby service
                providers.
              </li>
            </ul>
            <h2 className="text-lime">Version Control and Collaboration:</h2>
            <ul>
              <li>
                <strong>Version Control:</strong> Git
              </li>
              <li>
                <strong>Collaborative Tools:</strong> Collaborated effectively
                with remote team members, including back-end developers,
                designers, SEO, and AdWords specialists, to ensure seamless
                integration of frontend and backend components.
              </li>
            </ul>
            <h2 className="text-lime">Other Technologies:</h2>
            <ul>
              <li>
                <strong>Data Format:</strong> JSON
              </li>
              <li>
                <strong>Testing and Optimization Tools:</strong> Google
                Optimize, Hotjar
              </li>
              <li>
                <strong>Hosting:</strong> Azure
              </li>
              <li>
                <strong>Email Automation:</strong> Implemented cron jobs for
                automated email processing, enhancing customer communication
                without manual intervention.
              </li>
            </ul>

            <p>
              In conclusion, these key features and achievements underscore the
              project&apos;s success in delivering a user-friendly, efficient,
              and technologically advanced Online Booking Tool. The experience
              gained in developing and optimizing these features has
              significantly enhanced our proficiency in modern web application
              development, positioning us as a valuable asset in future projects
              requiring similar technical expertise and collaborative teamwork.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
