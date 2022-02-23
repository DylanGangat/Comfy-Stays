import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1 className="hero-title">
            {"The Best & most Affordable rental deals on the market"}
          </h1>
          <form>
            <div className="location">
              <label htmlFor="city">City:</label>
              <input type="text" name="city" id="city" />
            </div>

            <div className="details">
              <div>
                <label htmlFor="adults">Adults:</label>
                <input type="number" name="adults" id="adults" />
              </div>
              <div>
                <label htmlFor="rooms">Rooms:</label>
                <input type="number" name="rooms" id="rooms" />
              </div>
            </div>

            <div className="stay-log">
              <div>
                <label htmlFor="checkin">Check in:</label>
                <input type="date" name="checkin" id="checkin" />
              </div>
              <div>
                <label htmlFor="checkout">Check out:</label>
                <input type="date" name="checkout" id="checkout" />
              </div>
            </div>
            <button type="submit">Search Places</button>
          </form>
        </div>
      </div>
    </section>
  );
}
