import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/DINVision2.jpg';
import pic3 from '../images/DINMission2.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';
import Logo from '../images/DINERO Logo_White on trsprnt.png';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <a href="/#" className="image">
            <img src={Logo} alt="" data-position="25% 25%" />
          </a>
          <p>
            Dependable Decentralized Global Transactions
          <br />
          </p>
          <ul className="actions">
            <li>
              <Link className="button" to="/downloads">
                Download Wallets
              </Link>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a
                href="https://discordapp.com/invite/EJkEC9g" target="_blank"
                class="button icon fa-users"
              >
                Dinero Discord
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dinerocoin/Mining-Pools" target="_blank"
                class="button icon fa-microchip"
              >
                Mining Pools
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a
                href="https://coinmarketcap.com/currencies/dinero/" target="_blank"
                class="button icon fa-line-chart"
              >
                CoinMarketCap
              </a>
            </li>
            <li>
              <a
                href="https://openchains.info/coin/dinero" target="_blank"
                class="button icon fa-pie-chart"
              >
                OpenChains
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <div className="content">
            <div className="inner">
              <h2>About DINERO</h2>
              <p>
                Dinero is an open source cryptocurrency based on Bitcoin and Dash which provides fast private transactions along with a low to no transaction fees. Dinero incorporates many of the improvements which Dash has made on top of Bitcoin as well as the addition of an ASIC resistant hashing algorithm called NeoScrypt to avoid any undue centralisation of mining resources. 
              </p>
              <ul className="actions">
              <li>
                <a href="https://github.com/dinerocoin/Dinero-Whitepaper/raw/master/Dinero-WhitePaper-v4.pdf" target="_blank" class="button icon fa-download">
                  Dinero Whitepaper v4
                </a>
              </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>DINERO’s VISION</h2>
              <p>
                “To enable everyone to conduct financial transactions easily to anyone they choose. With ease, privacy, dignity and without the need to involve or seek permission from third parties.”
              </p>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>DINERO’s MISSION</h2>
              <p>
                “To offer everyone financial freedom by providing an easy-to-use reliable DECENTRALIZED financial service solution.”
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>
            Dinero is a cryptocurrency which enables anonymous instant payments to anyone, anywhere in the world. Dinero uses peer-to-peer technology to operate with no central authority; managing transactions and issuing money are carried out collectively by the network. Dinero as a Decentralized Platform is an advantage.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-github" />
              <h3>OPEN SOURCE</h3>
              <p>
                DINERO is OPEN-SOURCE that runs on non-proprietary servers, so there’s no need to rely on any company for continuous support. Anyone can review or contribute to DINERO’s source code on{' '}
            <a href="https://github.com/dinerocoin/dinero" target="_blank">Github</a>.
              </p>
            </section>
            <section>
              <span className="icon major fa-lock" />
              <h3>SECURE</h3>
              <p>
                Transactions are validated and secured by DINERO Miners and Dinero Masternodes Holders globally.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>DECENTRALIZED</h3>
              <p>
                Unlike banks, corporations or government controlled institutions, DINERO is DECENTRALIZED. It is run by anyone who uses a DINERO Wallet, DINERO Miners and DINERO Masternode Holders.
              </p>
            </section>
            <section>
              <span className="icon major fa-expand" />
              <h3>SCALABLE</h3>
              <p>
                DINERO is a SCALABLE cryptocurrency platform suitable for mass adoption.
              </p>
            </section>
            <section>
              <span className="icon major fa-user-secret" />
              <h3>PRIVATE</h3>
              <p>
                Your finances are your own business, DINERO ensures your transaction history and balances are private and secure.
              </p>
            </section>
            <section>
              <span className="icon major fa-line-chart" />
              <h3>DINERO EXCHANGE Listings</h3>
              <p>
                {' '}
                <a href="https://www.southxchange.com/Market/Book/DIN/BTC" target="_blank">SouthXchange</a>
                <br />
                {' '}
                <a href="https://www.southxchange.com/Market/Book/DIN/BTC" target="_blank">SouthXchange</a>
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <Link className="button" to="/downloads">
                Download Wallets
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Contact Us</h2>

          <div className="split style1">
            <section>
              <ul className="contact">
                <h3>Chat</h3>
                  <li>
                    <a href="https://discordapp.com/invite/EJkEC9g" target="_blank" class="button icon fa-discord">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/joinchat/IKqX_wsLjpx7g6o5beM30Q" target="_blank" class="button icon fa-telegram">
                      TeleGram
                    </a>
                  </li>
                <li>
                  <h3>Email</h3>
                  <a href="mailto:support@dinerocoin.org" target="_blank">support@dinerocoin.org</a>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="https://twitter.com/DineroCrypto" target="_blank" className="fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/DineroCrypto-225049868053385/" target="_blank" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/dinerocoin" target="_blank" className="fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/joinchat/IKqX_wsLjpx7g6o5beM30Q" target="_blank" className="fa-telegram">
                        <span className="label">Telegram</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/r/Dinerocoin/" target="_blank" className="fa-reddit">
                        <span className="label">Reddit</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCoj95EkI69ojMjXZqy95BWA" target="_blank" className="fa-youtube">
                        <span className="label">YouTube</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://discordapp.com/invite/EJkEC9g" target="_blank" className="fa-users">
                        <span className="label">Discord</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://bitcointalk.org/index.php?topic=2828122.0" target="_blank" className="fa-btc">
                        <span className="label">Bitcointalk</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
