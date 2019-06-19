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
          <h1 className="major">DINERO Downloads</h1>
          <ul className="actions">
            <li>
              <a
                href="https://github.com/dinerocoin/dinero/releases/download/v1.0.1.1/dinerocore-1.0.1.1-win64.zip"
                class="button icon fa-windows"
              >
                Windows Wallet 64-bit
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dinerocoin/dinero/releases/download/v1.0.1.1/dinerocore-1.0.1.1-osx64.tar.gz"
                class="button icon fa-apple"
              >
                MACOS Wallet 64-bit
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a
                href="https://github.com/dinerocoin/dinero/releases/download/v1.0.1.1/dinerocore-1.0.1.1-linux64.tar.gz"
                class="button icon fa-linux"
              >
                Linux Wallet 64-bit
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dinerocoin/dinero/archive/v1.0.1.1.tar.gz"
                class="button icon fa-linux"
              >
                Source Code Unix
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
