import React from 'react'
import '../Styles/PaymentDiscription.css'

const PaymentDiscription = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="payment_disc">
                    <div className="pd_header">Payments</div>
                    <div className="pd_q">
                        How do I pay for a Elenext purchase?
                    </div>
                    <p className="pd_ans">
                        Elenext offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that Elenext's trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.
                    </p>
                    <p className="pd_ans">
                        You may use Internet Banking, Gift Card, Cash on Delivery and Wallet to make your purchase
                    </p>
                    <p className="pd_ans">
                        Elenext also accepts payments made using Visa, MasterCard, Maestro and American Express credit/debit cards in India and 21 other countries.
                    </p>
                    <div className="pd_q">
                        Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on Elenext?
                    </div>
                    <p className="pd_ans">
                        There are NO hidden charges when you make a purchase on Elenext. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you pay.
                    </p>
                    <p className="pd_ans">
                        Delivery charges may be extra depending on the seller policy. Please check individual seller for the same. In case of seller WS Retail, the ₹50 delivery charge is waived off on orders worth ₹500 and over.
                    </p>
                    <div className="pd_q">
                        What is Cash on Delivery?
                    </div>
                    <p className="pd_ans">
                        If you are not comfortable making an online payment on Elenext.com, you can opt for the Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online.
                    </p>
                    <p className="pd_ans">
                        The maximum order value for a Cash on Delivery (C-o-D) payment is ₹50,000. It is strictly a cash-only payment method. Gift Cards or store credit cannot be used for C-o-D orders. Foreign currency cannot be used to make a C-o-D payment. Only Indian Rupees accepted.
                    </p>
                    <div className="pd_q">
                        How do I pay using a credit/debit card?
                    </div>
                    <p className="pd_ans">
                        We accept payments made by credit/debit cards issued in India and 21 other countries.
                    </p>
                    <div className="pd_q">
                        Credit cards
                    </div>
                    <p className="pd_ans">
                        We accept payments made using Visa, MasterCard and American Express credit cards.
                    </p>
                    <p className="pd_ans">
                        To pay using your credit card at checkout, you will need your card number, expiry date, three-digit CVV number (found on the backside of your card). After entering these details, you will be redirected to the bank's page for entering the online 3D Secure password.
                    </p>
                    <div className="pd_q">
                        Debit cards
                    </div>
                    <p className="pd_ans">
                        We accept payments made using Visa, MasterCard and Maestro debit cards.
                    </p>
                    <p className="pd_ans">
                        To pay using your debit card at checkout, you will need your card number, expiry date (optional for Maestro cards), three-digit CVV number (optional for Maestro cards). You will then be redirected to your bank's secure page for entering your online password (issued by your bank) to complete the payment.
                    </p>
                    <p className="pd_ans">
                        Internationally issued credit/debit cards cannot be used for Flyte, Wallet and eGV payments/top-ups.
                    </p>
                    <div className="pd_q">
                        Is it safe to use my credit/debit card on Elenext?
                    </div>
                    <p className="pd_ans">
                        Your online transaction on Elenext is secure with the highest levels of transaction security currently available on the Internet. Elenext uses 256-bit encryption technology to protect your card information while securely transmitting it to the respective banks for payment processing.
                    </p>
                    <p className="pd_ans">
                        All credit card and debit card payments on Elenext are processed through secure and trusted payment gateways managed by leading banks. Banks now use the 3D Secure password service for online transactions, providing an additional layer of security through identity verification.
                    </p>
                    <div className="pd_q">
                        What steps does Elenext take to prevent card fraud?
                    </div>
                    <p className="pd_ans">
                        Elenext realizes the importance of a strong fraud detection and resolution capability. We and our online payments partners monitor transactions continuously for suspicious activity and flag potentially fraudulent transactions for manual verification by our team.
                    </p>
                    <p className="pd_ans">
                        In the rarest of rare cases, when our team is unable to rule out the possibility of fraud categorically, the transaction is kept on hold, and the customer is requested to provide identity documents. The ID documents help us ensure that the purchases were indeed made by a genuine card holder. We apologise for any inconvenience that may be caused to customers and request them to bear with us in the larger interest of ensuring a safe and secure environment for online transactions.
                    </p>
                    <div className="pd_q">
                        What is a 3D Secure password?
                    </div>
                    <p className="pd_ans">
                        The 3D Secure password is implemented by VISA and MasterCard in partnership with card issuing banks under the "Verified by VISA" and "Mastercard SecureCode" services, respectively.
                    </p>
                    <p className="pd_ans">
                        The 3D Secure password adds an additional layer of security through identity verification for your online credit/debit card transactions. This password, which is created by you, is known only to you. This ensures that only you can use your card for online purchases.
                    </p>
                    <div className="pd_q">
                        How can I get the 3D Secure password for my credit/debit card?
                    </div>
                    <p className="pd_ans">
                        You can register for the 3D Secure password for your credit/debit card by visiting your bank's website. The registration links for some of the banks have been provided below for easy reference:
                    </p>
                    <table className='pd_table'>
                        <tr>
                            <td className='pd_tbl'>State Bank of India</td>
                            <td className='pd_tbl'>ICICI Bank</td>
                            <td className='pd_tbl'>HDFC Bank</td>
                            <td className='pd_tbl'>Punjab National Bank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Axis Bank</td>
                            <td className='pd_tbl'>Corporation Bank</td>
                            <td className='pd_tbl'>Andhra Bank</td>
                            <td className='pd_tbl'>Bank of Baroda</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Standard Chartered India</td>
                            <td className='pd_tbl'>Union Bank of India</td>
                            <td className='pd_tbl'>Central Bank of India</td>
                            <td className='pd_tbl'>Citibank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Deutsche Bank</td>
                            <td className='pd_tbl'>Dhanlakshmi Bank</td>
                            <td className='pd_tbl'>IDBI Bank</td>
                            <td className='pd_tbl'>Canara Bank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>IndusInd Bank</td>
                            <td className='pd_tbl'>Federal Bank</td>
                            <td className='pd_tbl'>Kotak Mahindra Bank</td>
                            <td className='pd_tbl'>Karur Vysya Bank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Oriental Bank of Commerce</td>
                            <td className='pd_tbl'>South Indian Bank</td>
                            <td className='pd_tbl'>Vijaya Bank</td>
                            <td className='pd_tbl'></td>
                        </tr>
                    </table>
                    <div className="pd_q">
                        Can I use my bank's Internet Banking feature to make a payment?
                    </div>
                    <p className="pd_ans">
                        Yes. Elenext offers you the convenience of using your bank's Internet Banking service to make a payment towards your order. With this you can directly transfer funds from your bank account, while conducting a highly secure transaction.
                    </p>

                    <p className="pd_ans" style={{padding:"20px 0"}}>
                        We accept payment through Internet Banking for the following banks:
                    </p>

                    <table className='pd_table'>
                        <tr>
                            <td className='pd_tbl'>State Bank of India</td>
                            <td className='pd_tbl'>ICICI Bank</td>
                            <td className='pd_tbl'>HDFC Bank</td>
                            <td className='pd_tbl'>Punjab National Bank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Axis Bank</td>
                            <td className='pd_tbl'>Corporation Bank</td>
                            <td className='pd_tbl'>Andhra Bank</td>
                            <td className='pd_tbl'>Bank of Baroda</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Standard Chartered India</td>
                            <td className='pd_tbl'>Union Bank of India</td>
                            <td className='pd_tbl'>Central Bank of India</td>
                            <td className='pd_tbl'>Citibank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Deutsche Bank</td>
                            <td className='pd_tbl'>Dhanlakshmi Bank</td>
                            <td className='pd_tbl'>IDBI Bank</td>
                            <td className='pd_tbl'>Canara Bank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>IndusInd Bank</td>
                            <td className='pd_tbl'>Federal Bank</td>
                            <td className='pd_tbl'>Kotak Mahindra Bank</td>
                            <td className='pd_tbl'>Karur Vysya Bank</td>
                        </tr>
                        <tr>
                            <td className='pd_tbl'>Oriental Bank of Commerce</td>
                            <td className='pd_tbl'>South Indian Bank</td>
                            <td className='pd_tbl'>Vijaya Bank</td>
                            <td className='pd_tbl'></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PaymentDiscription