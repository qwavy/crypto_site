import logo from './images/Logo.png'
import mob from './images/Mob.png'
import partner_1 from './images/1.png'
import partner_2 from './images/2.png'
import partner_3 from './images/3.png'
import partner_4 from './images/4.png'
import partner_5 from './images/5.png'
import banner_1 from './images/banner_1.png'
import banner_2 from './images/banner_2.png'
import bitcoin from './images/bitcoin.png'
import ripple from './images/ripple.png'
import ethereum from './images/ethereum.png'

import youtube from './images/youtube.png'
import github from './images/github.png'
import facebook from './images/facebook.png'
import instagramm from './images/instagramm.png'
import whatsapp from './images/whatsapp.png'


import './App.css'

const App = () => {
  return (
    <div className="site">
      <div className="header">
        <img src={logo}/>
      </div>
      <div className="content">
        <div>
          <img src={mob}/>
        </div>
        <div className="content_block">
          <h1 className="content_h1">Make easier your crypto transactions.</h1>
          <p>Our cryptocurrency offers a fast, secure, and affordable alternative for all of your financial needs. Join the cryptocurrency revolution today and take control of your financial future. Sign up now to start using our platform for yourself.</p>
          <button>Try for free</button>
        </div>
      </div>
      <div className="content_partners">
          <div><img src={partner_1}/></div>
          <div><img src={partner_2}/></div>
          <div><img src={partner_3}/></div>
          <div><img src={partner_4}/></div>
          <div><img src={partner_5}/></div>
      </div>
      <div className="content_crypto">
        <div>

          <h1 className="content_crypto_title">Best crypto currently</h1>
        </div>
        <div>
          <div className="crypto_container">
            <div className="crypto_block">
              <img src={bitcoin}/>
              <h1>Bitcoin</h1>
              <p>31,020.564 $</p>
              <button>buy it now</button>
            </div>
            <div className="crypto_block">
              <img src={ethereum}/>
              <h1>Ethereum</h1>
              <p>31,020.564 $</p>
              <button>buy it now</button>
            </div>
            <div className="crypto_block">
              <img src={ripple}/>
              <h1>Ripple</h1>
              <p>31,020.564 $</p>
              <button>buy it now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="content_banner_1">
        <div>
          <img src={banner_1}/>
        </div>
        <div className="content_banner_block">
          <h1>Track your earnings and cryptocode made it easy</h1>
          <p>Nulla dui ultrices sed nam ligula dignissim tellus. Sem semper lorem facilisis ut amet tincidunt adipiscing maecenas.</p>
          <button className="">Get started</button>
        </div>
        
      </div>
      <div className="content_banner_2">
        <div className="content_banner_block_2">
          <h1>Trust us due to our safe and convenient deposit</h1>
          <p>Tristique morbi scelerisque vitae. Nulla dui ultrices sed nam ligula dignissim tellus semper lorem facilisis ut. Amet tincidunt adipiscing varius maecenas adipiscing. </p>
          <button>Know more</button>
        </div>
        <div>
          <img src={banner_2}/>
        </div>
      </div>
      <div className="footer_contact">
        <div>
          <h1>Subscribe & get news updates</h1>
        <p>Duis massa posuere commodo sed tortor ultrices accumsan augue. Aliquet bibendum placerat vivamus diam ullamcorper vitae sapien auctor ut. Suspendisse donec id aenean diam dolor nec vitae massa id. Velit nullam consequat orci amet fames sed. Amet tincidunt adipiscing varius maecenas adipiscing. </p>
        {/* <input/> */}
        </div>
        {/* <div>sdafgsdf</div> */}
      </div>
      <div className="footer">
        <h1>
          Social
        </h1>
        <div className="footer_social_container">
          <div className="footer_social_block">
            <img src={facebook}/>
          </div>
          <div className="footer_social_block">
            <img src={youtube}/>
          </div>
          <div className="footer_social_block">
            <img src={instagramm}/>
          </div>
          <div className="footer_social_block">
            <img src={whatsapp}/>
          </div>
          <div className="footer_social_block">
            <img src={github}/>
          </div>

        </div>
        <div className="footer_logo">

        <img src={logo}/>
        </div>
      </div>
    </div>
  )
}

export default App