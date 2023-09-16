import React from 'react'
import '../styles/Account.css'
import data from '../components/test_data/MOCK_DATA.json'
import { useState } from 'react'
const Account = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Change this as needed
    const [selectedPage, setSelectedPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            setSelectedPage(newPage); // Cập nhật trang đã chọn
        }
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemToShow = data.slice(startIndex, endIndex);
    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers();
    const renderPageNumbers = () => {
        const pageList = [];
        if (totalPages <= 7) {
            // Hiển thị tất cả các số trang nếu tổng số trang ít hơn hoặc bằng 7
            pageList.push(...pageNumbers);
        } else {
            if (currentPage < 4) {
                // Trường hợp trang hiện tại là 4 trở về sau
                pageList.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 3) {
                // Trường hợp trang hiện tại là 3 trở ra trước cuối
                pageList.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                // Trường hợp trang hiện tại nằm ở giữa
                pageList.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pageList.map((pageNumber, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(pageNumber)}
                className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
            >
                {pageNumber}
            </button>
        ));
    };
    // Slice the data array to get the current page's items
    return (
        <>
            <div className='title'>Account</div>
            <table className='table-account'>
                <thead >
                    <tr className='collumn'>
                        <th style={{ width: '100px' }}>Index</th>
                        <th style={{ width: '120px' }}>Avata</th>
                        <th style={{ width: '250px' }}>Name</th>
                        <th style={{ width: '350px' }}>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {itemToShow.map((item, index) => {
                        return (
                            <>
                                <tr className='collumn'>
                                    <td>{startIndex + index + 1}</td>
                                    <td><img style={{ width: '200px', height: '100px' }} src={item.Avatar} alt='' /></td>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Address}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <div className='pagination'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    &lt;Preveous
                </button>
                {renderPageNumbers()}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next&gt;
                </button>
            </div>
        </>
    )
}

export default Account