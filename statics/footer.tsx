import React, { Component } from "react";
import Link from "next/link";

export default class FooterStatic extends Component {
    render(){
        return (
            <div style={{marginTop:"35px", textAlign:"center", padding: "15px"}}>
               © Copyright 2020 Lotericas.io
            </div>
        )
    }
}