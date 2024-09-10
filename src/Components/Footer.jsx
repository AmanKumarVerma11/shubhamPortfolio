// import React from 'react'

function Footer() {
  return (
    <div className="space-y-6">
      <hr />
      <ul className="font-lato flex gap-10 items-center justify-center md:gap-28 ">
        <li className="text-slate-600 hover:text-slate-700 hover:font-semibold">
          <a href="https://github.com/shubhambhatia2103" target="_blank">Github</a>
        </li>
        <li className="text-slate-600 hover:text-slate-700 hover:font-semibold">
          <a href="https://www.linkedin.com/in/shubhambhatia2103/" target="_blank">LinkedIn</a>
        </li>
        <li className="text-slate-600 hover:text-slate-700 hover:font-semibold">
          <a href="https://www.instagram.com/6eingshubham/" target="_blank">Instagram</a>
        </li>
        <li className="text-slate-600 hover:text-slate-700 hover:font-semibold">
          <a href="https://x.com/whoodattboyy" target="_blank">Twitter</a>
        </li>
      </ul>
      <div >
        <p className="text-center">© 2024 All rights reserved</p>
        <p className="text-center pb-2">Made by <a href="https://github.com/AmanKumarVerma11">Aman Kumar Verma</a> </p>
      </div>
    </div>
  )
}

export default Footer