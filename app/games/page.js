"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Games() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  const sampleGames = [
    {
      id: 1,
      title: "Elden Ring",
      description: "Open world fantasy RPG with challenging gameplay.",
      rating: 9.5,
      image: "/1.jpg",
      developer: "FromSoftware",
      publisher: "Bandai Namco",
      genre: "Role-playing RPG",
      release_date: "February 25, 2022",
    },
    {
      id: 2,
      title: "Cyberpunk 2077",
      description: "Futuristic RPG set in Night City.",
      rating: 7.5,
      image: "/2.jpg",
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      genre: "Action RPG",
      release_date: "December 10, 2020",
    },
    {
      id: 3,
      title: "GTA V",
      description: "Open world crime action game.",
      rating: 9.7,
      image: "/3.jpg",
      developer: "Rockstar North",
      publisher: "Rockstar Games",
      genre: "Action-adventure",
      release_date: "September 17, 2013",
    },
    {
      id: 4,
      title: "Counter Strike",
      description: "Competitive tactical FPS by Valve.",
      rating: 8.8,
      image: "/4.jpg",
      developer: "Valve",
      publisher: "Valve",
      genre: "Tactical FPS",
      release_date: "September 27, 2023",
    },
    {
      id: 5,
      title: "Dota 2",
      description: "MOBA strategy game by Valve.",
      rating: 9.0,
      image: "/5.jpg",
      developer: "Valve",
      publisher: "Valve",
      genre: "MOBA",
      release_date: "July 9, 2013",
    },
    {
      id: 6,
      title: "Deadlock",
      description: "Upcoming hero shooter game by Valve.",
      rating: 8.5,
      image: "/6.jpg",
      developer: "Valve",
      publisher: "Valve",
      genre: "Hero shooter",
      release_date: "Coming soon",
    },
    {
      id: 7,
      title: "Fall Guys",
      description: "Multiplayer party battle royale game.",
      rating: 8.2,
      image: "/7.jpg",
      developer: "Mediatonic",
      publisher: "Epic Games",
      genre: "Party battle royale",
      release_date: "August 4, 2020",
    },
    {
      id: 8,
      title: "Valorant",
      description: "Tactical FPS with unique agents.",
      rating: 8.7,
      image: "/8.jpg",
      developer: "Riot Games",
      publisher: "Riot Games",
      genre: "Tactical FPS",
      release_date: "June 2, 2020",
    },
    {
      id: 9,
      title: "Fortnite",
      description: "Battle royale with building mechanics.",
      rating: 8.5,
      image: "/9.jpg",
      developer: "Epic Games",
      publisher: "Epic Games",
      genre: "Battle royale",
      release_date: "July 21, 2017",
    },
    {
      id: 10,
      title: "Apex Legends",
      description: "Fast-paced battle royale shooter.",
      rating: 8.6,
      image: "/10.jpg",
      developer: "Respawn Entertainment",
      publisher: "Electronic Arts",
      genre: "Battle royale",
      release_date: "February 4, 2019",
    },
  ];

  useEffect(() => {
    setGames(sampleGames);
  }, []);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <nav className={styles.navbar}>
        <h2>
          <a href="/home">GameZone</a>
        </h2>

        <div>
          <a href="/home">Home</a>
          <a href="/games">Games</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className={styles.header}>
        <h1>Games Library</h1>
        <p>Search and check details of your favorite PC games.</p>

        <input
          className={styles.search}
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className={styles.container}>
        <div className={styles.grid}>
          {filteredGames.map((game) => (
            <div className={styles.card} key={game.id}>
              <img src={game.image} alt={game.title} />

              <div className={styles.cardBody}>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <span>⭐ {game.rating}</span>

                <a href={`/games/${game.id}`} className={styles.detailBtn}>
                  Check Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}