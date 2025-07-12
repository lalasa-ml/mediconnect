import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((doc) => (
          <div
            key={doc._id}
            onClick={() => {
              navigate(`/doctors/${encodeURIComponent(doc.speciality)}`)
              window.scrollTo(0, 0)
            }}
            className='border rounded-lg hover:shadow-lg cursor-pointer transition-all'
          >
            {/* identical wrapper from Doctors.jsx */}
            <div className='bg-blue-50 flex items-center justify-center py-4'>
              <img
                src={doc.image}
                alt={doc.name}
                className='object-contain w-full max-h-72
                           transition-transform duration-300 hover:scale-105'
              />
            </div>

            <div className='p-4'>
              <p className='text-lg font-semibold'>{doc.name}</p>
              <p className='text-sm text-gray-500'>{doc.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors')
          window.scrollTo(0, 0)
        }}
        className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'
      >
        more
      </button>
    </div>
  )
}

export default TopDoctors







