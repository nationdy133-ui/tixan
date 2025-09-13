'use client'

import Handshake from '../assets/dabas.jpg'
import { MdEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import VotingFeed from './VotingFeed';
import Link from 'next/link';
import Image from 'next/image';


export default function VotePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
            <div className="bg-white p-6 rounded xl:max-w-3xl shadow-lg text-center max-w-5xl w-full">
                <h1 className="text-xl font-bold mb-4 uppercase">
                    Snälla, vi behöver din röst
                </h1>

                <div className="flex justify-center mb-6">
                    <Image
                    sizes='100%'
                        src={Handshake}
                        alt="Handskakning"
                        className="object-cover rounded h-full w-full"
                    />
                </div>

                <div className="text-base mb-2 text-gray-600 flex items-center justify-center gap-2">
                    <input 
                        type="radio" 
                        checked={true} 
                        onChange={(e) => e.preventDefault()} 
                        style={{ color: 'dodgerblue' }} 
                    />
                    Totalt antal röster: <strong>4678</strong> av <strong>5688</strong>
                </div>

                <div className="relative w-full h-full bg-gray-200 rounded overflow-hidden mb-3">
                    <div style={{ background: 'dodgerblue', width: (4678 / 5688) * 100 + '%', height: '6.5px' }}></div>
                </div>

                <div className="text-lg font-bold text-gray-700 mb-4 flex items-center justify-center gap-2">
                    <FaCheck /> Totalt antal röster för seger: <strong>1010</strong>
                </div>

                <Link
                    href={'/login'} 
                    className="bg-red-500 w-fit mx-auto hover:bg-red-600 text-white px-4 py-2 rounded transition mb-6 flex items-center justify-center gap-2"
                >
                    Rösta nu <MdEmail />
                </Link>
            </div>

            <VotingFeed />
        </div>
    );
}
