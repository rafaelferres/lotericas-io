import React from "react";
import Head from "next/head";
import "../styles/lotericas.io.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

class DocsPage extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Head>
                    <title>Lotericas.io - Documentação</title>
                </Head>
                <Header></Header>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pb-0">
                    <h1 className="text-3xl font-semibold">Documentação</h1>
                </div>

                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Jogos endpoint</h2>
                        <div className="mt-3">Retorna todos os jogos disponiveis em nossa base.</div>
                        <div className="grid grid-rows-1 grid-flow-col gap-4 mt-3">
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Configuração</h2>
                                <div className="mt-3">
                                    <span>
                                        GET - https://lotericas.io/api/v1/jogos
                                    </span>
                                </div>
                            </div>
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Exemplo</h2>
                                <div className="mt-3">
                                    <span>
                                        <a href="https://lotericas.io/api/v1/jogos" target="_new" className="text-blue-600 font-semibold underline">https://lotericas.io/api/v1/jogos</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Resultados endpoint</h2>
                        <div className="mt-3">Retorna todos os resultados do jogo informado.</div>
                        <div className="grid grid-rows-1 grid-flow-col gap-4 mt-3">
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Configuração</h2>
                                <div className="mt-3">
                                    <span>
                                    GET - https://lotericas.io/api/v1/jogos/:nome
                                    </span>
                                </div>
                            </div>
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Exemplo</h2>
                                <div className="mt-3">
                                    <span>
                                        <a href="https://lotericas.io/api/v1/jogos/megasena" target="_new" className="text-blue-600 font-semibold underline">https://lotericas.io/api/v1/jogos/megasena</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Último Resultado endpoint</h2>
                        <div className="mt-3">Retorna o último os resultados do jogo informado.</div>
                        <div className="grid grid-rows-1 grid-flow-col gap-4 mt-3">
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Configuração</h2>
                                <div className="mt-3">
                                    <span>
                                    GET - https://lotericas.io/api/v1/jogos/:nome/lasted
                                    </span>
                                </div>
                            </div>
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Exemplo</h2>
                                <div className="mt-3">
                                    <span>
                                        <a href="https://lotericas.io/api/v1/jogos/megasena/lasted" target="_new" className="text-blue-600 font-semibold underline">https://lotericas.io/api/v1/jogos/megasena/lasted</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6 pt-4">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full">Resultado endpoint</h2>
                        <div className="mt-3">Retorna o resultados do jogo e rodada informada.</div>
                        <div className="grid grid-rows-1 grid-flow-col gap-4 mt-3">
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Configuração</h2>
                                <div className="mt-3">
                                    <span>
                                    GET - https://lotericas.io/api/v1/jogos/:nome/:rodada
                                    </span>
                                </div>
                            </div>
                            <div className="row-span-1 col-span-1">
                                <h2 className="text-xl font-semibold w-full">Exemplo</h2>
                                <div className="mt-3">
                                    <span>
                                        <a href="https://lotericas.io/api/v1/jogos/:nome/:rodada" target="_new" className="text-blue-600 font-semibold underline">https://lotericas.io/api/v1/jogos/megasena/2000</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        )
    }
}

export default DocsPage;