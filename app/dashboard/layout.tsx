import { Sidebar } from '@/components/sidebar'
import React from 'react'
import AuthProvider from '../auth/Provider'
import { Metadata } from 'next'
import TeamSwitcher from './components/team-switcher'
import { MainNav } from './components/main-nav'
import { Search } from './components/search'
import { UserNav } from './components/user-nav'

export const metadata: Metadata = {
  title: "Application",
  description: "Example dashboard app built using the components.",
}

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    // <div className="grid grid-rows-3 grid-flow-col gap-4">
    //     <div className="row-span-3 ...">01</div>
    //     <div className="col-span-2 ...">02</div>
    //     <div className="row-span-2 col-span-2 ...">03</div>
    // </div>
    <AuthProvider>
      <div className=''>
        <aside className='fixed top-0 left-0 w-60 h-full bg-[#170B30] hidden lg:block'>
          <Sidebar />
        </aside>
        <main className='lg:ml-[22%] lg:w-[78%] xl:ml-[15%] xl:w-[85%] w-[100%]'>
          <div className="hidden md:block border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
          {children}
        </main>
      </div>
    </AuthProvider>
  )
}

export default layout