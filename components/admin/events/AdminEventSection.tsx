/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import EventListTable from '@/components/admin/events/AdminListEvent'
import Spinner from '@/components/Spinner'
import { useState } from 'react'

export default function AdminEventSection (): JSX.Element {
  const actions = {
    create: 'create',
    list: 'list'
  }
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState(actions.create)

  return (
        <>
            <div className="flex justify-evenly items-center">
                <p
                  onClick={(e) => { setView(actions.create) }}
                  className={`text-center font-semibold uppercase cursor-pointer ${view === actions.create ? 'border-b-2' : ''}  hover:border-b-2 border-[#975D93] max-w-[50%]`}>Crear evento</p>
                <p
                  onClick={(e) => { setView(actions.list) }}
                  className={`text-center font-semibold uppercase cursor-pointer ${view === actions.list ? 'border-b-2' : ''}  hover:border-b-2 border-[#975D93] max-w-[50%]`}>Listar eventos</p>
            </div>
            { loading && <Spinner/> }
            { view === actions.create && <p>crear evento</p>}
            { view === actions.list && <EventListTable/>}
        </>
  )
}
