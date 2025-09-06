import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richardjames@gmail.com',
    phone: '123-456-7890',
    address: { line1: '123 Main St', line2: 'Apt 4B' },
    gender: 'Male',
    dob: '1990-01-01'
  })

  const [isEdit, setIsEdit] = useState(false)

  // handle profile picture upload
  const handlePicChange = e => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setUserData(prev => ({ ...prev, image: imageUrl }))
    }
  }

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      {/* Profile Picture */}
      <div className='flex flex-col items-start'>
        <img
          className='w-36 h-36 rounded object-contain border bg-gray-100'
          src={userData.image}
          alt='Profile'
        />
        {isEdit && (
          <input
            type='file'
            accept='image/*'
            onChange={handlePicChange}
            className='text-xs mt-2'
          />
        )}
      </div>

      {/* NAME */}
      {isEdit ? (
        <input
          className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
          value={userData.name}
          onChange={e =>
            setUserData(prev => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className='font-medium text-3xl text-neutral-800 mt-4'>
          {userData.name}
        </p>
      )}

      <hr className='bg-zinc-400 h-[1px] border-none' />

      {/* CONTACT */}
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          {/* Email */}
          <p className='font-medium'>Email id:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type='email'
              value={userData.email}
              onChange={e =>
                setUserData(prev => ({ ...prev, email: e.target.value }))
              }
              required
            />
          ) : (
            <p className='text-blue-500'>{userData.email}</p>
          )}

          {/* Phone */}
          <p className='font-medium'>Phone:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              value={userData.phone}
              onChange={e =>
                setUserData(prev => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className='text-blue-400'>{userData.phone}</p>
          )}

          {/* Address */}
          <p className='font-medium'>Address:</p>
          {isEdit ? (
            <p>
              <input
                className='bg-gray-50 mb-1'
                value={userData.address.line1}
                onChange={e =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value }
                  }))
                }
              />
              <br />
              <input
                className='bg-gray-50'
                value={userData.address.line2}
                onChange={e =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value }
                  }))
                }
              />
            </p>
          ) : (
            <p className='text-gray-500'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* BASIC INFO */}
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          {/* Gender */}
          <p className='font-medium'>Gender:</p>
          {isEdit ? (
            <select
              className='max-w-24 bg-gray-100'
              value={userData.gender}
              onChange={e =>
                setUserData(prev => ({ ...prev, gender: e.target.value }))
              }
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          ) : (
            <p className='text-gray-400'>{userData.gender}</p>
          )}

          {/* DOB */}
          <p className='font-medium'>Date of Birth:</p>
          {isEdit ? (
            <input
              type='date'
              className='max-w-32 bg-gray-100'
              value={userData.dob}
              onChange={e =>
                setUserData(prev => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className='text-gray-400'>{userData.dob}</p>
          )}
        </div>
      </div>

      {/* BUTTON */}
      <div className='mt-10'>
        {isEdit ? (
          <button
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default MyProfile



