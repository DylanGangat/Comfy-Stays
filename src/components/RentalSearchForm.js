// Styles
import "./RentalSearchForm.scss";


export default function RentalSearchForm() {
  return (
    <div className="rental-search-form">
      <div>
        <h1 className="hero-title">
          The <span className="text-secondary">Best</span> & most{" "}
          <span className="text-secondary">Affordable</span> rental deals on the
          market
        </h1>
      </div>

      <form className="flow-content spacer">
        {/* Location */}
        <div className="stay-location">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter your Location"
            required
          />
        </div>
        {/* Adults */}
        <div className="stay-details">
          <div>
            <label htmlFor="adults">Adults:</label>
            <input
              className="adults-number"
              type="number"
              name="adults"
              id="adults"
              min="1"
              max="20"
              placeholder="1"
              required
            />
          </div>
          {/* Rooms */}
          <div>
            <label htmlFor="rooms">Rooms:</label>
            <input
              className="rooms-number"
              type="number"
              name="rooms"
              id="rooms"
              min="1"
              max="20"
              placeholder="1"
              required
            />
          </div>
        </div>
        {/* Checkin/out */}
        <div className="stay-log">
          <div>
            <label htmlFor="checkin">Check in:</label>
            <input type="date" name="checkin" id="checkin" required />
          </div>
          <div>
            <label htmlFor="checkout">Check out:</label>
            <input type="date" name="checkout" id="checkout" required />
          </div>
        </div>
        <button className="btn" type="submit">
          Search Places
        </button>
      </form>
    </div>
  );
}
