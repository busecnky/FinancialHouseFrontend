import { useState } from "react";
import { getTransactionList } from "../../services/apiService";
import "./list.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";

const List = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [merchantId, setMerchantId] = useState("");
    const [acquirerId, setAcquirerId] = useState("");
    const [status, setStatus] = useState("");
    const [operation, setOperation] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [errorCode, setErrorCode] = useState("");
    const [filterField, setFilterField] = useState("");
    const [filterValue, setFilterValue] = useState("");
    const [page, setPage] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [responseStatus, setResponseStatus] = useState(null);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const requestData = {
                fromDate,
                toDate,
                merchantId,
                acquirerId,
                status,
                operation,
                paymentMethod,
                filterField,
                filterValue,
                page,
            };
            console.log(requestData)
            const response = await getTransactionList(requestData);
            console.log(response)

            setResponseData(response);
            setResponseStatus(response.status)
        } catch (error) {
            console.error("Error fetching transaction list:", error);
            alert("An error occurred while fetching the transaction list.");
            navigate("/");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header className="transactions-header"/>
            <div className="list-container">
                <h2>List Reports</h2>
                <form onSubmit={handleSubmit} className="list-form">
                    <label>From Date</label>
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                    <label>To Date</label>
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                    <label>Merchant ID</label>
                    <input
                        type="text"
                        value={merchantId}
                        onChange={(e) => setMerchantId(e.target.value)}
                    />
                    <label>Acquirer ID</label>
                    <input
                        type="text"
                        value={acquirerId}
                        onChange={(e) => setAcquirerId(e.target.value)}
                    />
                    <label>Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Select Status</option>
                        <option value="APPROVED">APPROVED</option>
                        <option value="WAITING">WAITING</option>
                        <option value="DECLINED">DECLINED</option>
                        <option value="ERROR">ERROR</option>
                    </select>
                    <label>Operation</label>
                    <select
                        value={operation}
                        onChange={(e) => setOperation(e.target.value)}
                    >
                        <option value="">Select Operation</option>
                        <option value="DIRECT">DIRECT</option>
                        <option value="REFUND">REFUND</option>
                        <option value="3D">3D</option>
                        <option value="3DAUTH">3DAUTH</option>
                        <option value="STORED">STORED</option>
                    </select>
                    <label>Payment Method</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="">Select Payment Method</option>
                        <option value="CREDITCARD">CREDITCARD</option>
                        <option value="CUP">CUP</option>
                        <option value="IDEAL">IDEAL</option>
                        <option value="GIROPAY">GIROPAY</option>
                        <option value="MISTERCASH">MISTERCASH</option>
                        <option value="STORED">STORED</option>
                        <option value="PAYTOCARD">PAYTOCARD</option>
                        <option value="CEPBANK">CEPBANK</option>
                        <option value="CITADEL">CITADEL</option>
                    </select>
                    <label htmlFor="errorCode">Error Code</label>
                    <select id="errorCode" value={errorCode} onChange={(e) => setErrorCode(e.target.value)}>
                        <option value="">Select Error Code</option>
                        <option value="Do not honor">Do not honor</option>
                        <option value="Invalid Transaction">Invalid Transaction</option>
                        <option value="Invalid Card">Invalid Card</option>
                        <option value="Not sufficient funds">Not sufficient funds</option>
                        <option value="Incorrect PIN">Incorrect PIN</option>
                        <option value="Invalid country association">Invalid country association</option>
                        <option value="Currency not allowed">Currency not allowed</option>
                        <option value="3-D Secure Transport Error">3-D Secure Transport Error</option>
                        <option value="Transaction not permitted to cardholder">Transaction not permitted to cardholder
                        </option>
                    </select>
                    <label>Filter Field</label>
                    <select
                        value={filterField}
                        onChange={(e) => setFilterField(e.target.value)}
                    >
                        <option value="">Select Filter Field</option>
                        <option value="Transaction UUID">Transaction UUID</option>
                        <option value="Customer Email">Customer Email</option>
                        <option value="Reference No">Reference No</option>
                        <option value="Custom Data">Custom Data</option>
                        <option value="Card PAN">Card PAN</option>
                    </select>
                    <label>Filter Value</label>
                    <input
                        type="text"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                    />
                    <label>Page</label>
                    <input
                        type="number"
                        value={page}
                        onChange={(e) => setPage(e.target.value)}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Fetch List"}
                    </button>
                </form>

                {responseStatus === "DECLINED" && (
                    <p>Status: DECLINED</p>
                )}

                {responseData && (
                    <table className="list-table">
                        <thead>
                        <tr>
                            <th>Per Page</th>
                            <th>Current Page</th>
                            <th>Next Page URL</th>
                            <th>Previous Page URL</th>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{responseData?.per_page}</td>
                            <td>{responseData?.current_page}</td>
                            <td>{responseData?.next_page_url}</td>
                            <td>{responseData?.prev_page_url}</td>
                            <td>{responseData?.data && responseData.data.length > 0 ? responseData.data.length : "No data"}</td>
                        </tr>
                        </tbody>
                    </table>
                )}

                {!responseData && <p>No data available.</p>}
            </div>
        </div>

    );
};

export default List;
