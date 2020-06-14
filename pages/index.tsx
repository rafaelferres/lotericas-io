import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/lotericas.io.css';
import HeaderStatic from '../statics/header';
import FooterStatic from '../statics/footer';
import Head from "next/head";

const HomePage = () => (
    <div>
        <Head>
            <title>Lotericas.io - API Gratuita das loterias caixa</title>
        </Head>
        <HeaderStatic></HeaderStatic>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div style={{marginTop: "35px", textAlign: "center"}}>
                        <h1 style={{color: "#2a479f"}} id="home">API Gratuita de Resultados de Loteria</h1>
                        <div style={{fontSize: "20px"}}>
                            <span>A <b>Lotericas.io</b> é uma api gratuita para consulta de resultados de jogos da loteria da caixa.<br/>Nosso serviço ainda está em beta, então poderá haver possíveis indisponibilidades.<br/>Não é necessário fazer nenhum cadastro para utilizar nossa API, porem requisições abusivas serão negadas.</span>
                        </div>
                    </div>
                    <div style={{marginTop: "35px", textAlign: "center"}}>
                        <h1 style={{color: "#2a479f"}} id="how-to-work">Como funciona?</h1>
                        <div style={{fontSize: "20px"}}>
                            <span>
                                Nós desenvolvemos um robo que fica buscando os resultados constantamente nas lotericas.<br/>Nosso robo ainda está em testes, por tanto ainda não foi criado um repositório no github para o mesmo.
                            </span>
                        </div>
                    </div>
                    <div style={{marginTop: "35px", textAlign: "center"}}>
                        <h1 style={{color: "#2a479f"}} id="how-to-use">Como usar?</h1>
                        <div style={{fontSize: "20px"}}>
                            <span>Para usar nossa API é muito simples, são apenas 3 endpoints</span>
                        </div>
                    </div>


                    <div style={{marginTop: "35px", textAlign: "center"}}>
                        <h1 style={{color: "#2a479f"}} id="jogos-endpoint">Jogos endpoint</h1>
                        <div style={{fontSize: "20px"}}>
                            <span>
                                Nosso endpoint para jogos é:
                            </span>
                            <div className="row" style={{marginTop: "15px", textAlign: "left"}}>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Configuração
                                        </div>
                                        <div className="card-body">
                                        GET - https://lotericas.io/api/v1/jogos
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Exemplo
                                        </div>
                                        <div className="card-body">
                                            <a href="https://lotericas.io/api/v1/jogos" target="_new">https://lotericas.io/api/v1/jogos</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{marginTop: "35px", textAlign: "center"}}>
                        <h1 style={{color: "#2a479f"}} id="resultados-endpoint">Resultados endpoint</h1>
                        <div style={{fontSize: "20px"}}>
                            <span>
                                Nosso endpoint para resultados possui apenas um parametro que é o nome do jogo que você pode consultar no endpoint de jogos:
                            </span>
                            <div className="row" style={{marginTop: "15px", textAlign: "left"}}>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Configuração
                                        </div>
                                        <div className="card-body">
                                        GET - https://lotericas.io/api/v1/jogos/:nome
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Exemplo
                                        </div>
                                        <div className="card-body">
                                            <a href="https://lotericas.io/api/v1/jogos/megasena" target="_new">https://lotericas.io/api/v1/jogos/megasena</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: "35px", textAlign: "center"}}>
                        <h1 style={{color: "#2a479f"}} id="resultado-ultimo-endpoint">Último Resultado endpoint</h1>
                        <div style={{fontSize: "20px"}}>
                            <span>
                                Nosso endpoint para último resultado possui dois parametro que é o nome do jogo e o número da rodada:
                            </span>
                            <div className="row" style={{marginTop: "15px", textAlign: "left"}}>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Configuração
                                        </div>
                                        <div className="card-body">
                                        GET - https://lotericas.io/api/v1/jogos/:nome/lasted
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Exemplo
                                        </div>
                                        <div className="card-body">
                                            <a href="https://lotericas.io/api/v1/jogos/megasena/lasted" target="_new">https://lotericas.io/api/v1/jogos/megasena/lasted</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: "35px", textAlign: "center"}}>
                        <h1 style={{color: "#2a479f"}} id="resultado-endpoint">Resultado endpoint</h1>
                        <div style={{fontSize: "20px"}}>
                            <span>
                                Nosso endpoint para resultado possui dois parametro que é o nome do jogo e o número da rodada:
                            </span>
                            <div className="row" style={{marginTop: "15px", textAlign: "left"}}>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Configuração
                                        </div>
                                        <div className="card-body">
                                        GET - https://lotericas.io/api/v1/jogos/:nome/:rodada
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-header">
                                            Exemplo
                                        </div>
                                        <div className="card-body">
                                            <a href="https://lotericas.io/api/v1/jogos/megasena/2000" target="_new">https://lotericas.io/api/v1/jogos/megasena/2000</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <FooterStatic></FooterStatic>
    </div>
)

export default HomePage;