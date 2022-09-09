import {Fragment, useEffect, useState} from "react";
import { Dialog, Transition } from '@headlessui/react'
import linkedin from '../images/linkedin.png';
import Mcimg from '../images/Mcimg.jpg'
import Mpimg from '../images/Mpimg.jpg'
import Dlimg from '../images/Dlimg.jpg'
import Jcimg from '../images/Jcimg.jpg'
import Nnimg from '../images/Nnimg.jpg'
import Mlimg from '../images/Mlimg.jpg'
import Trimg from '../images/Trimg.jpeg'
import Dmimg from '../images/Dmimg.jpg'
import Mcoimg from '../images/Mcoimg.png'
import Ysimg from '../images/Ysimg.jpg'
import Vdimg from '../images/Vdimg.jpg'
import Gvimg from '../images/Gvimg.jpg'
import spwLogo from '../images/wallonie_logo.png'
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import cookies from 'js-cookie'


import {GrLanguage} from "react-icons/gr";


const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'en',
    },
    {
        code: 'de',
        name: 'Deutsch',
        country_code: 'de',
    },
    {
        code: 'nl',
        name: 'Nederlands',
        country_code: 'nl',
    }
]


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCalcul, setIsOpenCalcul] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [post, setPost] = useState(null);
    
    const [showDataQd, setShowDataQd] = useState(false);
    const [showDataU, setShowDataU] = useState(false);
    const [showDataS, setShowDataS] = useState(false);
    const [showDataDJU, setShowDataDJU] = useState(false);



    const { t } = useTranslation();

    function toggleModal() {
        setIsOpen(!isOpen)

    }function toggleModalCalcul() {
        setIsOpenCalcul(!isOpenCalcul)
    }

    const toggleDropdown = () => {
            setDropdown(!dropdown)
    }

    const currentLanguageCode = cookies.get('i18next') || 'fr'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)

    useEffect(() => {
        // console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('title')
    }, [currentLanguage, t])

    // console.log(currentLanguageCode)
    // console.log(currentLanguageCode.toUpperCase())


    return (
    <>
        <footer className="sm:col-span-3 bg-white border-t-2 border-black shadow flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between p-2 bg-[#B72b35]">
            <span className="text-sm text-white sm:text-center">
                {t('footer.rights')}
            </span>
            <a className='text-sm text-white sm:text-center underline' href="https://energie.wallonie.be" target="_blank"><img className="h-8"
                src={spwLogo} alt="logo wallonie"/>
            </a>
            <ul className="flex flex-wrap items-center justify-center text-sm text-white text-white sm:mt-0">
                <div className='relative'>
                    <button id="dropdownTopButton" data-dropdown-toggle="dropdownTop" data-dropdown-placement='top' onClick={toggleDropdown}
                            className="mr-3 mb-3 md:mb-0 text-white hover:bg-gray-800 font-medium rounded-lg text-sm px-1.5 py-1 text-center inline-flex items-center bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            type="button">{t('language')} :
                        <img className='ml-1 h-4' src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${currentLanguageCode === 'en' ? 'GB' : currentLanguageCode.toUpperCase()}.svg`}/>
                    </button>
                    <div id="dropdownTop"
                         className={`${ dropdown === true ? '' : 'hidden'} bottom-full mb-1 absolute z-10 bg-white rounded shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
                            {languages.map(({ code, name, country_code }) => (
                                <li key={country_code}>
                                    <a href="#mainContent"
                                       className={`${country_code === currentLanguageCode ? 'font-bold bg-gray-500' : ''} block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center`}
                                       onClick={() => {
                                           i18next.changeLanguage(code)
                                           setDropdown(!dropdown)
                                       }}
                                    >
                                        {name}<img className='ml-2 h-4' src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country_code === 'en' ? 'GB' : country_code.toUpperCase()}.svg`}/>
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <li>
                    <a onClick={toggleModal} className="cursor-pointer mr-4 hover:underline md:mr-6 ">{t('footer.about_us')}</a>
                        <Transition appear show={isOpen} as={Fragment}>
                            <Dialog
                                as="div"
                                className="fixed inset-0 overflow-y-auto"
                                onClose={toggleModal}
                            >
                                <div className="min-h-screen px-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >

                                        <Dialog.Overlay className="fixed inset-0 " />

                                    </Transition.Child>


                                    {/* This element is to trick the browser into centering the modal contents. */}
                                    <span
                                        className="inline-block h-screen align-middle"
                                        aria-hidden="true"
                                    >
                                        &#8203;
                                    </span>

                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >

                                        <div className="inline-block w-full max-w-6xl my-6 overflow-hidden align-middle transition-all transform bg-white shadow-lg rounded-lg ">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-3xl font-semibold p-6 border-b border-solid border-slate-200 rounded-b"
                                                >
                                                    {t('footer.about_us')}
                                                </Dialog.Title>

                                                <div className="relative p-6 flex-auto">
                                                    {/* content */}
                                                    <div className="flex justify-center mt-5 md:space-x-4 flex-col sm:flex-col md:flex-row">
                                                        <div className="flex-col text-center"> 
                                                       
                                                            <div className="relative flex items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Nnimg} alt="mc image" />
                                                                <p>Noémi Nihoul<br/>Project Leader</p>
                                                                <a href="https://www.linkedin.com/in/nihoulnoemi/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Mcimg} alt="mc image" />
                                                                <p>Michele Carbonaro <br/> Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/michele-carbonaro-18a95a235" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Dlimg} alt="mc image" />
                                                                <p>David Lorent<br/>Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/zowlou/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex flex-row items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Jcimg} alt="jc image" />
                                                                <p>Jimmy Chen<br/>Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/jimmy-chen-a04262159/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                        </div>

                                                        <div className="flex-col text-center"> 
                                                            <div className="relative flex items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Mpimg} alt="mc image" />
                                                                <p>Michael Pollet<br/>Developer Manager</p>
                                                                <a href="https://www.linkedin.com/in/michael-pollet-93b985108/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="Mp image"></img></a>
                                                            </div>
                                                            <div className="relative flex flex-row items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Dmimg} alt="mc image" />
                                                                <p>Dallan Majunovic<br/>Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/dallan-majunovic-627327215/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex flex-row items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Trimg} alt="mc image" />
                                                                <p>Thibaut Ramiro-Gonzalez<br/>Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/thibaut-ramiro-gonzalez-7400901a9/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex flex-row items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Mlimg} alt="mc image" />
                                                                <p>Mélanie Lecourt<br/>Graphic Designer</p>
                                                                <a href="https://www.linkedin.com/in/m%C3%A9lanie-l-a416841b8/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                        </div>

                                                        <div className="flex-col text-center"> 
                                                            <div className="relative flex flex-row items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Ysimg} alt="mc image" />
                                                                <p>Yves Sermeus<br/>Developer Manager</p>
                                                                <a href="https://www.linkedin.com/in/bisshop/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex flex-column items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Mcoimg} alt="mc image" />
                                                                <p>Maximilien Coulon <br/> Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/maximilien-coulon-9b6712238/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex flex-row items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Gvimg} alt="mc image" />
                                                                <p>Grégory Venant<br/>Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/gregoryvenant1978/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                            <div className="relative flex flex-row items-center m-2 justify-between border rounded-md">
                                                                <img className="rounded-full border border-gray-100 shadow-sm m-1 mt-2 h-12" src={Vdimg} alt="mc image" />
                                                                <p>Vincent Duchesne<br/>Web Developer</p>
                                                                <a href="https://www.linkedin.com/in/vincent-duchesne-88b432236/" target="_blank"><img className="border border-gray-100 shadow-sm m-1 h-8 w-8" src={linkedin} alt="user image"></img></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={toggleModal}
                                                    >
                                                        {t('close')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Transition.Child>
                                </div>
                            </Dialog>
                        </Transition>
                </li>
                <li>
                    <a onClick={toggleModalCalcul} className="cursor-pointer mr-4 hover:underline md:mr-6 ">{t('footer.calcul_used')}</a>
                        <Transition appear show={isOpenCalcul} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 overflow-y-auto"
                            onClose={toggleModalCalcul}
                        >
                            <div className="min-h-screen px-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >

                                    <Dialog.Overlay className="fixed inset-0 " />

                                </Transition.Child>


                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                        &#8203;
                                    </span>

                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >

                                    <div className="inline-block w-full sm:w-2/3 max-w-6xl my-6 overflow-hidden align-middle transition-all transform bg-white shadow-lg rounded-lg ">
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                            <Dialog.Title
                                                as="h3"
                                                className="text-3xl font-semibold p-6 border-b border-solid border-slate-200 rounded-b"
                                            >
                                                {t('footer.calcul_used')}
                                            </Dialog.Title>

                                            <div className="relative p-6 flex-auto">
                                                {/* content */}
                                                <div className="flex flex-wrap justify-around parent-active">
                                                    <div className="flex flex-col items-start sm:items-center">
                                                        <h3 className='text-5xl sm:text-7xl mb-5'>
                                                            <span onMouseEnter={() => setShowDataQd(true)} onMouseOut={() => setShowDataQd(false)} className='text-green-500'>Qd</span>
                                                            =
                                                            <span onMouseEnter={() => setShowDataU(true)} onMouseOut={() => setShowDataU(false)} className='text-blue-600'>U</span>
                                                            *
                                                            <span onMouseEnter={() => setShowDataS(true)} onMouseOut={() => setShowDataS(false)} className='text-orange-600'>S</span>
                                                            *
                                                            <span onMouseEnter={() => setShowDataDJU(true)} onMouseOut={() => setShowDataDJU(false)} className='text-violet-600'>DJU</span>
                                                        </h3>
                                                        
                                                        <p className={showDataQd ? ' text-4xl m-2 bg-gray-300 active' : 'text-2xl sm:text-3xl m-2'}><span className='font-bold text-green-500'>Qd</span> = perte énergétique (W/h)</p>
                                                        <p className={showDataU ? 'text-4xl m-2 bg-gray-300 active' : 'text-2xl sm:text-3xl m-2'}><span className='font-bold text-blue-600'>U</span> isolé = 0,22W/(m².K)</p>
                                                        <p className={showDataU ? 'text-4xl m-2 bg-gray-300 active' : 'text-2xl sm:text-3xl m-2'}><span className='font-bold text-blue-600'>U</span> non isolé = 4,694W/(m².K)</p>
                                                        <p className={showDataS ? 'text-4xl m-2 bg-gray-300 active' : 'text-2xl sm:text-3xl m-2'}><span className='font-bold text-orange-600'>S</span> = surface en m2</p>
                                                        <p className={showDataDJU? 'text-4xl m-2 bg-gray-300 active' : 'text-2xl sm:text-3xl m-2'}><span className='font-bold text-violet-600'>DJU</span> = degré jour unifié moyen en belgique : 15°,</p>
                                                        <p className={showDataDJU ? 'text-4xl m-2 bg-gray-300 active' : 'text-2xl sm:text-3xl m-2'}>Equivalent = 1886.16°/an</p>
                                                    </div>
                                                    <div className="flex flex-col items-start sm:items-center">
                                                        <h3 className='text-5xl sm:text-7xl mb-5'>
                                                            <span onMouseEnter={() => setShowDataQd(true)} onMouseOut={() => setShowDataQd(false)} className='text-green-500'>Qd</span>
                                                            *
                                                            <span className='text-blue-600'>quantité CO²</span>
                                                        </h3>
                                                        <p className={showDataQd ? 'text-4xl m-2 bg-gray-300 active' : 'text-2xl sm:text-3xl m-2'}><span className='font-bold text-green-500'>Qd</span> = perte énergétique (W/h)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={toggleModalCalcul}
                                                >
                                                    {t('close')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>
                </li>
            </ul>
        </footer>

    </>
    );
};

export default Footer;