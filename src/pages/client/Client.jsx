import { useState } from "react";
import { getClient } from "../../services/apiService";
import "./client.css";
import Header from "../../components/header/Header.jsx";

const Client = () => {
    const [transactionId, setTransactionId] = useState("1-1444392550-1");
    const [customerInfo, setCustomerInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await getClient({ transactionId });
            console.log(response);
            if (response.customerInfo) {
                setCustomerInfo(response.customerInfo);
            } else {
                setCustomerInfo("No client information found.");
            }
        } catch (err) {
            console.log(err)
            setError("Error fetching client information.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header className="transactions-header"/>
            <div className="client-container">
                <h2>Client Information</h2>
                <form onSubmit={handleSubmit} className="client-form">
                    <label htmlFor="transactionId">Transaction ID</label>
                    <input
                        type="text"
                        id="transactionId"
                        placeholder="Enter Transaction ID*"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Fetch Client Info"}
                    </button>
                </form>

                {error && <p className="error-message">{error}</p>}
                {customerInfo && <p className="customer-info">{customerInfo}</p>}
            </div>
        </div>

    );
};

export default Client;
