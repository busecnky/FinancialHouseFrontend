# Frontend Project

This project is a frontend application integrated with the [Backend API](https://github.com/busecnky/FinancialHouseProject). The application provides users with access to various payment and transaction management systems and allows them to query data dynamically.
**It has been tailored to meet the requirements of a case study project.**

## Features

- Provides fast access to payment, transaction, and customer information through a user interface.
- Communicates with the API to dynamically load and display data.
- Allows data querying with various filtering and sorting options.

## Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn (depending on your preferred package manager)

### Running the Project

1. Clone the repository:

   ```bash
   git clone [<Frontend GitHub Link>](https://github.com/busecnky/FinancialHouseFrontent.git)
   cd FinancialHouseFrontend

2. Install dependencies
   ```bash
   npm install

3. Start the application:
   ```bash
   npm run dev

- The application will run at http://localhost:5173.



### This section explains the importance of setting up the proxy to avoid CORS errors while developing locally. It also provides a pointer to backend CORS handling for production environments.

1. To work with the backend API and avoid CORS (Cross-Origin Resource Sharing) issues, I use a proxy.  I added the line in package.json file to set up the proxy:
     "proxy": "http://localhost:8081"

2. Creating a new project for the Node.js proxy server, independent of your React project.
   ```bash
     mkdir react-proxy-server
     cd react-proxy-server
     npm init -y
     npm install express http-proxy-middleware cors

3. Create a new app.js file and add the proxy middleware code:
   ```bash
    const express = require('express');
    const cors = require('cors');
    const { createProxyMiddleware } = require('http-proxy-middleware');
  
    const app = express();
  
    app.use(cors());
  
    app.use('/api', createProxyMiddleware({
      target: 'https://your-backend-api.com', 
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', 
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*'; 
      }
    }));
    
    app.listen(8081, () => {
      console.log('Proxy server is running on http://localhost:8081');
    });

5. Run Node.js proxy server:
   ```bash
    cd react-proxy-server
    node app.js

