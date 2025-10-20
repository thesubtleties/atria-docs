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

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.ctaButton)}
            to="https://atria.gg/app">
            Experience Atria
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.ctaButton)}
            to="/blog">
            What's New?
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.ctaButton)}
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Real-Time Networking
              </Heading>
              <p className={styles.featureDescription}>
                Connect attendees instantly with chat rooms, direct messaging, and intelligent connection recommendations powered by icebreakers.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Event Management
              </Heading>
              <p className={styles.featureDescription}>
                Multi-day events, session scheduling, speaker coordination, and sponsor management all in one intuitive platform.
              </p>
            </div>
          </div>

          <div className={clsx('col col--4', styles.feature)}>
            <div className={styles.featureContent}>
              <Heading as="h3" className={styles.featureTitle}>
                Open Source
              </Heading>
              <p className={styles.featureDescription}>
                Complete transparency, true data ownership, and the flexibility to self-host or use commercial hosting. No vendor lock-in.
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
      description="Transform your events into powerful networking experiences with Atria - the open-source event management platform">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
