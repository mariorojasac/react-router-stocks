import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Our api key from stockapi.io
  const apiKey = "d96c51ed0bf6ce3e7fdd9adb0237bc86";
  // Grabbing the Currency symbol from the URL Param
  //   const { symbol } = useParams();
  // Using the other two variables to create our URL
  const url = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apiKey}`;

  //state to hold the stock data
  const [stocks, setStocks] = useState([]);

  // useEffect to run getstocks when component mounts
  useEffect(() => {
    getStocks();
  }, []);
  //function to fetch stocks data
  async function getStocks() {
    const response = await fetch(url);
    const stocks = await response.json();
    setStocks(stocks);
  }
  console.log(stocks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, idx) => {
            const { name, price, change, symbol } = stock;
            return (
              <>
                <tr>
                  <td></td>
                  <Link to={`/stocks/${symbol}?${name}?${price}`} key={idx}>
                    <td>
                      {name}/{symbol}
                    </td>
                  </Link>
                  <td>{price}</td>
                  <td>Change</td>
                </tr>
                ;
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
