
import '../styles/styles.css'
import '../components/HeroSlider.css'
import '../components/CTA2.css'
import '../components/Footer.css'
import '../styles/tailwind.css'

// import '../styles/bv-style.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
