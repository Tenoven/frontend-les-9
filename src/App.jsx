import './App.css';
import tvSold, {toSell, tvBought} from "../helper/Tv-sold.js";
import {Best_tv_inches, Best_tv_name_string, Best_tv_price, bestTv_image} from "../helper/best-tv.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";
import {geschikt_voor_sport_eerst, goedkoopste_eerst, meest_verkocht_eerst} from "../helper/buttons.js";

function App() {
    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <main>
                <article>
                    <h2>Verkoopoverzicht</h2>
                    <section className={"verkoop_overzicht"}>
                        <div className={"box_sold"}>
                            <p>Aantal verkochte producten  </p>
                            <p>{tvSold()}</p>
                        </div>
                        <div className={"box_bought"}>
                            <p>Aantal ingekochte producten</p>
                            <p>{tvBought()}</p>
                        </div>
                        <div className={"to_sell"}>
                            <p>Aantal te verkopen producten</p>
                            <p>{toSell(tvSold(), tvBought())}</p>
                        </div>
                    </section>
                </article>
                <article>
                    <h2> Best verkochte tv</h2>
                    <section className={"outertvbox"}>
                        <div className={"besttvbox"}>
                            <div className={"best_image_box"}>
                                <img className={"tv-image"} src={bestTv_image()} alt=""/>
                            </div>
                            <div className={"information"}>
                                <p>{Best_tv_name_string()}</p>
                                <p>{Best_tv_price()}</p>
                                <p>{Best_tv_inches()}</p>
                                <div>
                                    <img src={check} alt="" className={"smaller"}/>
                                    <span> Wifi </span>
                                    <img src={minus} alt="" className={"smaller"}/>
                                    <span> Speech </span>
                                    <img src={check} alt="" className={"smaller"}/>
                                    <span> Hdr </span>
                                    <img src={check} alt="" className={"smaller"}/>
                                    <span> Bluetooth </span>
                                    <img src={minus} alt="" className={"smaller"}/>
                                    <span> Ambilight </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article>
                    <h2>Alle tvs</h2>
                    <section>
                        <div className={"buttonSection"}>
                            <button type={"button"} onClick={meest_verkocht_eerst}>Meest verkocht eerst</button>
                            <button type={"button"} onClick={goedkoopste_eerst}>Goedkoopste eerst</button>
                            <button type={"button"} onClick={geschikt_voor_sport_eerst}>Meest geschikt voor sport eerst</button>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}

export default App
