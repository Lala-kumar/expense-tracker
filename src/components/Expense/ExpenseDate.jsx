import './ExpenseDate.css'
function ExpenseDate(props) {

    // const month = props.det.getMonth(); // 02
    const month = props.det.toLocaleString('en-US', { month: 'long' }); // march

    const day = props.det.toLocaleString('en-US', { day: '2-digit' });
    // const day = props.det.getDate();

    const year = props.det.getFullYear();

    return <div className='expense-item__date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
}
export default ExpenseDate;