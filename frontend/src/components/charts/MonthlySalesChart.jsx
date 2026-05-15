import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function MonthlySalesChart({ data }) {

  return (
    <div className='bg-white p-6 rounded-2xl shadow-md mt-8'>

      <h2 className='text-2xl font-bold mb-6 text-slate-800'>
        Monthly Sales Trend
      </h2>

      <ResponsiveContainer
        width='100%'
        height={350}
      >

        <BarChart data={data}>

          <CartesianGrid strokeDasharray='3 3' />

          <XAxis dataKey='month' />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey='sales'
            fill='#2563eb'
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}

export default MonthlySalesChart