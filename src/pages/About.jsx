import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='test-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <b>Your Health, Our Priority</b>
          <p>At MediConnect, we believe that quality healthcare should be accessible, affordable, and convenient for everyone. Our mission is to bridge the gap between patients and trusted medical professionals by providing a seamless online platform for consultations, bookings, and health management—all from the comfort of your home.</p>
          <b>Connecting You to Trusted Doctors</b>
          <p>Our network includes highly qualified doctors with verified profiles, detailed experience, and real-time availability. You can explore, compare, and book consultations with ease and confidence.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>MediConnect is more than just an appointment booking tool—it's a step toward smart, patient-centered healthcare. Whether it's a routine check-up or a specialist consultation, MediConnect is here to make your healthcare journey easier, faster, and better</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>
          <b> Verified Doctors</b>
          <p>Connect only with certified and experienced professionals. We ensure every doctor is trusted and qualified.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>
          <b> Instant Booking</b>
          <p>Book appointments in seconds with zero hassle. No queues, just quick access to care.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-800 cursor-pointer'>
          <b>Secure Platform</b>
          <p>Your data stays private and protected. We use top-grade encryption and safety measures.</p>
        </div>

      </div>
    </div>
  )
}

export default About