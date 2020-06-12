import React, { Component } from "react";
import Link from "next/link";

export default class HeaderStatic extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue-brasil">
                <Link scroll={false} href="/">
                    <a className="navbar-brand">
                        <span style={ {color: "#2ecc71"} }>Lotericas</span>.<span style={ {color: "#f1c40f"} }>io</span>
                    </a>
                </Link>
                <div id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link scroll={false} href="#home">
                            <a className="nav-item nav-link">Home</a>
                        </Link>
                        <Link scroll={false} href="#how-to-work">
                            <a className="nav-item nav-link">Como funciona</a>
                        </Link>
                        <Link scroll={false} href="#how-to-use">
                            <a className="nav-item nav-link">Como usar</a>
                        </Link>
                        <Link scroll={false} href="#jogos-endpoint">
                            <a className="nav-item nav-link">Jogos</a>
                        </Link>
                        <Link scroll={false} href="#resultados-endpoint">
                            <a className="nav-item nav-link">Resultados</a>
                        </Link>
                        <Link scroll={false} href="#resultado-endpoint">
                            <a className="nav-item nav-link">Resultado</a>
                        </Link>
                        <a className="nav-item nav-link" href="https://github.com/rafaelferres/lotericas-io" target="_new">Github</a>
                    </div>
                </div>
            </nav>
        )
    }
}