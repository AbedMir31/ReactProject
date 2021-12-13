import React from "react";

export function Home() {
  return (
    <div>
        <header className="topbar">
            <a href="./" text>LoL Skin Appraiser</a>
        </header>
        <section className="wrapper">
            <div className="content">
                <header>
                    <h1>How Much is Your League of Legends Account Worth?</h1>
                </header>
                <section>
                    <p>Enter your Summoner Name to find out how much your skins are worth:</p>
                </section>
                <footer>
                    <input type="text" autoFocus placeholder="Search"></input>
                    <button>GO</button>
                </footer>
            </div>
        </section>
        <section className="wrapper">
            <div className="disclaimer">
                <section>
                    <p>
                        LoL Skin Appraiser isn't endorsed by Riot Games and doesn't reflect the
                        views or opinions of Riot Games or anyone officially involved in
                        producing or managing League of Legends. League of Legends and Riot
                        Games are trademarks or registered trademarks of Riot Games, Inc.
                    </p>
                </section>
            </div>
        </section>
    </div>
  );
}