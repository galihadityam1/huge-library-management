import Image from 'next/image'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
        <section className="auth-form">
            <div className="auth-box w-[450px] sm:w-[500px]">
              <div className='flex -flex-row gap-3'>
                <Image src="/icons/logo.svg" alt='logo'width={37} height={37}/>
                <h1 className='text-2xl font-semibold text-white'>Library</h1>
              </div>
              <div>{children}</div>
            </div>
        </section>

        <section className='auth-illustration hidden sm:block'>
          <Image src="/images/auth-illustration.png" alt="auth-illustration" width={1000} height={1000}
          className=" size-full object-cover"
          />
        </section>
    </main>
  )
}

export default Layout