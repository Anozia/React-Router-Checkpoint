import { useState, useEffect } from "react";
import AddMovie from "../AddMovie/AddMovie.js";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Filtering from "../Filtering/Filtring";

const info = [
  {
    title: "Ant Man",
    img: "/images/Ant Man.jpg",
    description:
      "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters",
    posterURL: "www.imdb.com",
    rating: 9.4,
  },
  // {
  //   title: "Bad Boy",
  //   img: "/images/Bad Boy.jpg",
  //   description:
  //     "An exploration of our discovery of the laws of nature and coordinates in space and timeBad Boys is a series of American buddy cop action comedy films created by George Gallo.",
  //   posterURL: "www.google.com",
  //   rating: 9.3,
  // },
  {
    title: "Bohemian Rhapsody",
    img: "/images/Bohemian Rhapsody.jpg",
    description:
      "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
    posterURL: "www.imdb.com",
    rating: 9.5,
  },
  {
    title: "jaws",
    img: "/images/jaws.jpg",
    description:
      "A police chief, a marine scientist and a fisherman spring into action after a white shark terrorises the inhabitants of Amity, a quiet island.",
    posterURL: "www.planetearth.com",
    rating: 8.4,
  },
  {
    title: "Moonlight",
    img: "/images/moonlight.jpg",
    description:
      "Chiron, a young African-American boy, finds guidance in Juan, a drug dealer, who teaches him to carve his own path. As he grows up in Miami, Juan's advice leaves a lasting impression on him.",
    posterURL: "www.imdb.com",
    rating: 7.3,
  },
  {
    title: "Pulp Fiction_",
    img: "/images/Pulp Fiction_.jpg",
    description:
      "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals..",
    posterURL: "www.posterhub.com",
    rating: 6.9,
  },
  {
    title: "RoboCop",
    img: "/images/RoboCop.jpg",
    description:
      "In a dystopic and crime-infested Detroit, a terminally injured policeman returns to the force as a potent cyborg haunted by submerged memories.",
    posterURL: "www.rottentomatoes.com",
    rating: 9.5,
  },
  {
    title: "Split",
    img: "/images/Split.jpg",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.",
    posterURL: "www.thewalkingdead.com",
    rating: 8.2,
  },
  {
    title: "The Godfather",
    img: "/images/The Godfather.jpg",
    description:
      "The Godfather is a crime novel by American author Mario Puzo.",
    posterURL: "www.amazon.com",
    rating: 8.1,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    console.log(rate + "  " + key);
    setFiltredList(
      list.filter((element) => {
        return (
          element.title.toLowerCase().includes(key.toLowerCase()) &&
          element.rating >= rate
        );
      })
    );
  }

  useEffect(() => {
    filter(keyword, rate);
  }, [list]);

  return (
    <div className="App">
      <Filtering filter={filter} />
      <MovieList list={filtredList} />
      <AddMovie adding={adding} />
    </div>
  );
}

export default App;
