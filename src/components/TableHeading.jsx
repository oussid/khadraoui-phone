import samsung from "../assets/samsung.png"

const TableHeading = ({logos}) => {
  return (
    <div className="flex flex-row justify-center py-4 gap-2">
        {
            logos 
            &&
            (
                Array.isArray(logos)
                ?
                logos.map(logo => (
                    <img width={200} src={logo} alt="Logo" />
                ))
                :
                <h2 className="text-6xl text-blue-700">{logos}</h2>
            )
        }
    </div>
  )
}

export default TableHeading