import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={` Unofficial ${siteConfig.title}`}
      description="Reading from github is boring. So Created this documentation site to read those books.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
          <p className={styles.notify}>I created this for learning purpose only. Please support original author <a
              href="https://github.com/getify/You-Dont-Know-JS" className={styles.notifyURL} target="_blank">
              here
            </a></p>
        </div>
      </header>
      
    </Layout>
  );
}

export default Home;
