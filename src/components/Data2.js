import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useState} from 'react'
import { FiArrowRight } from "react-icons/fi";
import {Line} from "react-chartjs-2";
import axios from "axios";
import {useTranslation} from "react-i18next";

export default function Data1() {
    let [isOpen, setIsOpen] = useState(false)
    const [chartData, setChartData] = useState([]);

    const { t } = useTranslation();

    const data = {
        labels: chartData.filter(item => item.year !== 2022).map(item => item.year),
        datasets: [{
            label: '',
            data: chartData.map(item => item.co2),
            tension: 0.2,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#10B981',
                '#b48484',
                '#4c16d6',
                '#d05f3a'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#10B981',
                '#b48484',
                '#4c16d6',
                '#d05f3a'
            ]
        }]
    };

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        axios.get('https://api.calculo2.be/api/calculo2').then((response) => {
            setChartData(response.data);
        });

    }, []);

    // console.log(chartData)

    return (
        <>
            <div className="flex flex-col justify-between box-content p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('card_eco_co2.title')}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t('card_eco_co2.description')}</p>
                </div>
                <a onClick={toggleModal}
                    className="w-fit cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-[#B72b35] hover:bg-[#8F0017] focus:ring-4 focus:outline-none focus:ring-[#8F0017] ">
                    {t('more_details')}<FiArrowRight className='text-2xl pl-1' />
                </a>
            </div>


            <>
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

                                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-[0.40]" />

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

                                <div className="inline-block w-full max-w-3xl border-b-4 border-[#B72b35] my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-lg z-50">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-3xl font-semibold p-6 border-b border-solid border-slate-200 rounded-b"
                                    >
                                        {t('card_eco_co2.co2_modal.title')}
                                    </Dialog.Title>

                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            {t('card_eco_co2.co2_modal.description')}
                                        </p>
                                        <div className='w-3/4 mx-auto'>
                                            <Line data={data} type={"line"} options={{
                                                plugins: {
                                                    legend: {
                                                        display: false,
                                                    },
                                                }
                                            }}/>
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
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </>
    )
}


