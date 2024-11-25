import "./clientPage.css"
import Header from "../../components/header/Header.jsx";
import {Card, CardActions, CardContent} from "@mui/material";
import {Link} from "react-router-dom";
import clientImage from "../../images/client.png";

const ClientPage = () => {
    return (
        <div className="clients-main">
            <Header className="clients-header"/>

            <div className="clients-body">
                <div className="clients-h1">
                    <h1>Clients Operations</h1>
                </div>
                <div className="clients-container">
                    <div>
                        <Card sx={{minWidth: 275, boxShadow: 10 }}>
                            <CardContent>
                                <img src={clientImage} alt="clientImage"/>
                            </CardContent>
                            <CardActions>
                                <Link className="link" to="/client">Access Clients</Link>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientPage;
