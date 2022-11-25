import React from 'react';
import { Link } from 'react-router-dom';

const MortgageRate= () => {
    return(
        <div>
            <div class="container mt-3">
  <h2>Our Mortgage Rates:</h2>
  <p>Please note: these rates are subject to change. Please grab your desired deal as soon as possible!</p>            
  Please click <Link to="/mortgagecalc">here</Link> to start the application
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Product</th>
        <th>LTV</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2yr</td>
        <td>60-65%</td>
        <td>2.3%</td>
      </tr>
      <tr>
        <td>2yr</td>
        <td>65-70%</td>
        <td>2.8%</td>
      </tr>
      <tr>
        <td>2yr</td>
        <td>70-75%</td>
        <td>3.0%</td>
      </tr>
      <tr>
        <td>2yr</td>
        <td>75-80%</td>
        <td>3.3%</td>
      </tr>
      <tr>
        <td>2yr</td>
        <td>80-85%</td>
        <td>3.5%</td>
      </tr>
      <tr>
        <td>2yr</td>
        <td>85-90%</td>
        <td>4%</td>
      </tr>
      <tr>
        <td>2yr</td>
        <td>90-95%</td>
        <td>4.3 %</td>
      </tr>
      <tr>
        <td>5yr</td>
        <td>60-65%</td>
        <td>2.3%</td>
      </tr>
      <tr>
        <td>5yr</td>
        <td>65-70%</td>
        <td>2.8%</td>
      </tr>
      <tr>
        <td>5yr</td>
        <td>70-75%</td>
        <td>3.0%</td>
      </tr>
      <tr>
        <td>5yr</td>
        <td>75-80%</td>
        <td>3.3%</td>
      </tr>
      <tr>
        <td>5yr</td>
        <td>80-85%</td>
        <td>3.5%</td>
      </tr>
      <tr>
        <td>5yr</td>
        <td>85-90%</td>
        <td>4%</td>
      </tr>
      <tr>
        <td>5yr</td>
        <td>90-95%</td>
        <td>4.3 %</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    )
}

export default MortgageRate;