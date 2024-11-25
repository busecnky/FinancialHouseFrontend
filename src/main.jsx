import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './index.css'
import Login from './pages/login/Login.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import TransactionPage from "./pages/transaction-page/TransactionPage.jsx";
import ClientPage from "./pages/clientpage/ClientPage.jsx";
import Reports from "./pages/reports/Reports.jsx";
import List from "./pages/list/List.jsx";
import Transaction from "./pages/transaction/Transaction.jsx";
import Client from "./pages/client/Client.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import App from "./App.jsx";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
        />
        <Route path="/transactions" element={
          <PrivateRoute>
            <TransactionPage />
          </PrivateRoute>
        }
        />
        <Route path="/clients" element={
          <PrivateRoute>
            <ClientPage />
          </PrivateRoute>
        }
        />
        <Route path="/reports" element={
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        }
        />
        <Route path="/list" element={
          <PrivateRoute>
            <List />
          </PrivateRoute>
        }
        />
        <Route path="/transaction" element={
          <PrivateRoute>
            <Transaction />
          </PrivateRoute>
        }
        />
        <Route path="/client" element={
          <PrivateRoute>
            <Client />
          </PrivateRoute>
        }
        />
      </Routes>
    </BrowserRouter>
)
