'use client';

import React, { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';
import Image from 'next/image';

interface Props {
  manufacturer: string;
  setManuFacturer: React.Dispatch<React.SetStateAction<string>>;
}

const SearchManufacturer: React.FC<Props> = ({ manufacturer, setManuFacturer }) => {
  const [query, setQuery] = useState('');

  const filteredManufacturer =
    query === ''
      ? manufacturers
      : manufacturers.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className='relative w-full'>
          {/* Combobox.Button 用來點擊開啟全部選項 點其任意其他地方即可關閉 */}
          <Combobox.Button className='absolute top-[14px]'>
            <Image src='/car-logo.svg' width={20} height={20} className='ml-4' alt='car logo' />
          </Combobox.Button>
        </div>

        <Combobox.Input
          className='search-manufacturer__input'
          displayValue={(m: string) => m}
          placeholder='請輸入品牌'
          onChange={(event) => setQuery(event.target.value)}
        />

        <Transition
          // 省一層無意義的 div
          as={Fragment}
          enter='transition-opacity duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-in duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => {
            console.log('leave');
            setQuery('');
          }}
        >
          <Combobox.Options
            className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20'
            static
          >
            {filteredManufacturer.map((m) => (
              <Combobox.Option
                key={m}
                value={m}
                // className 可傳 function 來使 hover 到的選項改變樣式
                className={({ active }) =>
                  `relative search-manufacturer__option ${
                    active ? 'bg-primary-blue text-white' : 'text-gray-900'
                  }`
                }
              >
                {/* 開啟選單時可針對已被選中的選項做樣式調整 */}
                {({ selected, active }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                      {m}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 right-10 flex items-center pl-3 ${
                          active ? 'text-white' : 'text-teal-600'
                        }`}
                      >
                        X
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
