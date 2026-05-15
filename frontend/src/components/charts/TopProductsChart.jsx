import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

function TopProductsChart({ data }) {

  const COLORS = [
    '#2563eb',
    '#16a34a',
    '#dc2626',
    '#ca8a04',
    '#9333ea',
  ]

  return (
    <div className='bg-white p-6 rounded-2xl shadow-md mt-8'>

      <h2 className='text-2xl font-bold mb-6 text-slate-800'>
        Top Products
      </h2>

      <ResponsiveContainer
        width='100%'
        height={400}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey='sales'
            nameKey='product'
            outerRadius={140}
            label
          >

            {
              data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />

              ))
            }

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  )
}

export default TopProductsChart