"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

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

      <section className={styles.contactHero}>
        <h1>Contact Us</h1>
        <p>Have questions, feedback, or game suggestions? Send us a message.</p>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p><b>Email:</b> support@gamezone.com</p>
          <p><b>Phone:</b> +66 123 456 789</p>
          <p><b>Address:</b> Bangkok, Thailand</p>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}