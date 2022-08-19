import React from "react";
import Layout from "./components/layout";

function App() {
    return (
        <main>
            <Layout>
                <div>
                    <img src="https://avatars.githubusercontent.com/u/49047131?v=4" alt="picture of user" />
                    <h1>Thiago Aquino</h1>
                    <h3>Username: </h3>
                    <span>Aquinolima</span>
                    <div>
                        <div>
                            <h4>Followers</h4>
                            <span>6</span>
                        </div>
                        <div>
                            <h4>Starreds</h4>
                            <span>6</span>
                        </div>
                        <div>
                            <h4>Following</h4>
                            <span>8</span>
                        </div>
                    </div>
                </div>
                <div>Repositores</div>
                <div>Starreds</div>
            </Layout>
        </main>
    );
}

export default App;
