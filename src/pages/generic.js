import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
import Footer from '../components/Footer';

import pic4 from '../images/pic04.jpg';
import Header from '../components/Header';

const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">DINERO Desktop Wallets</h1>
          <ul className="actions">
            <li>
              <a
                href="https://github.com/dinerocoin/dinero/releases"
                class="button icon fa-download"
              >
                Desktop Wallets (v1.0.1.1)
              </a>
            </li>
            <li>
              <a
                href="http://explorer.dinerocoin.org/"
                class="button icon fa-external-link"
              >
                Dinero Blockchain Explorer
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a
                href="https://discordapp.com/invite/EJkEC9g"
                class="button icon fa-users"
              >
                Dinero Discord
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dinerocoin/Mining-Pools"
                class="button icon fa-microchip"
              >
                Mining Pools
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
