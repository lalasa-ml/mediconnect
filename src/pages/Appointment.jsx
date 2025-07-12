import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)

  const [docInfo,  setDocInfo]  = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime,  setSlotTime]  = useState('')
  const [isBooked,  setIsBooked]  = useState(false)
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  /* ────────── load doctor & reset state on change ────────── */
  useEffect(() => {
    const selected = doctors.find(d => d._id === docId)
    setDocInfo(selected)
    setSlotIndex(0); setSlotTime(''); setIsBooked(false)
  }, [docId, doctors])

  /* ────────── build next‑7‑days slot array ────────── */
  useEffect(() => {
    if (!docInfo) return
    const today = new Date()
    const all = []

    for (let i = 0; i < 7; i++) {
      const cur = new Date(today)
      cur.setDate(today.getDate() + i)

      const end = new Date(cur)
      end.setHours(21,0,0,0)

      if (today.toDateString() === cur.toDateString()) {
        const now = new Date()
        cur.setHours(Math.max(now.getHours() + 1, 10))
        cur.setMinutes(now.getMinutes() > 30 ? 30 : 0)
      } else {
        cur.setHours(10,0,0,0)
      }

      const daySlots = []
      while (cur <= end) {
        daySlots.push({
          datetime: new Date(cur),
          time: cur.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })
        })
        cur.setMinutes(cur.getMinutes() + 30)
      }
      all.push(daySlots)
    }
    setDocSlots(all)
  }, [docInfo])

  /* ────────── handle booking ────────── */
  const handleBook = () => {
    const dateStr = docSlots[slotIndex][0]?.datetime.toDateString()
    alert(`✅ Appointment booked with ${docInfo.name}\n${dateStr} at ${slotTime}`)
    setIsBooked(true)
  }

  if (!docInfo) return <p className='p-6 text-center'>Loading doctor information…</p>

  /* ────────── UI ────────── */
  return (
    <div className='p-6 max-w-3xl mx-auto'>

      {/* Doctor Card */}
      <div className='border border-gray-300 shadow-sm rounded-xl p-6 flex flex-col sm:flex-row gap-6'>

        {/* Photo */}
        <img
          src={docInfo.image}
          alt={docInfo.name}
          className='w-56 max-h-80 object-contain mx-auto rounded'
        />

        {/* Details */}
        <div className='flex-grow'>
          <h2 className='text-2xl font-bold'>{docInfo.name}</h2>
          <p className='text-gray-600 mb-3'>{docInfo.speciality}</p>

          <p><span className='font-semibold'>Degree:</span> {docInfo.degree}</p>
          <p><span className='font-semibold'>Experience:</span> {docInfo.experience}</p>
          <p><span className='font-semibold'>Fees:</span> ₹{docInfo.fees}</p>

          <p className='mt-3 text-gray-700'>{docInfo.about}</p>

          <p className='mt-3'>
            <span className='font-semibold'>Address:</span><br/>
            {docInfo.address.line1}, {docInfo.address.line2}
          </p>
        </div>

      </div>
      {/* /Doctor Card */}

      {/* Booking Slots */}
      <div className='mt-10'>
        <h3 className='font-bold text-lg mb-2'>Booking Slots</h3>

        {/* Days */}
        <div className='flex gap-3 overflow-x-auto'>
          {docSlots.map((arr, idx) => (
            <div key={idx}
              onClick={() => { setSlotIndex(idx); setSlotTime(''); setIsBooked(false) }}
              className={`min-w-[70px] text-center px-3 py-2 rounded cursor-pointer
                ${idx === slotIndex ? 'bg-blue-600 text-white' : 'border border-gray-300'}`}>
              <p className='font-semibold'>
                {arr[0]
                  ? daysOfWeek[arr[0].datetime.getDay()]
                  : daysOfWeek[(new Date().getDay()+idx)%7]}
              </p>
              <p>
                {arr[0]
                  ? arr[0].datetime.getDate()
                  : new Date(Date.now()+idx*864e5).getDate()}
              </p>
            </div>
          ))}
        </div>

        {/* Times */}
        <div className='mt-6 grid grid-cols-3 gap-4'>
          {docSlots[slotIndex]?.length ? (
            docSlots[slotIndex].map((s,i) => (
              <button key={i}
                onClick={() => { setSlotTime(s.time); setIsBooked(false) }}
                className={`border px-4 py-2 rounded
                  ${slotTime===s.time ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>
                {s.time}
              </button>
            ))
          ) : (
            <p className='col-span-3 text-center text-red-500 font-medium'>
              No slots available
            </p>
          )}
        </div>

        {/* Book Button & Confirmation */}
        {slotTime && !isBooked && (
          <div className='mt-6'>
            <p className='text-green-700 mb-2'>
              You selected: <b>{slotTime}</b>
            </p>
            <button
              onClick={handleBook}
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md'>
              Book Appointment
            </button>
          </div>
        )}

        {isBooked && (
          <p className='mt-6 px-4 py-3 bg-green-50 text-green-700 border border-green-200 rounded'>
            🎉 Appointment booked successfully!
          </p>
        )}
      </div>

      {/* Related Doctors */}
      <RelatedDoctors speciality={docInfo.speciality} docId={docInfo._id} />
    </div>
  )
}

export default Appointment







