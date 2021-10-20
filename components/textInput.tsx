import React, { useState } from 'react';
import { clean } from '../lib/clean';

export default function TextInput() {
  const [value, setValue] = useState('');

  const handleClean = () => {
    const cleaned = clean(value);
    setValue(cleaned);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <div className='bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center'>
      <div className='card mx-auto bg-white  shadow-xl hover:shadow'>
        <svg
          stroke='white'
          className='w-32 mx-auto rounded-full -mt-20 border-8 border-white'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 1000'
          xmlSpace='preserve'
        >
          <path d='M599 755.5c-5.6 22.3-34.1 71.1-79.5 136.9 12.4 2.9 24.3 6.1 36.4 8.3 22 4 44.1 7.1 66.1 11.1 7.2 1.3 10.9-1.3 14.7-7 44.2-65.8 79.9-136.1 109.8-209.3 11.7-28.7 21.7-58 32.5-87 1.1-3 2.2-5.9 3.5-9.4 23.7 8.2 46.9 16.2 71.1 24.5-4.3 12.7-8.3 24.8-12.6 36.7-36.4 101.1-81.7 197.8-142.1 287-5 7.4-10.7 14.4-15.6 21.8-11.4 17.1-27.3 22.4-47.2 20.5-76.8-7.3-151.3-24.8-223.4-51.9-131.2-49.4-244.2-125-333.7-234-10.7-13.1-13.8-27.5-6.8-42.9 6.8-14.8 19.7-21.5 35.6-21.7 68.2-.9 133.9-14.6 197.5-38.6 57.5-21.7 109.9-51.9 150.3-99.5 11.7-13.8 21.2-29.4 32.3-45 20.8 11.7 42.2 23.8 65.7 37-12.2 17.6-23 35.3-35.8 51.4-31.2 39.5-70.6 69.4-114.2 93.7-65.8 36.6-136.9 57.7-210.9 69.7-1.5.2-2.9.5-6.5 1.2 10.6 9.7 19.5 18.8 29.3 26.7 18.4 14.9 37.1 29.4 56.2 43.4 3.7 2.7 10.2 3.9 14.8 2.9 38-8.6 72.8-23.8 102-50.8-2.5 13.3-26.5 47-60.2 84.6 21.2 10.5 42.5 19.8 62.5 31.5 25.8 15.2 50.5 11 75.8.1 42.8-18.5 79.5-46.1 114.6-76.2 5.6-4.8 11.1-9.8 17.8-15.7zm277.3-195.1C756.2 507 637 453.9 516.9 400.5c9.9-23.1 25.5-40.6 46.6-53 35.2-20.7 72-23.1 109.3-6.8 48 20.9 96 42 143.5 64 55.8 25.9 82.1 84 65.1 141.7-1.4 4.5-3.2 8.8-5.1 14zM823 351.1c-37.8-16.8-75.2-33.5-112.5-50.1-.8-.4-1.3-1.2-2.4-2.2 1.4-2.8 2.7-5.7 4.2-8.4 46.8-87.7 93.5-175.3 140.3-263 7.8-14.7 16.9-19.1 33.8-16.6 15.5 2.3 28.6 8.9 38.7 21 6.6 8 8.3 16.7 4.6 26.8-34.9 96-69.6 192.2-104.4 288.2-.5 1-1.2 2.1-2.3 4.3z' />
        </svg>
        <div className='px-6 text-center mt-2 font-light text-sm'>
          <textarea
            value={value}
            cols={100}
            rows={20}
            onChange={handleChange}
          ></textarea>
        </div>
        <hr />
        <div className='flex  bg-gray-50 '>
          <div
            className='text-center w-1/2 p-4 hover:bg-green-100 cursor-pointer'
            onClick={handleClean}
          >
            <p>Clean</p>
          </div>
          <div className='border'></div>
          <div
            className='text-center w-1/2 p-4 hover:bg-red-100 cursor-pointer'
            onClick={handleReset}
          >
            <p> Reset</p>
          </div>
        </div>
      </div>
    </div>
  );
}
