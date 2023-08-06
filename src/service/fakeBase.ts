import Event1 from "../assets/img/event1-1x.jpg";
import Event2 from "../assets/img/event2-1x.jpg";
import Event3 from "../assets/img/event3-1x.jpg";
import Event4 from "../assets/img/event4-1x.jpg";
import Event5 from "../assets/img/event5-1x.jpg";
import Event6 from "../assets/img/event6-1x.jpg";
import Event7 from "../assets/img/event7-1x.jpg";
import Event8 from "../assets/img/event8-1x.jpg";

export const events = [
  {
    id: 1,
    name: "Galery Openning",
    date: "12/07/2023 12:00:00 PM",
    description:
      "Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.",
    url: Event1,
    tag: "Art",
    priority: { name: "High", number: 3 },
    city: "Kyiv",
  },
  {
    id: 2,
    name: "Inovation Summit",
    date: "13/07/2023 12:00:00 PM",
    description:
      "Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.",
    url: Event2,
    tag: "Conference",
    priority: { name: "Medium", number: 2 },
    city: "Barselona",
  },
  {
    id: 3,
    name: "Empower Your Creativity",
    date: "14/07/2023 12:00:00 PM",
    description:
      "Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop. ",
    url: Event3,
    tag: "Workshop",
    priority: { name: "High", number: 3 },
    city: "Amsterdam",
  },
  {
    id: 4,
    name: "Summer Soiree",
    date: "15/07/2023 12:00:00 PM",
    description:
      "Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.",
    url: Event4,
    tag: "Party",
    priority: { name: "High", number: 3 },
    city: "Kyiv",
  },
  {
    id: 5,
    name: "Leadership Conference",
    date: "16/07/2023 12:00:00 PM",
    description:
      "Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",
    url: Event5,
    tag: "Business",
    priority: { name: "Medium", number: 2 },
    city: "Zaporizhzhia",
  },
  {
    id: 6,
    name: "Tech Startup Showcase",
    date: "17/07/2023 12:00:00 PM",
    description:
      "Witness the future of technology as innovative startups showcase their groundbreaking ideas.",
    url: Event6,
    tag: "Workshop",
    priority: { name: "Low", number: 1 },
    city: "Kyiv",
  },
  {
    id: 7,
    name: "Acoustic Garden Concert",
    date: "18/07/2023 12:00:00 PM",
    description:
      "Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.",
    url: Event7,
    tag: "Music",
    priority: { name: "High", number: 3 },
    city: "Ivano-Frankivsk",
  },
  {
    id: 8,
    name: "Extreme Adventure Race",
    date: "19/07/2023 12:00:00 PM",
    description:
      "Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.",
    url: Event8,
    tag: "Sport",
    priority: { name: "Low", number: 1 },
    city: "Lviv",
  },
];
