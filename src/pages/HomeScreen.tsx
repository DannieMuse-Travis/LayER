
import Hero from './screen/Hero'
import Feature from "./screen/Feature"
import AwesomeFeature from "./screen/AwesomeFeature"
import HowWorkScreen from "./screen/AwesomeFeature"
import FeatureAdd from "./screen/FeatureAdd"
import Price from "./screen/Price"
import MovingScreen from "./screen/MovingScreen"
import Subcribe from "./screen/Subcribe"
import Achieve from "./screen/Achieve"
import Demo from "./screen/Demo"

const HomeScreen = () => {
  return (
    <div>
      <Hero/>
        <Feature/>
        <AwesomeFeature/>
        <HowWorkScreen/>
        <FeatureAdd/>
        <Price/>
        <MovingScreen/>
        <Achieve/>
        <Demo/>
        <Subcribe/>
        
        
    </div>
  )
}

export default HomeScreen