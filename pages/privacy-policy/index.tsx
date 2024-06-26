"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../../app/components/navbar/Navbar';
import Navbar2 from '../../app/components/navbar2/Navbar2';
import Footer from '../../app/components/footer/Footer';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const PrivacyPolicy: React.FC = () => {
    interface IPrivacyPolicy {
        _id: string;
        description: string;
        text: string;
        author: string;
    }

    const [privacyPolicies, setPrivacyPolicies] = useState<IPrivacyPolicy[]>([]);

    useEffect(() => {
        const fetchPrivacyPolicies = async () => {
            const res = await fetch('/api/privacypolicy');
            const data = await res.json();
            setPrivacyPolicies(data);
        };

        fetchPrivacyPolicies();
    }, []);

    return (
        <div>
            <Head>
                <title>Privacy Policy - Omegle: Talk to strangers!</title>
                <link rel="canonical" href="https://omegle-seven.vercel.app/privacy-policy"/>

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
            <div className="flex flex-col items-center justify-center mt-0 pt-7 bg-stone-300">
                <div className="min-h-screen">
                    <main className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold mb-8">PRIVACY POLICY</h1>
                            <p className="text-xl text-black mb-12 text-left">This Privacy Policy describes how [www-omegle] collects, uses, and shares your personal information when you visit our website [https://www-omegle.com].</p>
                            {privacyPolicies.map(item => (
                                <div key={item._id} className="bg-white rounded-lg shadow-lg p-12 mb-16 flex flex-col items-center w-full">
                                    <ReactQuill
                                        value={item.text}
                                        readOnly={true}
                                        theme="snow"
                                        modules={{ toolbar: false }}
                                    />
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default PrivacyPolicy;
