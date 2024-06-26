"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../../app/components/navbar/Navbar';
import Footer from '../../app/components/footer/Footer';
import 'react-quill/dist/quill.snow.css';
import Navbar2 from '../components/navbar2/Navbar2';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TermsOfServices: React.FC = () => {
    interface ITermsOfService {
        _id: string;
        description: string;
        text: string;
        author: string;
    }

    const [termsOfServices, setTermsOfServices] = useState<ITermsOfService[]>([]);

    useEffect(() => {
        const fetchTermsOfServices = async () => {
            const res = await fetch('/api/termsofservice');
            const data = await res.json();
            setTermsOfServices(data);
        };

        fetchTermsOfServices();
    }, []);

    return (
        <div>
            <Head>
                <title>Terms Of Service - Omegle</title>
                <link rel="canonical" href="https://omegle-seven.vercel.app/terms-of-service"/>

                <meta name="description" content="Omegle is a great place to meet new friends. When you use Omegle, we pick another user at random and let you have a one-on-one chat with each other." />
            </Head>
            <div className="pt-4">
                <div className="fixed top-0 w-full z-10">
                    <Navbar />
                </div>
                <div className="mt-14 md:mt-16">
                    <Navbar2 />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-0 pt-8 bg-stone-300">
                <div className="min-h-screen">
                    <main className="max-w-4xl mx-auto">
                        <div className="text-center">
                            {termsOfServices.map(item => (
                                <div key={item._id}>
                                    <h1 className="text-5xl font-bold mb-8">Terms Of Service</h1>
                                    <p className="text-xl text-black mb-12 text-center">{item.description}</p>
                                    <div className="bg-white rounded-lg shadow-lg p-12 mb-16 flex flex-col items-center w-full">
                                        <ReactQuill
                                            value={item.text}
                                            readOnly={true}
                                            theme="snow"
                                            modules={{ toolbar: false }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default TermsOfServices;
