import React from "react";
import { Link } from "react-router-dom";

// css
import "./Footer.scss";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="f1">
        <div className="logodiv">
          <img
            className="fedlogo"
            src="https://uploads-ssl.webflow.com/629d87f593841156e4e0d9a4/62eeaa9927e6aea4ff13590e_FedLogo.png"
            alt="fedlogo"
          />
          <p className="fed">FED</p>
        </div>
        <div className="flexdiv">
          <div className="footerleft">
              To boost the confidence of aspiring 
              <br />
              entrepreneurs worldwide.
              <br />
              Together we can change the world.
          </div>
          
        </div>

        <div className="bottomdiv">
          <div className="bottomleft"> 
          <p className="copyrightPTag">© 2019-2024, fedkiit.com</p>
          </div>
          <div className="bottommid">
            <div className="terms_and_policies">
              <div className="tap1Div">
                <Link to="/T&C" className="LinkStyle">
                 Terms and conditions 
                </Link>
              </div>
              <div className="dotDIv">|</div>
              <div className="tap1Div">
                <Link to="/PrivacyPolicies" className="LinkStyle">
                    Privacy policy
                </Link>
              </div>
            </div>
          </div>
          <div className="bottomright">
              <p>
                Made with ❤️ by Team FED KIIT
              </p>
          </div>
        </div>
        
      </footer>
    </section>
  );
}
