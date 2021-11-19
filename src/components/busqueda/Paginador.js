import React from 'react'

export const Paginador = ({ page, currentPage, setCurrentPage }) => {
    
    const handleChangePage = () => {
        setCurrentPage(page)
    }

    return (
        <button 
            className={`btn btn--add page ${ page === currentPage && "pageCurrent"}`}
            onClick={ () => handleChangePage(page) }    
        >
            {page}
        </button>
    )
}
