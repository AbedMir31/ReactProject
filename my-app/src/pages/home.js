import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        /* alert("A username was submitted: " + this.state.value); */
        console.log(this.state.value)
        event.preventDefault();
    }
    
    render() {
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
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                    type="text" 
                                    autoFocus 
                                    placeholder="Search"
                                    value={ this.state.value }
                                    onChange={ this.handleChange }
                                >
                                </input>
                                <button onClick={ this.handleSubmit }>
                                    GO
                                </button>
                            </form>
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
}

export { Home }
