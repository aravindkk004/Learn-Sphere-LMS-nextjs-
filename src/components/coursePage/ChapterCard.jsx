import React from 'react'

const ChapterCard = () => {
  return (
    <>
      <div className='flex items-center gap-5 border border-gray-300 shadow-lg p-5 rounded-md'>
          <h2 className='text-2xl'>emoji</h2>
        <div>
          <h2 className='font-medium'>Flutter Fundamentals</h2>
          <p className='text-sm text-gray-500'>Learn the basic building blocks of flutter, widgets, layouts and state management.</p>
        </div>
      </div>
    </>
  )
}

export default ChapterCard