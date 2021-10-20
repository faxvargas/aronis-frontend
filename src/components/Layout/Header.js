import React from 'react'
import{
    Link
}from "react-router-dom"
function Header() {
    return (
        
            <header class="bg-indigo-600">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
      <div class="flex items-center">
        <Link to="/">
          <img class="h-10 w-auto" src="https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/140651318_210709304035535_4767053125555057040_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHCoc6sdFgJaTVcrgX0tUYN4Eb6gOJ9bt3gRvqA4n1u3UfwxDt60rMKXCEEO2YKkuOKFucEE1DpVWWuwZjXIKd-&_nc_ohc=hguG_Qr8Hm4AX_FXP0y&_nc_ht=scontent.fmex3-1.fna&oh=09a83d20160f4ac67affac36cf557538&oe=619614C8" alt=""/>
        </Link>
        <div class="hidden ml-10 space-x-8 lg:block">
          <Link to="/prendas" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
            Lista de Ropa
          </Link>

          <Link to="/prendas/crear" class="text-base font-medium text-white hover:text-indigo-50" key="Pricing">
            Diseña tu ropa
          </Link>
        </div>
      </div>
      <div class="ml-10 space-x-4">
        <a href="#" class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
        <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a>
      </div>
    </div>
    <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
      <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
        Solutions
      </a>

      <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Pricing">
        Pricing
      </a>

      <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Docs">
        Docs
      </a>

      <a href="#" class="text-base font-medium text-white hover:text-indigo-50" key="Company">
        Company
      </a>
    </div>
  </nav>
</header>
    
    )
}

export default Header
