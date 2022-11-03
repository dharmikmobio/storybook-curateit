import React from 'react'

const MultiInvitesMui = () => {
  return (
    <>
    <div x-data="{ isOpen: true }" className="relative flex justify-center">
    {/* <button @click="isOpen = true" className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Open Modal
    </button> */}

    <div x-show="isOpen" 
        // x-transition:enter="transition duration-300 ease-out"
        // x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        // x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
        // x-transition:leave="transition duration-150 ease-in"
        // x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
        // x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        className="fixed inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        Invite your team
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Your new project has been created. Invite your
                        team to collaborate on this project.
                    </p>

                    <form className="mt-4" action="#">
                        <label for="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                            Email address
                        </label>

                        <label className="block mt-3" for="email">
                            <input type="email" name="email" id="email" placeholder="user@email.xyz" value="devdhaif@gmail.com" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3" for="email">
                            <input type="email" name="email" id="email" placeholder="user@email.xyz" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3" for="email">
                            <input type="email" name="email" id="email" placeholder="user@email.xyz" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <button type="button" className="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <span className="mx-2">Add another</span>
                        </button>


                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                            <button type="button" className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                Cancel
                            </button>

                            <button type="button" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Send invites
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default MultiInvitesMui