import React, { Component } from 'react';
import "./main.css";
import "./home.css";
import "./flex.css";

class Layout extends Component {
    state = {}
    render() {
        return (
            <div id="content">
            <div className="container">
                <h2 className="display-4">News App</h2>

                <ul layout="rows top-left" id="articles" className="fail" style={{listStyle: "none"}}>
                    <li className="mix" data-bound="">
                        <a href="http://www.ansa.it/sito/notizie/topnews/2018/09/09/kosovo-vucic-non-andra-in-enclave-serba_bbc96045-0780-496b-adfe-1520e355296a.html" target="_blank">
                            <div className="card card--article not-visible">

                                <div className="card-body">
                                    <div className="card-circle card-circle--article"></div>
                                    <div className="card-title">Kosovo, Vucic non andrà in enclave serba - Ultima Ora</div>
                                    <div className="card-description card-description--clamp-3">Il presidente serbo Aleksandar Vucic, secondo i media a Belgrado, avrebbe deciso di rinunciare alla
                visita all'enclave serba di Banj, nel Kosovo centrale, a causa dell'alta tensione creata in tutta la
zona dalle proteste della popolazione albanese e dei ve.…</div>
                                </div>
                                <div className="card-hero">
                                    <div className="card-image">
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="card-footer-wrapper" layout="row bottom-left">
                                        <div className="card-type is-notShownIfHover">ANSA.it</div>
                                        <div className="card-tag is-notShownIfHover">2018-09-09T09:29:00Z</div>
                                        <div className="card-tag is-shownIfHover">Read Margaret Gould Stewart's article</div>
                                        <div className="card-medium is-shownIfHover" self="right"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="mix" data-bound="">
                        <a href="http://www.ansa.it/sito/notizie/topnews/2018/09/09/kosovo-vucic-non-andra-in-enclave-serba_bbc96045-0780-496b-adfe-1520e355296a.html" target="_blank">
                            <div className="card card--article not-visible">

                                <div className="card-body">
                                    <div className="card-circle card-circle--article"></div>
                                    <div className="card-title">Kosovo, Vucic non andrà in enclave serba - Ultima Ora</div>
                                    <div className="card-description card-description--clamp-3">Il presidente serbo Aleksandar Vucic, secondo i media a Belgrado, avrebbe deciso di rinunciare alla
                visita all'enclave serba di Banj, nel Kosovo centrale, a causa dell'alta tensione creata in tutta la
zona dalle proteste della popolazione albanese e dei ve.…</div>
                                </div>
                                <div className="card-hero">
                                    <div className="card-image">
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="card-footer-wrapper" layout="row bottom-left">
                                        <div className="card-type is-notShownIfHover">ANSA.it</div>
                                        <div className="card-tag is-notShownIfHover">2018-09-09T09:29:00Z</div>
                                        <div className="card-tag is-shownIfHover">Read Margaret Gould Stewart's article</div>
                                        <div className="card-medium is-shownIfHover" self="right"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="mix" data-bound="">
                        <a href="http://www.ansa.it/sito/notizie/topnews/2018/09/09/kosovo-vucic-non-andra-in-enclave-serba_bbc96045-0780-496b-adfe-1520e355296a.html" target="_blank">
                            <div className="card card--article not-visible">

                                <div className="card-body">
                                    <div className="card-circle card-circle--article"></div>
                                    <div className="card-title">Kosovo, Vucic non andrà in enclave serba - Ultima Ora</div>
                                    <div className="card-description card-description--clamp-3">Il presidente serbo Aleksandar Vucic, secondo i media a Belgrado, avrebbe deciso di rinunciare alla
                visita all'enclave serba di Banj, nel Kosovo centrale, a causa dell'alta tensione creata in tutta la
zona dalle proteste della popolazione albanese e dei ve.…</div>
                                </div>
                                <div className="card-hero">
                                    <div className="card-image">
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="card-footer-wrapper" layout="row bottom-left">
                                        <div className="card-type is-notShownIfHover">ANSA.it</div>
                                        <div className="card-tag is-notShownIfHover">2018-09-09T09:29:00Z</div>
                                        <div className="card-tag is-shownIfHover">Read Margaret Gould Stewart's article</div>
                                        <div className="card-medium is-shownIfHover" self="right"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="mix" data-bound="">
                        <a href="http://www.ansa.it/sito/notizie/topnews/2018/09/09/kosovo-vucic-non-andra-in-enclave-serba_bbc96045-0780-496b-adfe-1520e355296a.html" target="_blank">
                            <div className="card card--article not-visible">

                                <div className="card-body">
                                    <div className="card-circle card-circle--article"></div>
                                    <div className="card-title">Kosovo, Vucic non andrà in enclave serba - Ultima Ora</div>
                                    <div className="card-description card-description--clamp-3">Il presidente serbo Aleksandar Vucic, secondo i media a Belgrado, avrebbe deciso di rinunciare alla
                visita all'enclave serba di Banj, nel Kosovo centrale, a causa dell'alta tensione creata in tutta la
zona dalle proteste della popolazione albanese e dei ve.…</div>
                                </div>
                                <div className="card-hero">
                                    <div className="card-image">
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="card-footer-wrapper" layout="row bottom-left">
                                        <div className="card-type is-notShownIfHover">ANSA.it</div>
                                        <div className="card-tag is-notShownIfHover">2018-09-09T09:29:00Z</div>
                                        <div className="card-tag is-shownIfHover">Read Margaret Gould Stewart's article</div>
                                        <div className="card-medium is-shownIfHover" self="right"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="mix" data-bound="">
                        <a href="http://www.ansa.it/sito/notizie/topnews/2018/09/09/kosovo-vucic-non-andra-in-enclave-serba_bbc96045-0780-496b-adfe-1520e355296a.html" target="_blank">
                            <div className="card card--article not-visible">

                                <div className="card-body">
                                    <div className="card-circle card-circle--article"></div>
                                    <div className="card-title">Kosovo, Vucic non andrà in enclave serba - Ultima Ora</div>
                                    <div className="card-description card-description--clamp-3">Il presidente serbo Aleksandar Vucic, secondo i media a Belgrado, avrebbe deciso di rinunciare alla
                visita all'enclave serba di Banj, nel Kosovo centrale, a causa dell'alta tensione creata in tutta la
zona dalle proteste della popolazione albanese e dei ve.…</div>
                                </div>
                                <div className="card-hero">
                                    <div className="card-image">
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="card-footer-wrapper" layout="row bottom-left">
                                        <div className="card-type is-notShownIfHover">ANSA.it</div>
                                        <div className="card-tag is-notShownIfHover">2018-09-09T09:29:00Z</div>
                                        <div className="card-tag is-shownIfHover">Read Margaret Gould Stewart's article</div>
                                        <div className="card-medium is-shownIfHover" self="right"></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                </div>
            </div >
        );
    }
}

export default Layout;