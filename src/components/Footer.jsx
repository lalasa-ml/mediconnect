import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*------ left section-------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    MediConnect is a digital healthcare platform that connects users with trusted doctors. It simplifies appointment booking and offers access to specialists across fields. With a focus on convenience and reliability, we aim to make healthcare accessible to all.
                </p>
            </div>
            {/*------ center section-------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/*------ right section-------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 1234567890</li>
                    <li>mediconnect@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/*-----------Copyright Text------*/}
                <div>
                    <hr />
                    <p className='py-5 text-sm text-center'>© 2023 MediConnect. All rights reserved.</p>

                </div>
        </div>

    </div>
  )
}

export default Footer