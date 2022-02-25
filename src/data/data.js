// Images
import Price from "../assets/prices.svg";
import Reviews from "../assets/reviews.svg";
import Time from "../assets/time.svg";
import Cancel from "../assets/cancel.svg";

import ReviewerOne from "../assets/person1.jpg";
import ReviewerTwo from "../assets/person2.jpg";
import ReviewerThree from "../assets/person3.jpg";

export const cards = [
  {
    title: "Verified Reviews",
    img: Reviews,
    details:
      "We have over 81 million reviews written by travelers who have used the website to make room reservations.",
    id: "1",
  },
  {
    title: "Daily Deals",
    img: Price,
    details: "New deals are added to the website every day.",
    id: "2",
  },
  {
    title: "Free Cancellations",
    img: Cancel,
    details: "Booking.com offers free cancellation services for most rooms.",
    id: "3",
  },

  {
    title: "24/7 Customer Support",
    img: Time,
    details: "Rated the best customer service by the people.",
    id: "4",
  },
];

export const reviews = [
  {
    quote:
      "Cozy Homes prices are low compared to other travel agencies websites. The hotel reviews are of visitors from all over the world traveling, taking vacation, sharing their opinions and experience. I never had aproblem using them.",
    name: "Lisa",
    location: "From Cape Town, SA",
    image: ReviewerOne,
    id: "0",
  },
  {
    quote:
      " Excellent site. Gives options of booking with or without cancellation options. A must in this covid19 environment. The site clearly lists all room options at the business or resort hotel with photos making an informed selection easy.",
    name: "Charles",
    location: "From Dubai, UAE",
    image: ReviewerThree,
    id: "1",
  },
  {
    quote:
      "My card was stolen and a booking was made under the card, the customer service responded within 12 hours and agreed to cancel the trip without charges to my card, took care of any inconvenience and sorted it out.",
    name: "Whitney",
    location: "From New York, USA",
    image: ReviewerTwo,
    id: "2",
  },
];
