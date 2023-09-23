import React from 'react'

function PaginationBasic() {
  return (
    <>
    <ul className='co-pagination-basic' aria-label='Pagination' role='menubar'>
    <li>   <a href="#">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </span>
        </a></li>
    </ul>
    </>
  )
}

export default PaginationBasic