import React from 'react';
import getSummoner from '../data';

export default class FormSubmission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        getSummoner(this.state.value);
        this.setState({
            value: ''
        })
    }
    render() {
        return (
            <div>
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
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                />
                                <button>
                                    GO
                                </button>
                            </form>
                        </footer>
                    </div>
                </section>
            </div>
        );
    }
}