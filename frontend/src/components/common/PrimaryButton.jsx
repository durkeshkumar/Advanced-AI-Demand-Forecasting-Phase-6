function PrimaryButton({ title }) {
  return (
    <button
      className='bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition duration-300'
    >
      {title}
    </button>
  )
}

export default PrimaryButton
