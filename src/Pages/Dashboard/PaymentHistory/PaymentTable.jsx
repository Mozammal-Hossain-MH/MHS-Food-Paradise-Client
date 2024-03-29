

const PaymentTable = ({ payment }) => {
    const {transactionId, category, amount, date, time, status} = payment;
    
    
    return (
        <tr>
            <td title="Transaction Id" className="text-xs md:text-base">{transactionId}</td>
            <td title="Category" className="text-xs md:text-base">{category} </td>
            <td className="text-xs md:text-base">{amount}</td>
            <th className="text-xs md:text-base font-normal">{date}</th>
            <th className="text-xs md:text-base font-normal">{time}</th>
            <th className={`text-xs md:text-base text-white font-bold text-center cursor-wait`}>
                <p className={`rounded px-2 py-1 ${status === 'Pending' ? 'bg-yellow-600 ' : 'bg-green-600'}`}>{status}</p>
            </th>
        </tr>
    );
};

export default PaymentTable;