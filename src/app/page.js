import Image from 'next/image'
import styles from './page.module.css'
import Use from './components/use/Use'
import Functionality from './components/functionality/Functionality'
import Install from './components/install/Install'
import HowToAdd from './components/howToAdd/HowToAdd'
import InstallYoutubeAdsBlocker from './components/installYoutubeAdsBlocker/InstallYoutubeAdsBlocker'
import Accordian from './components/accordian/Accordian'
import AboutYoutubeAdBlocker from './components/aboutYoutubeAdBlocker/AboutYoutubeAdBlocker'

export default function Home() {
  return (
    <main className={styles.main}>
      <Use/>
      <Functionality/>
      <Install/>
      <HowToAdd/>
      <InstallYoutubeAdsBlocker/>
      <Accordian/>
      <AboutYoutubeAdBlocker/>
    </main>
  )
}
