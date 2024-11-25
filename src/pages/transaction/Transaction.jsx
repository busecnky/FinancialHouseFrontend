import { useState } from "react";
import { getTransaction } from "../../services/apiService";
import "./Transaction.css";
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/Header.jsx";

const Transaction = () => {
    const [transactionId, setTransactionId] = useState("1-1444392550-1");
    const [transactionData, setTransactionData] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const requestData = { transactionId };
            const response = await getTransaction(requestData);
            setTransactionData(response);
        } catch (error) {
            console.error("Error fetching transaction details:", error);
            alert("An error occurred while fetching the transaction details.");
            navigate("/");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header className="transactions-header"/>
            <div className="transaction-container">
                <h2>Transaction Information</h2>
                <form onSubmit={handleSubmit} className="transaction-form">
                    <input
                        type="text"
                        placeholder="Transaction ID*"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Fetch Transaction"}
                    </button>
                </form>

                {transactionData ? (
                    <div className="transaction-details">
                        <h3>Transaction Details</h3>
                        <p>FX: {transactionData.fx || "N/A"}</p>
                        <p>Customer Info: {transactionData.customerInfo || "N/A"}</p>
                        <p>Merchant: {transactionData.merchant || "N/A"}</p>
                        <p>Transaction: {transactionData.transaction || "N/A"}</p>
                    </div>
                ) : (
                    <p>No transaction details found.</p>
                )}
            </div>
        </div>

    );
};

export default Transaction;
