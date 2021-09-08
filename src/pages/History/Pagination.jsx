import React, { useState, useEffect } from "react"
import Card from "./Card"

function Pagination({ data, pageLimit, dataLimit, isMap }) {

    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div>

            {/* show the posts, 10 posts at a time */}
            <div className="dataContainer">
                <div className="row">

                    {isMap && getPaginatedData().length > 0 &&
                        (getPaginatedData().reverse()).map(record => {
                            return (
                                <Card
                                    key={record.id}
                                    description={record.description}
                                    purpose={record.purpose}
                                    amount={record.amount}
                                    status={record.status}
                                    id={record.id}
                                    date={record.date}
                                    processed={record.processed} />
                            );
                        })
                    }
                    {!isMap && getPaginatedData().length > 0 && (getPaginatedData()).map(record => {
                        return (
                            <Card
                                key={record.id}
                                description={record.description}
                                purpose={record.purpose}
                                amount={record.amount}
                                status={record.status}
                                id={record.id}
                                date={record.date}
                                processed={record.processed} />
                        );
                    })
                    }
                    {
                        (getPaginatedData().length == 0) &&
                        
                        <div className="col-12 h-100 m-auto no-reimb-pagination">
                            <h2 className="no-reimb-pagination">No Reimbursements left to display</h2>
                        </div>
                    }
                </div>
            </div>

            {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
            <div className="pagination mt-5">
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    {"<"}
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default Pagination;