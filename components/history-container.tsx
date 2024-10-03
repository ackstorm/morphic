import React from 'react'
import { History } from './history'
import { HistoryList } from './history-list'
import { headers } from 'next/headers'

async function getUserId() {
    'use server'
    const headersList = headers()
    return headersList.get('X-Forwarded-Email') || 'anonymous'
}

type HistoryContainerProps = {
  location: 'sidebar' | 'header'
}

const HistoryContainer: React.FC<HistoryContainerProps> = async ({
  location
}) => {
  return (
    <div
      className={location === 'header' ? 'block sm:hidden' : 'hidden sm:block'}
    >
      <History location={location}>
        <HistoryList userId="{getUserId()}" />
      </History>
    </div>
  )
}

export default HistoryContainer
