function DatasetPreviewTable({
  columns,
  data,
}) {

  return (
    <div className='bg-white p-6 rounded-2xl shadow-md mt-8 overflow-x-auto'>

      <h2 className='text-2xl font-bold mb-6 text-slate-800'>
        Dataset Preview
      </h2>

      <table className='w-full border-collapse'>

        <thead>

          <tr className='bg-blue-600 text-white'>

            {
              columns.map((column, index) => (

                <th
                  key={index}
                  className='p-4 text-left'
                >
                  {column}
                </th>
              ))
            }

          </tr>

        </thead>

        <tbody>

          {
            data.map((row, rowIndex) => (

              <tr
                key={rowIndex}
                className='border-b hover:bg-slate-100'
              >

                {
                  columns.map((column, columnIndex) => (

                    <td
                      key={columnIndex}
                      className='p-4'
                    >
                      {row[column]}
                    </td>
                  ))
                }

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  )
}

export default DatasetPreviewTable