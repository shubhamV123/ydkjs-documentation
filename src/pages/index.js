import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home`}
      description="Reading from github is boring. So Created this unofficial documentation site to read those books."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
          <p className={styles.notify}>
            I created this for learning purpose only. Please support original
            author{" "}
            <a
              href="https://github.com/getify/You-Dont-Know-JS"
              rel="noopener noreferrer"
              className={styles.notifyURL}
              target="_blank"
            >
              here
            </a>
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <div className="container text-center">
            <h2>
              This site is under progress. Please always read original source{" "}
              <a
                href="https://github.com/getify/You-Dont-Know-JS"
                rel="noopener noreferrer"
                className={styles.notifyURL}
                target="_blank"
              >
                here
              </a>
            </h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
