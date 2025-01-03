import React from 'react'

const ChapterCard = ({chapter}) => {
  return (
    <>
      <div className='flex items-center gap-5 border border-gray-300 shadow-lg p-5 rounded-md'>
          <h2 className='text-2xl'>{chapter.emoji}</h2>
        <div>
          <h2 className='font-medium'>{chapter.chapter_title}</h2>
          <p className='text-sm text-gray-500'>{chapter.chapter_summary}</p>
        </div>
      </div>
    </>
  )
}

export default ChapterCard