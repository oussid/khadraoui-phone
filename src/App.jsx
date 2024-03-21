import Container from "./components/Container"
import Navbar from "./components/Navbar"
import Qr from "./components/Qr"
import Section from "./components/Section"
import Title from "./components/Title"
import {devices} from "./constants"

const App = () => {
  return (
    <div className="">
      <Container>
        <Title>Liste de Prix des Afficheurs</Title>
        <Qr/>
        {/* <Section device={devices[0]}/> */}
        {
          devices.map(device => (
            <Section device={device}/>
          ))
        }
      </Container>
    </div>
  )
}

export default App