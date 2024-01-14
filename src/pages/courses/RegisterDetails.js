import React from 'react';


const RegisterDetails = () => {
    const handlePayment = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const cardNumber = formData.get('cardNumber');
        const expirationDate = formData.get('expirationDate');
        const cvv = formData.get('cvv');
        
        // You can add your payment processing logic here.

        // Clear the form fields after submission
        event.target.reset();
    };

    return (
        <div className="container">
            <h1>הרשמה לקורס</h1>
            <form id="paymentForm" onSubmit={handlePayment}>
                <div className="form-group">
                    <label htmlFor="cardNumber">מס כרטיס:</label><br></br>
                    <input type="text" id="cardNumber" name="cardNumber" placeholder="---- ---- ---- ----" required /><br></br>
                </div>
                <div className="form-group">
                    <label htmlFor="expirationDate">בתוקף עד:</label><br></br>
                    <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required /><br></br>
                </div>
                <div className="form-group">
                    <label htmlFor="cvv"> CVC:  </label><br></br>
                    <input type="password" id="cvv" name="cvv" placeholder="---" required />
                </div><br></br>
                <button type="submit">רישום ותשלום✔️</button>
            </form>
        </div>
    );
}

export default RegisterDetails;
