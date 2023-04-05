import React from 'react'

const ShippingDiscription = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="payment_disc">
          <div className="pd_header">Shipping</div>
          <div className="pd_q">
            What are the delivery charges?
          </div>
          <p className="pd_ans">
            Delivery charge varies with each Seller.
          </p>
          <p className="pd_ans">
            Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs. Please check your order summary to understand the delivery charges for individual products.
          </p>
          <p className="pd_ans">
            For Products listed as Elenext Plus, a Rs 40 charge for delivery per item may be applied if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free.
          </p>
          <div className="pd_q">
            Why does the delivery date not correspond to the delivery timeline of X-Y business days?
          </div>
          <p className="pd_ans">
            It is possible that the Seller or our courier partners have a holiday between the day your placed your order and the date of delivery, which is based on the timelines shown on the product page. In this case, we add a day to the estimated date. Some courier partners and Sellers do not work on Sundays and this is factored in to the delivery dates.
          </p>
          <div className="pd_q">
            What is the estimated delivery time?
          </div>
          <p className="pd_ans">
            Sellers generally procure and ship the items within the time specified on the product page. Business days exclude public holidays and Sundays.
          </p>
          <p className="pd_ans">
            Estimated delivery time depends on the following factors:
          </p>
          <ul className='pd_list'>
            <li className='pd_ans'>The Seller offering the product</li>
            <li className='pd_ans'>Product's availability with the Seller</li>
            <li className='pd_ans'>The destination to which you want the order shipped to and location of the Seller.</li>
          </ul>
          <div className="pd_q">
            Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on Elenext?
          </div>
          <p className="pd_ans">
            There are NO hidden charges when you make a purchase on Elenext. List prices are final and all-inclusive. The price you see on the product page is exactly what you would pay.
          </p>
          <p className="pd_ans">
            Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's shipping policy.
          </p>
          <div className="pd_q">
            Why does the estimated delivery time vary for each seller?
          </div>
          <p className="pd_ans">
            You have probably noticed varying estimated delivery times for sellers of the product you are interested in. Delivery times are influenced by product availability, geographic location of the Seller, your shipping destination and the courier partner's time-to-deliver in your location.
          </p>
          <p className="pd_ans">
            Please enter your default pin code on the product page (you don't have to enter it every single time) to know more accurate delivery times on the product page itself.
          </p>
          <div className="pd_q">
            Seller does not/cannot ship to my area. Why?
          </div>
          <p className="pd_ans">
            Please enter your pincode on the product page (you don't have to enter it every single time) to know whether the product can be delivered to your location.
          </p>
          <p className="pd_ans">
            If you haven't provided your pincode until the checkout stage, the pincode in your shipping address will be used to check for serviceability.
          </p>
          <p className="pd_ans">
            Whether your location can be serviced or not depends on
          </p>
          <ul className='pd_list'>
            <li className='pd_ans'>Whether the Seller ships to your location</li>
            <li className='pd_ans'>Legal restrictions, if any, in shipping particular products to your location</li>
            <li className='pd_ans'>The availability of reliable courier partners in your location</li>
          </ul>
          <p className="pd_ans">At times Sellers prefer not to ship to certain locations. This is entirely at their discretion.</p>
          <div className="pd_q">
            Why is the COD option not offered in my location?
          </div>
          <p className="pd_ans">
            Availability of CoD depends on the ability of our courier partner servicing your location to accept cash as payment at the time of delivery.
          </p>
          <p className="pd_ans">
            Our courier partners have limits on the cash amount payable on delivery depending on the destination and your order value might have exceeded this limit. Please enter your pin code on the product page to check if CoD is available in your location.
          </p>
          <div className="pd_q">
            I need to return an item, how do I arrange for a pick-up?
          </div>
          <p className="pd_ans">
            Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.
          </p>
          <p className="pd_ans">
            Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through Ekart, you can return the item through a third-party courier service. Return fees are borne by the Seller.
          </p>
          <div className="pd_q">
            I did not receive my order but got a delivery confirmation SMS/Email.
          </div>
          <p className="pd_ans">
            In case the product was not delivered and you received a delivery confirmation email/SMS, report the issue within 7 days from the date of delivery confirmation for the seller to investigate.
          </p>
          <div className="pd_q">
            What do the different tags like "In Stock", "Available" mean?
          </div>
          <div className="pd_q">
            'In Stock'
          </div>
          <p className="pd_ans">
            For items listed as "In Stock", Sellers will mention the delivery time based on your location pincode (usually 2-3 business days, 4-5 business days or 4-6 business days in areas where standard courier service is available). For other areas, orders will be sent by Registered Post through the Indian Postal Service which may take 1-2 weeks depending on the location.
          </p>
          <div className="pd_q">
            'Available'
          </div>
          <p className="pd_ans">
            The Seller might not have the item in stock but can procure it when an order is placed for the item. The delivery time will depend on the estimated procurement time and the estimated shipping time to your location.
          </p>
          <div className="pd_q">
            'Preorder' or 'Forthcoming'
          </div>
          <p className="pd_ans">
            Such items are expected to be released soon and can be pre-booked for you. The item will be shipped to you on the day of it's official release launch and will reach you in 2 to 6 business days. The Preorder duration varies from item to item. Once known, release time and date is mentioned. (Eg. 5th May, August 3rd week)
          </p>
          <div className="pd_q">
            'Out of Stock'
          </div>
          <p className="pd_ans">
            Currently, the item is not available for sale. Use the 'Notify Me' feature to know once it is available for purchase.
          </p>
          <div className="pd_q">
            'Imported'
          </div>
          <p className="pd_ans">
            Sometimes, items have to be sourced by Sellers from outside India. These items are mentioned as 'Imported' on the product page and can take at least 10 days or more to be delivered to you.
          </p>
          <div className="pd_q">
            'Back In Stock Soon'
          </div>
          <p className="pd_ans">
            The item is popular and is sold out. You can however 'book' an order for the product and it will be shipped according to the timelines mentioned by the Seller.
          </p>
          <div className="pd_q">
            'Temporarily Unavailable'
          </div>
          <p className="pd_ans">The product is currently out of stock and is not available for purchase. The product could to be in stock soon. Use the 'Notify Me' feature to know when it is available for purchase.</p>
          <div className="pd_q">
            'Permanently Discontinued'
          </div>
          <p className="pd_ans">This product is no longer available because it is obsolete and/or its production has been discontinued.</p>
          <div className="pd_q">'Out of Print'</div>
          <p className="pd_ans">This product is not available because it is no longer being published and has been permanently discontinued.</p>
          <div className="pd_q">Does Elenext deliver internationally?</div>
          <p className="pd_ans">As of now, Elenext doesn't deliver items internationally.</p>
          <p className="pd_ans">You will be able to make your purchases on our site from anywhere in the world with credit/debit cards issued in India and 21 other countries, but please ensure the delivery address is in India.</p>
        </div>
      </div>
    </>
  )
}

export default ShippingDiscription