import React from "react";

export function Home() {
  return (
    <section className="wrapper">
        <div className="content">
            <header>
                <h1>How Much is Your League of Legends Account Worth?</h1>
            </header>
            <section>
                <p>Enter your Summoner Name to find out how much your skins are worth:</p>
            </section>
            <footer>
                <input type="text" placeholder="Name.."></input>
                <button>GO</button>
            </footer>
        </div>
    </section>
  );
}