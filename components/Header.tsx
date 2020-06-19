import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class HeaderStatic extends Component {
    render(){
        return(
            <nav className="bg-blue-600 p-6">
                <div className="flex items-center justify-between flex-wrap w-full max-w-screen-xl relative mx-auto">
                    <Link href="/">
                        <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                                <img  className="fill-current h-8 w-8 mr-2" width="54" height="54" src="/brasil.svg"/>
                                <span className="font-semibold text-xl tracking-tight">Lotericas.IO</span>
                        </div>
                    </Link>
                    <div className="w-full block flex-grow flex items-center lg:w-auto">
                        <div className="text-sm flex-grow">
                        <Link href="/">
                            <a className="block mt-4 inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                                Inicio
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="block mt-4 inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                                Sobre
                            </a>
                        </Link>
                        <Link href="/docs">
                            <a className="block mt-4 inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                                Documentação
                            </a>
                        </Link>
                        </div>
                        <div>
                            <a href="https://github.com/rafaelferres/lotericas-io" target="_new" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}