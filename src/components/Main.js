import React from "react";

const Main = () => {
    return (
        <div className="main">
            <div className="col col1">
                <h2>Your Movies</h2>
                <p>In here, you can select any movie you like. <br/>To select more, click on the button.</p>
                <button type="button" className="btn btn-primary" style={{padding:'10px 30px'}}>More</button>
            </div>

            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    );
}
export default Main;