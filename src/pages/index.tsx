import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <img
            src="/img/atria-logo.svg"
            alt="atria logo"
            className={styles.logo}
          />
          <h1 className={styles.logoText}>atria</h1>
        </div>

        <p className={styles.tagline}>Events made for everyone</p>
        <p className={styles.subtitle}>Open-source event management platform combining comprehensive administration with privacy-respecting networking</p>

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.ctaButton)}
            to="https://atria.gg">
            Try Live Demo
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.ctaButton)}
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.ctaButton)}
            to="https://github.com/thesubtleties/atria">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhyAtria() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why Choose Atria?
        </Heading>
        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Event-Focused, Not Platform-Focused
              </Heading>
              <p className={styles.featureDescription}>
                When managing an event, you see only that event. No distracting sidebars, no unrelated organizations, no feature overload. Just powerful tools to run your event and facilitate meaningful networking.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                True Open Source & Data Ownership
              </Heading>
              <p className={styles.featureDescription}>
                AGPL-3.0 licensed with complete transparency. Your data stays yours - export or migrate anytime. Self-host for free or use managed hosting. No vendor lock-in, no surprise pricing.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Built for Real Events
              </Heading>
              <p className={styles.featureDescription}>
                Corporations, nonprofits, education, faith organizations, influencers, communities - Atria handles conferences, fundraising galas, workshops, church events, creator meetups, professional associations, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Core Features
        </Heading>
        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Event Management
              </Heading>
              <p className={styles.featureDescription}>
                Multi-day events with complex session scheduling, drag-and-drop speaker management, real-time status updates, and hybrid event support (virtual + in-person).
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Professional Networking
              </Heading>
              <p className={styles.featureDescription}>
                Icebreaker system for personalized connection requests, attendee discovery by role and interests, privacy controls, and connection management.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Real-Time Communication
              </Heading>
              <p className={styles.featureDescription}>
                Multi-level chat (general, Q&A, networking, session-specific), direct messaging, administrative channels, and Socket.IO powered instant messaging.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Multi-Tenant Architecture
              </Heading>
              <p className={styles.featureDescription}>
                Organization-level management with data isolation, role-based access control, event-level permissions, and complete data security.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Sponsor Management
              </Heading>
              <p className={styles.featureDescription}>
                Multi-tier system with rich profiles, drag-and-drop reordering, and automatic image optimization (WebP conversion, 80-90% size reduction).
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Security & Developer Experience
              </Heading>
              <p className={styles.featureDescription}>
                HTTPOnly cookie authentication, JWT with refresh tokens, granular permissions, comprehensive OpenAPI docs, and Docker-first deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className={styles.techStack}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Built with Modern Technology
        </Heading>
        <div className="row">
          <div className={clsx('col col--6', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Backend
              </Heading>
              <p className={styles.featureDescription}>
                Python 3.13 with Flask framework, PostgreSQL 15 with SQLAlchemy ORM, Redis 7 for caching and real-time features, Flask-SocketIO, and S3-compatible storage.
              </p>
            </div>
          </div>

          <div className={clsx('col col--6', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Frontend
              </Heading>
              <p className={styles.featureDescription}>
                React 18 with Vite 6, Mantine UI 7 components, Redux Toolkit + RTK Query for state management, Socket.IO Client for real-time updates, and Zod validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeploymentOptions() {
  return (
    <section className={styles.deployment}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Flexible Deployment Options
        </Heading>
        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Self-Hosted (Free)
              </Heading>
              <p className={styles.featureDescription}>
                Complete control and data ownership. Free under AGPL-3.0. Perfect for organizations with specific compliance requirements. Users only connect within your events.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Managed Hosting (atria.gg)
              </Heading>
              <p className={styles.featureDescription}>
                Free during Early Access with no event size limits. Cross-event networking, zero infrastructure management, and broader community reach. Free tier (50 attendees) after v1.0.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Custom Private Instance
              </Heading>
              <p className={styles.featureDescription}>
                Managed setup with complete isolation, custom branding and features, flexible commercial licensing, and custom data retention. Contact us for pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Build meaningful connections that last beyond your events. Open-source event management platform combining comprehensive administration with intelligent networking.">
      <HomepageHeader />
      <main>
        <WhyAtria />
        <HomepageFeatures />
        <TechStack />
        <DeploymentOptions />
      </main>
    </Layout>
  );
}
