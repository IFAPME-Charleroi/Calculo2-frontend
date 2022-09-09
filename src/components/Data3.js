import { Dialog, Transition } from '@headlessui/react'
import { clear } from '@testing-library/user-event/dist/clear';
import React, {Fragment, useEffect, useState} from 'react'
import { FiArrowRight } from "react-icons/fi";
import {useTranslation} from "react-i18next";
import CountUp from 'react-countup';





export default function Data1() {
    let [isOpen, setIsOpen] = useState(false)
    let chauffage;
    let valKW
    let valCO

    const { t } = useTranslation();

    const energy_eco = t('card_form_calcul.co2_modal.form_result.energy_eco')
    const co2_eco = t('card_form_calcul.co2_modal.form_result.co2_eco')


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }



    function calculKWHCO () {
        const alpha_0 = document.getElementById('company-website').value;
        const alpha_1 = document.getElementById('chauffage').value;
        let valKW = (195.1 * alpha_0).toFixed(2);
        let valCO = ((valKW * alpha_1) / 1000).toFixed(2) ;

        let tarif = 0;
        switch (alpha_1) {
            case '0':
                tarif = 0;
                break;
            case '0.206':
                tarif = 0.15737;
                break;
            case '0.271':
                tarif = 0.12635;
                break;
            case '0.220':
                tarif = 0.51781;
                break;
            case '0.031':
                tarif = 0.0822;
                break;
            default:
                tarif = 0;
          }
        var valTarif = (tarif * valKW).toFixed(2);

        document.getElementById("KW").innerHTML = `<p class="text-center">${valKW} ${energy_eco}</br>
        <span class="text-base text-center text-blue-600">` + t('card_form_calcul.co2_modal.form_result.tarif_eco') + `${valTarif} € TTC</span></br>
        <span class="text-xs text-right text-blue-400">` + t('card_form_calcul.co2_modal.form_result.tarif_tarif') +` ${tarif} €/kwh `+ t('card_form_calcul.co2_modal.form_result.tarif_taxes') +`</p>`;
        document.getElementById("CO").innerHTML = `<p>${valCO} ${co2_eco}</p>`;
        }


    useEffect(() => {


    }, [])



    return (
        <>
            <div className="flex flex-col justify-between box-content p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4">
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('card_form_calcul.title')}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {t('card_form_calcul.description')}
                    </p>
                </div>
                <a onClick={openModal}
                    className="w-fit cursor-pointer inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-[#B72b35] hover:bg-[#8F0017] focus:ring-4 focus:outline-none focus:ring-[#8F0017] ">
                    {t('more_details')}<FiArrowRight className='text-2xl pl-1' />
                </a>
            </div>


            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 overflow-y-auto"
                        onClose={closeModal}
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
                                        {t('card_form_calcul.co2_modal.title')}
                                    </Dialog.Title>

                                    <div className="relative p-6 flex-auto">
                                        {/* content */}
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            {t('card_form_calcul.co2_modal.description')}
                                        </p>
                                    <div className='flex flex-col sm:flex-row justify-evenly'>
                                        <div className=''>
                                            <div className="mt-8 flex rounded-md shadow-sm">
                                                <input onChange={calculKWHCO} type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border border-r-0 border-gray-400 px-4 py-2 pr-8" placeholder="0.00"/>
                                                <span className="inline-flex items-center px-3 rounded-r-md border border-gray-400 bg-gray-50 text-gray-500 text-sm"> m² </span>
                                            </div>
                                            <div className="relative mt-3 ">
                                                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option>{t('card_form_calcul.co2_modal.form.work_type')}</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                            <div className="relative mt-3 mb-8">
                                                <select onChange={calculKWHCO} id="chauffage" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                    <option value='0' defaultValue='selected' >{t('card_form_calcul.co2_modal.form.heating_type.title')}</option>
                                                    <option value='0.206'>{t('card_form_calcul.co2_modal.form.heating_type.options.1')}</option>
                                                    <option value='0.271'>{t('card_form_calcul.co2_modal.form.heating_type.options.2')}</option>
                                                    <option value='0.220'>{t('card_form_calcul.co2_modal.form.heating_type.options.3')}</option>
                                                    <option value='0.031'>{t('card_form_calcul.co2_modal.form.heating_type.options.4')}</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-lg">
                                            <div id="KW"> </div>
                                            <div id="CO"> </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={closeModal}
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
