

const PaymentTable = ({ payment }) => {
    const {transactionId, category, amount, date, status} = payment;
    const day = date.split('T')[0];
    console.log(day);
    const time = date.split('T')[1].split('.')[0];
    console.log(time)
    return (
        <tr>
            <td title="User Name" className="text-xs md:text-base">{transactionId}</td>
            <td title="User Email" className="text-xs md:text-base">{category} </td>
            <td className="text-xs md:text-base">{amount}</td>
            <th className="text-xs md:text-base font-normal">{day}</th>
            <th className="text-xs md:text-base font-normal">{time}</th>
            <th className={`text-xs md:text-base text-white font-bold text-center cursor-wait`}>
                <p className={`rounded px-2 py-1 ${status === 'Pending' ? 'bg-yellow-600 ' : 'bg-green-600'}`}>{status}</p>
            </th>
        </tr>
    );
};

export default PaymentTable;