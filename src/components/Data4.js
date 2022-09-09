import React from "react";
import {Disclosure, Transition} from '@headlessui/react'
import CountUp from 'react-countup';
import {useTranslation} from "react-i18next";
import {IoIosArrowDown} from "react-icons/io";
// import { useRef } from "react";

const Data4 = ({props}) => {

    // console.log(props)
    // const bottomRef = useRef(null);

    const {t} = useTranslation();

    // function scrollTo(ref) {
    //     if (!ref.current) return;
    //     ref.current.scrollIntoView({ behavior: "smooth" });
    // }

    return (
        <>
            <div className="w-full pt-1">
                <div className="w-full mx-auto">
                    <Disclosure>
                        <Disclosure.Button
                            // onClick={() => scrollTo(bottomRef)}
                            className="data4class flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-[#B72b35] hover:bg-[#8F0017] hover:bg-opacity-60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            {t('card_map_data.card_data.title')} {props.year} <IoIosArrowDown/>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel static
                                              className="min-w-full divide-y transition ease-in-out py-2 delay-150 bg-gray-300 rounded-b-lg text-sm text-black">
                                <div className=" rounded overflow-hidden">
                                    <p></p>
                                    <div className="px-6 py-4">
                                        <h1 className="font-bold text-xl mb-2">{t('card_map_data.card_data.cost_renovation_title')}</h1>
                                        <h2 className='font-mono text-4xl text-[#FF6384]'><CountUp separator="."
                                                                                                   duration={1.2}
                                                                                                   decimals={2}
                                                                                                   decimal=","
                                                                                                   end={props.totalCost}/> €
                                        </h2>
                                        <p className="text-gray-700 text-base">
                                            {t('card_map_data.card_data.cost_renovation_desc')}
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <h1 className="font-bold text-xl mb-2">{t('card_map_data.card_data.cost_building_title')}</h1>
                                        <p className='text-gray-700 text-base'>
                                            <CountUp
                                                className='text-red-600 font-mono text-4xl' separator="." duration={1.2}
                                                decimals={0} decimal=","
                                                end={props.total}/>
                                            {props.total === 1 ? t('card_map_data.card_data.stat_building_desc_part1')
                                                : props.total > 1 ? t('card_map_data.card_data.stat_building_desc_part1_pl')
                                                    : t('card_map_data.card_data.stat_building_desc_part1_null')}
                                            <CountUp
                                                className='text-red-600 font-mono text-4xl' separator="." duration={1.2}
                                                decimals={0} decimal=","
                                                end={props.buildings}/>{t('card_map_data.card_data.stat_building_desc_part2')}
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <h1 className="font-bold text-xl mb-2">{t('card_map_data.card_data.total_prime_title')}</h1>
                                        <h2 className='font-mono text-4xl text-blue-500'><CountUp separator="."
                                                                                                  duration={1.2}
                                                                                                  decimals={2}
                                                                                                  decimal=","
                                                                                                  end={props.totalPrime}/> €
                                        </h2>
                                        <p className="text-gray-700 text-base">
                                            {t('card_map_data.card_data.total_prime_desc')}
                                        </p>
                                    </div>
                                    {/*<div ref={bottomRef} />*/}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                </div>
            </div>
        </>
    );
};

export default Data4;