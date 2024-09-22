import React from 'react';

const Contato = () => {
    return (
        <section className="py-16" id='contato'>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Entre em Contato</h2>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold text-blue-600">Email</h3>
                        <p className="text-gray-700">contato@nexodev.site</p>
                    </div>
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold text-blue-600">Telefone</h3>
                        <p className="text-gray-700">(17) 99270-0548</p>
                    </div>
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold text-blue-600">Instagram</h3>
                        <a href="https://instagram.com/nexodev.site" className="text-blue-600 hover:underline">
                            @nexodev.site
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;
