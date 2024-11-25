import "./reports.css";
import { useState } from 'react';
import {getTransactionReport} from "../../services/apiService.js";
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/Header.jsx";

const Reports = () => {
    const [fromDate, setFromDate] = useState('2015-07-01');
    const [toDate, setToDate] = useState('2015-10-01');
    const [merchant, setMerchant] = useState();
    const [acquirer, setAcquirer] = useState();
    const [responseData, setResponseData] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const requestData = {
                fromDate: fromDate,
                toDate: toDate,
                merchant: merchant || null,
                acquirer: acquirer || null,
            };
            const response = await getTransactionReport(requestData);
            setResponseData(response.data);
            setStatus(response.status);
        } catch (error) {
            console.error('Error fetching report:', error);
            alert('An error occurred while fetching the report.');
            navigate("/");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header className="transactions-header"/>
            <div className="transactions-report">
                <h1>Transaction Report</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label>From Date:</label>
                        <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>To Date:</label>
                        <input
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Merchant ID:</label>
                        <input
                            type="number"
                            value={merchant}
                            onChange={(e) => setMerchant(Number(e.target.value))}
                        />
                    </div>
                    <div className="form-group">
                        <label>Acquirer ID:</label>
                        <input
                            type="number"
                            value={acquirer}
                            onChange={(e) => setAcquirer(Number(e.target.value))}
                        />
                    </div>
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Loading...' : 'Get Report'}
                    </button>
                </form>
                {status && <h2>Status: {status}</h2>}

                {responseData && (
                    <div className="response">
                        {responseData.response && responseData.response.length > 0 ? (
                            <table>
                                <thead>
                                <tr>
                                    <th>Currency</th>
                                    <th>Count</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {responseData.response.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.currency}</td>
                                        <td>{item.count}</td>
                                        <td>{item.total}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No transaction data available</p>
                        )}
                    </div>
                )}
            </div>
        </div>

    );
};

export default Reports;
