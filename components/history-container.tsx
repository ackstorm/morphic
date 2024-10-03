import React from 'react'
import { History } from './history'
import { HistoryList } from './history-list'
import { headers } from 'next/headers'
import { getUserId } from '@/lib/actions/chat'

type HistoryContainerProps = {
  location: 'sidebar' | 'header'
}

const HistoryContainer: React.FC<HistoryContainerProps> = async ({
  location
}) => {
  const UserId = await getUserId()
  return (
    <div
      className={location === 'header' ? 'block sm:hidden' : 'hidden sm:block'}
    >
      <History location={location}>
        <HistoryList userId="{UserId}" />
      </History>
    </div>
  )
}

export default HistoryContainer
