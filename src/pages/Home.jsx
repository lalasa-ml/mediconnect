import React, { useContext } from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()

  const handleDoctorClick = (speciality) => {
    navigate(`/doctors/${speciality}`)
  }

  return (
    <div>
      <Header />
      <SpecialityMenu />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4'>
        {doctors.slice(0, 6).map((doctor) => (
          <div
            key={doctor._id}
            onClick={() => handleDoctorClick(doctor.speciality)}
            className='border p-4 rounded cursor-pointer hover:shadow-md'
          >
            <img src={doctor.image} alt={doctor.name} className='w-full h-40 object-cover rounded' />
            <p className='font-semibold mt-2'>{doctor.name}</p>
            <p className='text-sm text-gray-500'>{doctor.speciality}</p>
          </div>
        ))}
      </div>
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
