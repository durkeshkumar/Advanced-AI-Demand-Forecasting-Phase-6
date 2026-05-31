export default function Table({

  columns = [],

  data = []

}) {

  return (

    <div className="overflow-x-auto">

      <table className="
        w-full
        border
        border-gray-300
      ">

        <thead>

          <tr className="
            bg-purple-600
            text-white
          ">

            {

              columns.map(
                (column,index)=>(

                  <th

                    key={index}

                    className="
                      p-3
                      text-left
                    "

                  >

                    {column}

                  </th>

                )
              )

            }

          </tr>

        </thead>

        <tbody>

          {

            data.map(
              (row,rowIndex)=>(

                <tr

                  key={rowIndex}

                  className="
                    border-b
                  "

                >

                  {

                    Object.values(row).map(
                      (value,colIndex)=>(

                        <td

                          key={colIndex}

                          className="
                            p-3
                          "

                        >

                          {value}

                        </td>

                      )
                    )

                  }

                </tr>

              )
            )

          }

        </tbody>

      </table>

    </div>

  );

}