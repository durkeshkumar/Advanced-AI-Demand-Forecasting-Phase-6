import { useState } from 'react'

import MainLayout from '../components/layout/MainLayout'

import api from '../services/api'

import DatasetPreviewTable from '../components/tables/DatasetPreviewTable'

function DatasetUpload() {

  const [file, setFile] = useState(null)

  const [responseData, setResponseData] = useState(null)

  const [loading, setLoading] = useState(false)

  const [previewData, setPreviewData] = useState(null)

  const handleFileChange = (e) => {

    setFile(
      e.target.files[0]
    )
  }

  const fetchPreview = async () => {

    try {

      const response = await api.get(
        '/dataset/preview'
      )

      setPreviewData(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  const handleUpload = async () => {

    if (!file) {

      alert('Please select a file')

      return
    }

    const formData = new FormData()

    formData.append(
      'file',
      file
    )

    try {

      setLoading(true)

      const response = await api.post(
        '/dataset/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      setResponseData(response.data)

      fetchPreview()

      alert('Dataset uploaded successfully')

    } catch (error) {

      alert(
        error.response.data.detail
      )

    } finally {

      setLoading(false)
    }
  }

  return (
    <MainLayout>

      <div className='bg-white p-8 rounded-2xl shadow-md'>

        <h1 className='text-3xl font-bold text-slate-800 mb-6'>
          Upload Dataset
        </h1>

        <div className='border-2 border-dashed border-slate-400 rounded-2xl p-16 text-center'>

          <input
            type='file'
            onChange={handleFileChange}
            className='mb-6'
          />

          <p className='text-slate-500 text-lg mb-6'>
            Upload CSV or Excel Dataset
          </p>

          <button
            onClick={handleUpload}
            className='bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition'
          >

            {
              loading
                ? 'Uploading...'
                : 'Upload Dataset'
            }

          </button>

        </div>

        {
          responseData && (

            <div className='mt-10 bg-slate-100 p-6 rounded-2xl'>

              <h2 className='text-2xl font-bold mb-4 text-slate-800'>
                Dataset Information
              </h2>

              <p className='mb-3'>
                <strong>Rows:</strong>

                {' '}

                {responseData.rows}
              </p>

              <p className='mb-3'>
                <strong>Columns:</strong>
              </p>

              <div className='flex flex-wrap gap-3'>

                {
                  responseData.columns.map(
                    (column, index) => (

                      <span
                        key={index}
                        className='bg-blue-600 text-white px-4 py-2 rounded-lg'
                      >
                        {column}
                      </span>
                    )
                  )
                }

              </div>

            </div>
          )
        }

        {
          previewData && (

            <DatasetPreviewTable
              columns={previewData.columns}
              data={previewData.data}
            />

          )
        }

      </div>

    </MainLayout>
  )
}

export default DatasetUpload