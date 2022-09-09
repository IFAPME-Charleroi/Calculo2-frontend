import React from "react"
import Map from '../components/Map';
import Data1 from '../components/Data1';
import Data2 from '../components/Data2';
import Data3 from '../components/Data3';
import Footer from "../components/Footer";
import HeroHome from "../components/HeroHome";
import Konami from 'react-konami-code';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import {useTranslation} from "react-i18next";

const Home = () => {

    const {width, height} = useWindowSize()
    const {t} = useTranslation()

    const easterEgg = () => {
        return (
            <>
                <Confetti className='overflow-hidden' width={width} height={height}/>
                <div className='w-full h-full absolute flex items-center justify-center'>
                    <h1 className='font-mono text-white text-9xl relative m-auto w-fit h-fit bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate overflow-hidden'>{t('easter_egg')}</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <Konami action={easterEgg}>
                {easterEgg()}
            </Konami>
            <div className="bgHero text-white bg-cover bg-center">
                <HeroHome/>
            </div>

            <div className='bg-[#F4F6F9]'>
                <div id='mainContent'
                     className="flex flex-col sm:flex-none sm:grid md:grid-cols-3 grid-rows-1 sm:grid-rows-3 gap-4 min-h-screen">
                    <Data1/>
                    <Data2/>
                    <Data3/>
                    <Map/>
                    <Footer/>
                </div>
            </div>
        </>

    )
}
export default Home;