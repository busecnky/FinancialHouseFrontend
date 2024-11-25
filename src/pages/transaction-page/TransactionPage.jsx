import "./transactionPage.css"

import Header from "../../components/header/Header.jsx";
import reportImage from "../../images/report.png";
import listImage from "../../images/list.png";
import transactionImage from "../../images/transaction.png";
import {Card, CardActions, CardContent} from "@mui/material";
import {Link} from "react-router-dom";

const TransactionPage = () => {



    return (
        <div className="transactions-main">
            <Header className="transactions-header"/>

            <div className="transactions-body">
                <div className="transactions-h1">
                    <h1>Transaction Operations</h1>
                </div>
                <div className="transactions-container">
                    <div>
                        <Card sx={{minWidth: 275, boxShadow: 10 }}>
                            <CardContent>
                                <img src={reportImage} alt="reportImage"/>
                            </CardContent>
                            <CardActions>
                                <Link className="link" to="/reports">Access Reports</Link>
                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{minWidth: 275, boxShadow: 10 }}>
                            <CardContent>
                                <img src={listImage} alt="listImage"/>
                            </CardContent>
                            <CardActions>
                                <Link className="link" to="/list">Access Reports List</Link>

                            </CardActions>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{minWidth: 275, boxShadow: 10 }}>
                            <CardContent>
                                <img  src={transactionImage} alt="transactionImage"/>
                            </CardContent>
                            <CardActions>
                                <Link className="link" to="/transaction">Access Transaction</Link>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
            </div>
            );
            };

            export default TransactionPage;
