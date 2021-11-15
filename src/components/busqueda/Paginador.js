import React from 'react'

export const Paginador = ({ page, setCurrentPage }) => {
    
    const handleChangePage = () => {
        setCurrentPage(page)
    }

    return (
        <button 
            className="btn btn--add page"
            onClick={ () => handleChangePage(page) }    
        >
            {page}
        </button>
    )
}
