import React from "react";
import Head from "next/head";
import "../styles/lotericas.io.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
    constructor(){
        super({});
        this.state = {
            resultRequest : {"success":true,"data":[{"name":"megasena"},{"name":"lotofacil"},{"name":"quina"},{"name":"lotomania"},{"name":"timemania"},{"name":"duplasena"},{"name":"federal"},{"name":"loteca"},{"name":"diadesorte"}]},
            canSend: true
        }
    }

    static async getInitialProps({ req }){
        const res = await fetch('http://localhost:3000/api/v1/requests');
        const { data } = await res.json();
        return { requests : data };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            canSend: false
        });
        if(event.target.url.value){
            try{
                const res = await fetch(`http://localhost:3000/api/v1/${event.target.url.value}`);
                const data = await res.json();
                this.setState({
                    resultRequest: data,
                    canSend: true
                });
            }catch(err){
                this.setState({
                    resultRequest: "undefined",
                    canSend: true
                })
            }
        }
        //this.setState()
    }

    render(){
        return (
            <div>
                <Head>
                    <title>Lotericas.io - API Gratuita das loterias caixa</title>
                </Head>
                <Header></Header>
                <div className="w-full bg-blue-500">
                    <div className="w-full max-w-screen-xl relative mx-auto p-8">
                        <div className="text-center text-white">
                            <h2 className="text-2xl font-semibold">API Gratuita de Resultados de Loteria</h2>
                            <div className="mt-2 text-lg">A <span className="font-semibold">Lotericas.io</span> é uma api gratuita para consulta de resultados de jogos da loteria da caixa.</div>
                            <div className="mt-2 text-blue-200 text-lg">Já fomos consultados <span className="font-semibold">{this.props.requests}</span> vezes!</div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-800">
                    <div className="w-full max-w-screen-xl relative mx-auto p-8">
                        <div className="text-center text-2xl text-white">
                            <div>Todos os dados da Loteria que você precisa em um só lugar,</div>
                            <div>facilmente acessível através de uma API RESTful moderna.</div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6">
                    <div className="bg-white rounded-lg p-6 shadow">
                        <h2 className="text-2xl font-semibold w-full text-center">Tente agora!</h2>
                        <form className="sm:flex mt-5" onSubmit={this.handleSubmit}>
                            <div className="sm:rounded-r-none rounded sm:mt-0 mt-0 bg-gray-300 text-gray-900 py-2 px-3 leading-tight">https://lotericas.io/api/v1/</div>
                            <input type="text" name="url" defaultValue="jogos" className="sm:mt-0 mt-2 sm:rounded-none rounded appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"/>
                            <button type="submit" disabled={!this.state.canSend} className="sm:mt-0 mt-2 sm:w-auto w-full sm:rounded-l-none rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none">Enviar</button>
                        </form>
                        <div className="mt-3">
                            <pre className="bg-gray-300 p-6 rounded h-64 overflow-x-auto">{JSON.stringify(this.state.resultRequest, null, 2)}</pre>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default IndexPage;