import React from "react";
import Head from "next/head";
import "../styles/lotericas.io.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

class AboutPage extends React.Component {


    render(){
        return (
            <div>
                <Head>
                    <title>Lotericas.io - Sobre</title>
                    <link rel="icon" href="/brasil.svg"></link>
                </Head>
                <Header></Header>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pb-0">
                    <h1 className="text-3xl font-semibold">Sobre</h1>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">O que é isso?</h2>
                        <div className="mt-3">
                            <span>
                            Este site fornece uma interface API RESTful para objetos de linhas de dados das Loterias Caixa.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">O que é uma API?</h2>
                        <div className="mt-3">
                            <span>
                            Uma API (Application Programming Interface) é um contrato que permite que os desenvolvedores interajam com um aplicativo por meio de um conjunto de interfaces. Nesse caso, o aplicativo é um banco de dados de milhares de objetos relacionados ao Loterias Caixa, e as interfaces são links de URL.
                            </span>
                        </div>
                        <div className="mt-3">
                            <span>
                            Uma API RESTful é uma API que está em conformidade com um conjunto de convenções soltas com base em verbos HTTP, erros e hiperlinks.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Quanta informação é armazenada aqui?</h2>
                        <div className="mt-3">
                            <span>
                            Aqui são armazenados milhares de resultados de Loterias.
                            </span>
                        </div>
                        <div className="mt-3">
                            <span>
                            Na nossa base inclui jogos de:
                            </span>
                        </div>
                        <div className="mt-3">
                            <ul className="list-inside list-disc">
                                <li>Mega-Sena</li>
                                <li>Lotofacil</li>
                                <li>Quina</li>
                                <li>Lotomania</li>
                                <li>Timemania</li>
                                <li>Duplasena</li>
                                <li>Federal</li>
                                <li>Loteca</li>
                                <li>Dia de sorte</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">A API está faltando coisas?</h2>
                        <div className="mt-3">
                            <span>
                            Nós sabemos! Sinta-se livre para contribuir com issues abertas no <a href="https://github.com/rafaelferres/lotericas-io" target="_new" className="font-semibold text-blue-600 underline">GitHub</a>.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Então quem construiu isso?</h2>
                        <div className="mt-3">
                            <span>
                            Lotericas.io foi criada pelo <a href="https://github.com/rafaelferres/" target="_new" className="font-semibold text-blue-600 underline">Rafael Ferrés</a> em algumas horas de trabalho.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Onde você conseguiu todos esses dados?</h2>
                        <div className="mt-3">
                            <span>
                            Esses dados são capturados diariamente no site da loterias caixa online.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Quais são as tecnologias utilizadas?</h2>
                        <div className="mt-3">
                            <span>
                            Nós utilizamos Next.js para a API e o nosso robo (captura os dados) é construido em Node.js
                            </span>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default AboutPage;