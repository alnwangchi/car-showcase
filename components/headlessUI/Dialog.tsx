'use client';
import { Dialog as HDialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef } from 'react';

export default function Dialog() {
  const [isOpen, setIsOpen] = useState(false);
  const completeButtonRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center'>
        <button
          type='button'
          onClick={openModal}
          className='rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <HDialog
          as='div'
          className='relative z-10'
          onClose={closeModal}
          initialFocus={completeButtonRef}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <HDialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <HDialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                    Payment successful
                  </HDialog.Title>
                  <HDialog.Description>
                    This will permanently deactivate your account
                  </HDialog.Description>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Your payment has been successfully submitted. We’ve sent you an email with all
                      of the details of your order.
                    </p>
                  </div>

                  <div className='mt-4 space-x-2'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                    <button
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2'
                      ref={completeButtonRef}
                      onClick={() => {
                        console.log('REF');
                      }}
                    >
                      Complete order
                    </button>
                  </div>
                </HDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </HDialog>
      </Transition>
    </>
  );
}
