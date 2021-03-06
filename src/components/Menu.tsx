import React, { useState } from 'react'
import { Menu as MenuIcon } from 'react-feather'
import { X as CloseIcon } from 'react-feather'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { title: 'Score Card', link: '/', onClick: () => setOpen(!open) },
    { title: 'Games', link: 'games' },
  ]

  return (
    <>
      <div className="px-4 cursor-pointer" onClick={() => setOpen(!open)}>
        <MenuIcon color="#333" />
      </div>
      {open && (
        <div className="fixed bg-slate-500 bg-opacity-70 top-0 left-0 w-full h-full">
          <div className="w-2/3 bg-white h-full relative lg:max-w-lg lg:m-auto">
            <i
              className="absolute top-0 right-0 p-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <CloseIcon color="#333" />
            </i>
            <ul className="p-6 pt-10">
              {menuItems.map((item, i) => (
                <li key={i} className="pb-4 mb-4 border-b border-b-slate-300">
                  <Link
                    to={item.link}
                    onClick={item.onClick ? item.onClick : () => {}}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
