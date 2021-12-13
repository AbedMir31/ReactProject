import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
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
        );
    }
}