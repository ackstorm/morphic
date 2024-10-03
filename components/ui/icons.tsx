'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <img src="https://www.ackstorm.com/logo-black.png" height={'60px'} width={'100px'} />
  )
}

export { IconLogo }
