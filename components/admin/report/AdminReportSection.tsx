/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client'

import BarsChart from '@/components/admin/report/BarChart'
import GetEvents from '@/services/GetEvents'
import GetReport from '@/services/GetReport'
import Spinner from '@/components/Spinner'
import { useState, useEffect } from 'react'
import type { Evento } from '@/models/Event'
import type { EventData } from '@/models/ReportEventData'

const initialReportInfo: EventData = {
  event: '',
  dateList: [],
  quantityList: []
}

const AdminReportSection = (): JSX.Element => {
  const [eventList, setEventList] = useState<Evento[]>([])
  const [reportInfo, setReportInfo] = useState<EventData>(initialReportInfo)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const callApi = async () => {
      try {
        const list = await GetEvents()
        setEventList(list)
      } catch (error) {
        console.error(error)
      }
    }
    void callApi()
  }, [])

  const handleSubmit = (e: { preventDefault: () => void, target: any }) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const formData = new FormData(form)

    const eventSelectorValue = formData.get('eventName')
    const eventId = eventList.find(e => e.name === eventSelectorValue)?.id
    const startDateValue = formData.get('start')
    const endDateValue = formData.get('end')

    GetReport(eventId, startDateValue, endDateValue)
      .then(reportData => {
        console.log(reportData)
        setReportInfo(reportData)
        setLoading(false)
      })
      .catch(err => { console.error(err.message) })
      .finally(() => { setLoading(false) })
  }

  return (
        <>
        <form className='flex justify-evenly' onSubmit={handleSubmit}>
            <div className="relative z-0">
                <input required list='eventList' type="text" name='eventName' id="eventName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="eventName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Evento ID</label>
                <datalist id='eventList'>
                    {eventList.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
                </datalist>
            </div>
            <div className="flex items-center">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <input required name="start" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Select date start"/>
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <input required name="end" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Select date end"/>
                </div>
            </div>
            <input type="submit" className='cursor-pointer'/>
        </form>
        <div className="relative flex flex-col gap-16">
            { loading && <Spinner/> }
            <h3>Información del evento: <span className='uppercase font-semibold'>{reportInfo.event}</span></h3>
            { reportInfo?.quantityList?.length > 0
              ? <BarsChart event={reportInfo.event} dateList={reportInfo.dateList} quantityList={reportInfo.quantityList}/>
              : <p className='uppercase text-6xl text-gray-700 admin-font tracking-widest text-center'>Sin datos</p>
            }
        </div>
        </>
  )
}

export default AdminReportSection
