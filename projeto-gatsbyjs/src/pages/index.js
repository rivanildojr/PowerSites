import React from 'react'
import'./styles.css'

import whats from '../assets/download.png'

const Logo  = () => {
    return (
        <div className="text-white">
            <h1 className="font-bold text-2xl">Lima</h1>
            <p className="text-xs">Móveis Planejados</p>
        </div>
    )
}

const BtnWhatsapp = () => {
    return (
        <div className="bg-white shadow rounded-md px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row">
            <img src={whats} alt="Whatsapp"/>
            <div className="ml-2">
                <h3 className="font-bold text-2xl">Orçar seu Projeto!</h3>
                <p className="text-xs">Projeto e orçamento sem compromisso</p>
                <p className="font-bold">(35) 9999-9999</p>
            </div>
        </div>
    )
}

const Index = () => {
    return (
        <div>
            <div className="p-4 bg-blue-700 sm:flex justify-between items-center">
                <Logo />
                    {/* botão whatsapp */}
                    <BtnWhatsapp />
            </div> 
        </div>
    )
};

export default Index;