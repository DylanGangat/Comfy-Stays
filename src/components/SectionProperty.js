// Styles
import "./SectionProperty.scss";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Components
import CardProperty from "./CardProperty";

export default function SectionProperty() {
  const URL =
    "https://booking-com.p.rapidapi.com/v1/hotels/search?dest_id=-1217214&units=metric&order_by=popularity&adults_number=2&checkin_date=2022-08-05&locale=en-gb&dest_type=city&filter_by_currency=ZAR&room_number=1&checkout_date=2022-08-06&page_number=0&include_adjacency=true&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&children_number=2";

  // Needed the 3 hotels data to be used here and not the all the hotels from data
  // const { hotels, error, isPending } = useFetch(URL);

  return (
    <section className="properties bg-dark">
      <div className="container">
        <h2 className="center">Homes guests love</h2>
        <div className="grid spacer">
          {/* {error && <p>{error}</p>}
          {isPending && <p>Is Loading...</p>}
          {hotels &&
            hotels.map(hotel => (
              <CardProperty key={hotel.hotel_id} hotel={hotel} />
            ))} */}
        </div>
      </div>
    </section>
  );
}
