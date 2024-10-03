import { notFound, redirect } from 'next/navigation'
import { Chat } from '@/components/chat'
import { getChat } from '@/lib/actions/chat'
import { AI } from '@/app/actions'
import { headers } from 'next/headers'

export const maxDuration = 60

async function getUserId() {
    'use server'
    const headersList = headers()
    return headersList.get('X-Forwarded-Email') || 'anonymous'
}

export interface SearchPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: SearchPageProps) {
  const userId = await getUserId()
  const chat = await getChat(params.id, userId)
  return {
    title: chat?.title.toString().slice(0, 50) || 'Search'
  }
}

export default async function SearchPage({ params }: SearchPageProps) {
  const userId = await getUserId()
  const chat = await getChat(params.id, userId)

  if (!chat) {
    redirect('/')
  }

  if (chat?.userId !== userId) {
    notFound()
  }

  return (
    <AI
      initialAIState={{
        chatId: chat.id,
        messages: chat.messages
      }}
    >
      <Chat id={params.id} />
    </AI>
  )
}
