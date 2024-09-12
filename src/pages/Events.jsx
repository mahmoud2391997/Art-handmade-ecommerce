// eslint-disable-next-line no-unused-vars
import React from 'react'
import EventsCard from '../components/Events/EventsCard'
import PageTitle from '../components/Shared/PageTitle'
import RollUp from '../components/RollUpButton/RollUp'

export default function Events() {
  return (
    <div>
      <PageTitle title="Events" />
      <EventsCard />
    </div>
  )
}
