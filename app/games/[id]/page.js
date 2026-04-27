"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function GameDetail() {
  const params = useParams();
  const id = params.id;

  const [showTrailer, setShowTrailer] = useState(false);

  const games = [
    {
      id: "1",
      title: "Elden Ring",
      description: "Open world fantasy RPG with challenging gameplay.",
      rating: 9.5,
      image: "/1.jpg",
      developer: "FromSoftware",
      publisher: "Bandai Namco",
      genre: "Role-playing RPG",
      release_date: "February 25, 2022",
      mode: "Single player / Multiplayer",
      download_link: "https://store.steampowered.com/app/1245620/Elden_Ring/",
      trailer_link: "https://www.youtube.com/embed/E3Huy2cdih0",
    },
    {
      id: "2",
      title: "Cyberpunk 2077",
      description: "Futuristic RPG set in Night City.",
      rating: 7.5,
      image: "/2.jpg",
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      genre: "Action RPG",
      release_date: "December 10, 2020",
      mode: "Single player",
      download_link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
      trailer_link: "https://www.youtube.com/embed/8X2kIfS6fb8",
    },
    {
      id: "3",
      title: "GTA V",
      description: "Open world crime action game.",
      rating: 9.7,
      image: "/3.jpg",
      developer: "Rockstar North",
      publisher: "Rockstar Games",
      genre: "Action-adventure",
      release_date: "September 17, 2013",
      mode: "Single player / Online",
      download_link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
      trailer_link: "https://www.youtube.com/embed/QkkoHAzjnUs",
    },
    {
      id: "4",
      title: "Counter Strike 2",
      description: "Competitive tactical FPS by Valve.",
      rating: 8.8,
      image: "/4.jpg",
      developer: "Valve",
      publisher: "Valve",
      genre: "Tactical FPS",
      release_date: "September 27, 2023",
      mode: "Multiplayer",
      download_link: "https://store.steampowered.com/app/730/CounterStrike_2/",
      trailer_link: "https://www.youtube.com/embed/c80dVYcL69E",
    },
    {
      id: "5",
      title: "Dota 2",
      description: "MOBA strategy game by Valve.",
      rating: 9.0,
      image: "/5.jpg",
      developer: "Valve",
      publisher: "Valve",
      genre: "MOBA",
      release_date: "July 9, 2013",
      mode: "Multiplayer",
      download_link: "https://store.steampowered.com/app/570/Dota_2/",
      trailer_link: "https://www.youtube.com/embed/-cSFPIwMEq4",
    },
    {
      id: "6",
      title: "Deadlock",
      description: "Upcoming hero shooter game by Valve.",
      rating: 8.5,
      image: "/6.jpg",
      developer: "Valve",
      publisher: "Valve",
      genre: "Hero Shooter",
      release_date: "Coming Soon",
      mode: "Multiplayer",
      download_link: "#",
      trailer_link: "https://www.youtube.com/embed/Q5Y4K2GdXFs",
    },
    {
      id: "7",
      title: "Fall Guys",
      description: "Multiplayer party battle royale game.",
      rating: 8.2,
      image: "/7.jpg",
      developer: "Mediatonic",
      publisher: "Epic Games",
      genre: "Party / Battle Royale",
      release_date: "August 4, 2020",
      mode: "Multiplayer",
      download_link: "https://store.epicgames.com/en-US/p/fall-guys",
      trailer_link: "https://www.youtube.com/embed/AyADwdiW7rQ",
    },
    {
      id: "8",
      title: "Valorant",
      description: "Tactical FPS with unique agents.",
      rating: 8.7,
      image: "/8.jpg",
      developer: "Riot Games",
      publisher: "Riot Games",
      genre: "Tactical FPS",
      release_date: "June 2, 2020",
      mode: "Multiplayer",
      download_link: "https://playvalorant.com/",
      trailer_link: "https://www.youtube.com/embed/e_E9W2vsRbQ",
    },
    {
      id: "9",
      title: "Fortnite",
      description: "Battle royale with building mechanics.",
      rating: 8.5,
      image: "/9.jpg",
      developer: "Epic Games",
      publisher: "Epic Games",
      genre: "Battle Royale",
      release_date: "July 21, 2017",
      mode: "Multiplayer",
      download_link: "https://www.epicgames.com/fortnite/",
      trailer_link: "https://www.youtube.com/embed/2gUtfBmw86Y",
    },
    {
      id: "10",
      title: "Apex Legends",
      description: "Fast-paced battle royale shooter.",
      rating: 8.6,
      image: "/10.jpg",
      developer: "Respawn Entertainment",
      publisher: "Electronic Arts",
      genre: "Battle Royale",
      release_date: "February 4, 2019",
      mode: "Multiplayer",
      download_link: "https://store.steampowered.com/app/1172470/Apex_Legends/",
      trailer_link: "https://www.youtube.com/embed/innmNewjkuk",
    },
  ];

  const game = games.find((item) => item.id === id);

  if (!game) {
    return <h1 className={styles.notFound}>Game not found</h1>;
  }

  return (
    <main>
      <nav className={styles.navbar}>
        <h2>
          <a href="/home">GameZone</a>
        </h2>

        <div>
          <a href="/home">Home</a>
          <a href="/games">Games</a>
          <a href="/contact">contact</a>
        </div>
      </nav>

      <section className={styles.detail}>
        <div className={styles.poster}>
          <img src={game.image} alt={game.title} />
        </div>

        <div className={styles.info}>
          <h1>{game.title}</h1>
          <p className={styles.desc}>{game.description}</p>

          <p><b>First release date:</b> {game.release_date}</p>
          <p><b>Developer:</b> {game.developer}</p>
          <p><b>Publisher:</b> {game.publisher}</p>
          <p><b>Genre:</b> {game.genre}</p>
          <p><b>Mode:</b> {game.mode}</p>
          <p><b>Rating:</b> ⭐ {game.rating}</p>

          <div className={styles.buttonGroup}>
            <button
              className={styles.trailerBtn}
              onClick={() => setShowTrailer(true)}
            >
              ▶ Watch Trailer
            </button>

            <a
              href={game.download_link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
            >
              ⬇ Download
            </a>

            <a href="/games" className={styles.backBtn}>
              ← Back to Games
            </a>
          </div>
        </div>
      </section>

      {showTrailer && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowTrailer(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setShowTrailer(false)}
            >
              ✖
            </button>

            <iframe
              src={`${game.trailer_link}?autoplay=1`}
              title={`${game.title} Trailer`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}