const Table = ({screens}) => {
  return (
    <>
        <div className="bg-white p-2 rounded-sm drop-shadow-md">
        <table className="w-full ">
            <thead>
                <tr className="border-b h-12">
                    <th>
                        AFFICHEUR
                    </th>
                    <th>
                        PRIX
                    </th>
                </tr>
            </thead>

            <tbody>
                {
                    screens.map((screen, i) => (
                <tr className={`${i+1===screens.length ? "": "border-b"} h-12`}>
                    <td className="text-center">
                        {screen.model}
                    </td>
                    <td className="text-center">
                        {
                            screen.price.map((p,i)=>{
                                return `${p}dh ${i+1<screen.price.length ? "/" : ""}`
                            })
                        }
                    </td>
                </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Table