<>
  {ShowTravel ? (
    <div className="sidebar">
      <div className="sidebar-shadow">
        <div className="order_content">
          <div className="car_header">Elenext Travel</div>
        </div>
      </div>
    </div>
  ) : ""}



  {ShowFlights ? (
    <div className="sidebar">
      <div className="sidebar-shadow">
        <div className="order_content">
          <div className="car_header">Flights</div>
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse1"
                  aria-expanded="false"
                  aria-controls="flush-collapse1"
                >
                  How do I know if my booking has been confirmed?
                </button>
              </h2>
              <div
                id="flush-collapse1"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Once you complete your booking, you will receive an email with the E-ticket and an SMS confirming the same. You will also receive another SMS from the airline with the booking details.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  I want to update my email id/phone number for the booking that I've just made, how do I do it?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    You can get in touch with the airline to update your email ID/phone number.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How can I add extra baggage/meals to my flight booking? What are the charges?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    You can get in touch with the airline for the addition of extra baggage/meals to your flight booking and to know the charges.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse4"
                  aria-expanded="false"
                  aria-controls="flush-collapse4"
                >
                  How can I get the E-ticket for my flight booking?
                </button>
              </h2>
              <div
                id="flush-collapse4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    An E-ticket is always sent to your registered email address right after your flight booking is confirmed. You can also view the E-ticket from the 'My Orders' section of your Elenext account on our app. Under 'My orders', click 'Travel bookings', select the booking for which you want the E-ticket and then choose either of the two options 'View E-ticket' and 'Email E-ticket'. Please note that the 'View E-ticket' option is not available on our website.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse5"
                  aria-expanded="false"
                  aria-controls="flush-collapse5"
                >
                  Do sellers on Elenext ship internationally?
                </button>
              </h2>
              <div
                id="flush-collapse5"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Currently, sellers on Elenext only ship within India.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse6"
                  aria-expanded="false"
                  aria-controls="flush-collapse6"
                >
                  How can I cancel my flight booking?
                </button>
              </h2>
              <div
                id="flush-collapse6"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Here's how you can cancel your flight booking on the Elenext app:
                    <ul style={{ listStyle: "inherit", marginLeft: "20px" }}>
                      <li>Click on the 'flights' section and visit 'My Orders'</li>
                      <li>For the flight booking that you want to cancel, select the passenger's name, sector and reason for cancellation and click on 'calculate refund'</li>
                      <li>Check the airline fare rules and cancel the booking as desired</li>
                    </ul>
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse7"
                  aria-expanded="false"
                  aria-controls="flush-collapse7"
                >
                  What is Web check-in?
                </button>
              </h2>
              <div
                id="flush-collapse7"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Web check-in is the process through which you can confirm your availability for boarding a flight and get the boarding pass from the airline's website prior to your date of travel. You may also get options to choose meals, baggage, etc. and select seats as per your preference depending on the airline and the flight.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse8"
                  aria-expanded="false"
                  aria-controls="flush-collapse8"
                >
                  How can I do a Web check-in?
                </button>
              </h2>
              <div
                id="flush-collapse8"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Here's how you can easily do the web check-in for your flight:
                    <ul style={{ listStyle: "inherit", marginLeft: "20px" }}>
                      <li>Visit the online check-in page of the airline.</li>
                      <li>Enter your surname and Booking Reference/PNR to initiate your check-in.</li>
                      <li>Select the passengers you'd like to check-in.</li>
                      <li>You may be asked to enter advance passenger information if required by the destination country (Only for INTL flights)</li>
                      <li>Print your boarding pass.</li>
                    </ul>
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse9"
                  aria-expanded="false"
                  aria-controls="flush-collapse9"
                >
                  Can I make partial payments at the time of flight booking?
                </button>
              </h2>
              <div
                id="flush-collapse9"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    No, the option to make partial payments for booking a flight is currently not available on Elenext Travel.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse10"
                  aria-expanded="false"
                  aria-controls="flush-collapse10"
                >
                  What are the various payment options available for flight booking?
                </button>
              </h2>
              <div
                id="flush-collapse10"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <ul>
                      <li>You can book your flight on Elenext Travel using any of the following payment options:</li>
                      <li>Credit/Debit </li>
                      <li>CardNet Banking</li>
                      <li>Credit card EMI</li>
                      <li>UPI</li>
                      <li>Wallets</li>
                    </ul>
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse11"
                  aria-expanded="false"
                  aria-controls="flush-collapse11"
                >
                  Can I use my card to book a flight in someone else’s name?
                </button>
              </h2>
              <div
                id="flush-collapse11"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Yes, but please mention the name of the person travelling as per any government ID proof under the 'Traveller's name' section.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse12"
                  aria-expanded="false"
                  aria-controls="flush-collapse12"
                >
                  What is a convenience fee? Why am I being charged?
                </button>
              </h2>
              <div
                id="flush-collapse12"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    A convenience fee can also be referred to as an internet handling fee and is charged by the booking service provider. While most portals add it on the payment page, we believe in being transparent about it and showing the convenience fee on the booking details page itself. Please note that the fee is usually non-refundable if you cancel the ticket.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse13"
                  aria-expanded="false"
                  aria-controls="flush-collapse13"
                >
                  What are 'No show' and 'No refund'?
                </button>
              </h2>
              <div
                id="flush-collapse13"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    'No show' is the term used by airlines to indicate the status of a passenger who makes a reservation but neither travels nor cancels the booking.<br />When cancellation penalties including that charged by Elenext Travel and the airline combined are higher than the amount paid by the customer at the time of booking, the customer is not eligible for any refund except for some unutilised taxes from your booking amount and this is called as 'No refund'.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse14"
                  aria-expanded="false"
                  aria-controls="flush-collapse14"
                >
                  Can I use SuperCoins to book a flight on Elenext Travel Travel? If yes, what is the limit?
                </button>
              </h2>
              <div
                id="flush-collapse14"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Yes, you can use your SuperCoins which are in a credited state to book flights on Elenext Travel and there is no limit to the number of SuperCoins that you can use for a single booking.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse15"
                  aria-expanded="false"
                  aria-controls="flush-collapse15"
                >
                  What is a boarding pass?
                </button>
              </h2>
              <div
                id="flush-collapse15"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    A boarding pass or boarding card is a document provided by an airline during check-in that gives passengers permission to enter the restricted area of an airport (also known as the airside portion of the airport) and to board the aeroplane for a particular flight.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse16"
                  aria-expanded="false"
                  aria-controls="flush-collapse16"
                >
                  I have redeemed a coupon code for a flight booking that I have cancelled, can I use the same coupon code for a new booking?
                </button>
              </h2>
              <div
                id="flush-collapse16"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    No, a coupon code cannot be redeemed for more than one booking.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse18"
                  aria-expanded="false"
                  aria-controls="flush-collapse18"
                >
                  How can I get the information about the terminal from where my flight is scheduled to depart?
                </button>
              </h2>
              <div
                id="flush-collapse18"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Information about the terminal is mentioned on the E-ticket that is sent to your registered email after your booking is confirmed. However, it is recommended that you still confirm it with the airline as terminals are subject to change.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse19"
                  aria-expanded="false"
                  aria-controls="flush-collapse19"
                >
                  What happens if I miss my flight?
                </button>
              </h2>
              <div
                id="flush-collapse19"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    In case you miss your flight, you will be declared a 'no show' as per airline guidelines and only some unutilised taxes from your booking amount will be refunded to you by the airline.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse200"
                  aria-expanded="false"
                  aria-controls="flush-collapse200"
                >
                  How can I pre-select my flight seat?
                </button>
              </h2>
              <div
                id="flush-collapse200"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    While some airlines give you the option to pre-select seats free of cost, others may charge a fee. You can pre-book seats during the web check-in process.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse201"
                  aria-expanded="false"
                  aria-controls="flush-collapse201"
                >
                  I want wheelchair assistance for my flight booking. How do I arrange that?
                </button>
              </h2>
              <div
                id="flush-collapse201"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Wheelchair service is provided by all airlines free of cost. Please get in touch with the airline directly and place a wheelchair service request.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse202"
                  aria-expanded="false"
                  aria-controls="flush-collapse202"
                >
                  Which documents do I need to carry for a domestic/international flight?
                </button>
              </h2>
              <div
                id="flush-collapse202"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    For a domestic flight, you will need to carry a government-approved ID (PAN card, driving license, Aadhar card, voter ID, passport) along with a digital or print copy of your ticket.<br />In case of an international flight, along with a digital or printed copy of your ticket, it is mandatory to carry a valid passport. You may also need a valid visa for the country you are travelling to. Please check the visa-related guidelines of that country before travelling.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse203"
                  aria-expanded="false"
                  aria-controls="flush-collapse203"
                >
                  Which documents do I need to carry for an infant while travelling by flight?
                </button>
              </h2>
              <div
                id="flush-collapse203"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    You can carry the date of birth certificate or passport for an infant. Vaccination cards are also accepted by a few airlines for domestic travel. However, you can get in touch with the airline for additional information.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : ""}

  {ShowHotels ? (
    <div className="sidebar">
      <div className="sidebar-shadow">
        <div className="order_content">
          <div className="car_header">Hotels</div>
          <div
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse1"
                  aria-expanded="false"
                  aria-controls="flush-collapse1"
                >
                  How do I know if my hotel booking has been confirmed?
                </button>
              </h2>
              <div
                id="flush-collapse1"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Once you complete your hotel booking, you will receive an email with a voucher and an SMS with the booking confirmation.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How can I get the voucher for my hotel booking?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    A voucher is always sent to your registered email address right after your hotel booking is confirmed. You can also view the voucher in the 'My Orders' section of your Elenext account. Under 'My orders', click 'Travel bookings' and select the booking for which you want the voucher.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How can I cancel my hotel booking?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Here's how you can cancel your hotel booking:
                    <ul>
                      <li>- Go to 'My Orders'</li>
                      <li>- Select 'Travel bookings'</li>
                      <li>- Select the booking you want to cancel</li>
                      <li>- Click on 'Cancel booking'</li>
                      <li>- Review the refund amount</li>
                      <li>- Click 'Confirm' to cancel</li>
                    </ul>
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse4"
                  aria-expanded="false"
                  aria-controls="flush-collapse4"
                >
                  What is a convenience fee? Why am I being charged?
                </button>
              </h2>
              <div
                id="flush-collapse4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    A convenience fee can also be referred to as an internet handling fee and is charged by the booking service provider. While most portals add it on the payment page, we believe in being transparent about it and showing the convenience fee on the booking details page itself. Please note that the fee is usually non-refundable if you cancel the booking.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse5"
                  aria-expanded="false"
                  aria-controls="flush-collapse5"
                >
                  What is a 'No show'?
                </button>
              </h2>
              <div
                id="flush-collapse5"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    'No show' is the term used by hotels to indicate the status of a traveller who makes a reservation but neither checks in nor cancels the booking.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse6"
                  aria-expanded="false"
                  aria-controls="flush-collapse6"
                >
                  Can I use SuperCoins to book a hotel on Elenext Travel? If yes, what is the limit?
                </button>
              </h2>
              <div
                id="flush-collapse6"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Yes, you can use your SuperCoins which are in a credited state to book hotels on Elenext Travel and there is no limit to the number of SuperCoins that you can use for a single booking.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse7"
                  aria-expanded="false"
                  aria-controls="flush-collapse7"
                >
                  What will happen to the SuperCoins I have used for my hotel booking in case I cancel my booking?
                </button>
              </h2>
              <div
                id="flush-collapse7"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    In case you've booked your hotel combining SuperCoins with any other prepaid modes of payment and if you choose to cancel your booking, the number of SuperCoins redeemed for the booking will be refunded to your Elenext account. Any amount paid using one of the prepaid modes will be refunded to the original source of payment. Please note that the final refund amount will be calculated after deducting the cancellation charges which will be applicable to the entire booking amount.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse8"
                  aria-expanded="false"
                  aria-controls="flush-collapse8"
                >
                  My hotel booking has failed and the coupon code used could not be redeemed, can I use the same coupon code for another booking?
                </button>
              </h2>
              <div
                id="flush-collapse8"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Yes, if you have not been able to redeem your coupon code due to a booking failure, you can use the same coupon code for a new booking.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse9"
                  aria-expanded="false"
                  aria-controls="flush-collapse9"
                >
                  Which documents do I need to furnish for a hotel booking in India during check-in?
                </button>
              </h2>
              <div
                id="flush-collapse9"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    You will need to carry a government-approved ID (PAN card, driving license, Aadhar card, voter ID, passport) along with a digital or printed copy of your ticket.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse10"
                  aria-expanded="false"
                  aria-controls="flush-collapse10"
                >
                  Which documents do I need to carry for an international hotel?
                </button>
              </h2>
              <div
                id="flush-collapse10"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Along with a digital or printed copy of your ticket, it is mandatory to carry a valid passport. You may also need a valid visa for the country you are travelling to. Please check the visa-related guidelines of that country before travelling.
                  </p>
                  <br />
                  <WasThis />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : ""}
</>