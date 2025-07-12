import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const navigate = useNavigate()

  /* list of specialities for buttons */
  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Gastroenterologist',
    'Neurologist'
  ]

  /* filter whenever url param or doctors list changes */
  useEffect(() => {
    setFilteredDoctors(
      speciality
        ? doctors.filter(doc => doc.speciality === speciality)
        : doctors
    )
  }, [speciality, doctors])

  return (
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>Browse by&nbsp;Specialization</h2>

      {/* Filter buttons */}
      <div className='flex gap-3 flex-wrap mb-6'>
        {specialities.map(item => (
          <button
            key={item}
            onClick={() => navigate(`/doctors/${encodeURIComponent(item)}`)}
            className={`border px-3 py-1 rounded
              ${item === speciality ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => navigate('/doctors')}
          className='border px-3 py-1 rounded text-gray-700'
        >
          All
        </button>
      </div>

      {/* Doctor cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {filteredDoctors.map(doctor => (
          <div
            key={doctor._id}
            onClick={() => navigate(`/appointment/${doctor._id}`)}
            className='border rounded-lg hover:shadow-lg cursor-pointer transition-all'
          >
            {/* flexible wrapper shows entire portrait */}
            <div className='bg-blue-50 flex items-center justify-center py-4'>
              <img
                src={doctor.image}
                alt={doctor.name}
                className='object-contain w-full max-h-72'
              />
            </div>

            <div className='p-4'>
              <p className='text-lg font-semibold'>{doctor.name}</p>
              <p className='text-sm text-gray-500'>{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors




