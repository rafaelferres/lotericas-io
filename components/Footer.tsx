import React, { Component } from "react";

export default class FooterStatic extends Component {
    render(){
        return (
            <div className="w-full bg-gray-900 text-white">
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6">
                © 2020-2020 <a href="https://github.com/rafaelferres" target="_new" className="font-semibold underline hover:text-blue-200">Rafael Ferrés</a> e Loterica.io contribuidores.
                </div>
            </div>
        )
    }
}
