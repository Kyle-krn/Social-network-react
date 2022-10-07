import styles from './Pagination.module.css'

const Pagination = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let prevPage = props.currentPage === 1? 
                    null:
                    <div className={styles.page} onClick={() => { props.setCurrentPage(props.currentPage-1) }}>Prev</div>
    let nextPage = props.currentPage === pageCount?
                   null:
                   <div className={styles.page} onClick={() => { props.setCurrentPage(props.currentPage+1) }}>Next</div>

    let startIterPage = props.currentPage - 3 <= 2? 2 : props.currentPage - 3;
    let endIterPage = pageCount - props.currentPage <= 4? pageCount : props.currentPage + 4;
    for (let i = startIterPage; i < endIterPage; i++) {
        pages.push(
            <div onClick={() => { props.setCurrentPage(i) }} className={i === props.currentPage ? `${styles.page} ${styles.currentPage}` : styles.page}>{i}</div>
        );
    }

    return (
        <div className={styles.paginationBlock}>
            {prevPage}
            <div  onClick={() => { props.setCurrentPage(1) }} className={1 === props.currentPage ? `${styles.page} ${styles.currentPage}` : styles.page}>1</div>
            {startIterPage === 2? null: "..."}
            {pages}
            {endIterPage === pageCount? null: "..."}
            <div onClick={() => { props.setCurrentPage(pageCount) }} className={pageCount === props.currentPage ? `${styles.page} ${styles.currentPage}` : styles.page}>{pageCount}</div>
            {nextPage}
        </div>
    )
}

export default Pagination;