import TableHeading from "./TableHeading"
import Table from "./Table"

const Section = ({device}) => {
  return (
    <div>
        <TableHeading logos={device.logos}/>
        <Table screens={device.screens}/>
    </div>
  )
}

export default Section