import Link from 'next/link'
import React from 'react'
import {AiFillCar} from 'react-icons/ai'


const links = [
  {
    id: 1,
    icon: <AiFillCar />,
    title: "Private taxi",
    url: "/"
  },
  {
    id: 2,
    icon: <AiFillCar />,
    title: "Share taxi",
    url: "/share"
  },
  {
    id: 3,
    icon: <AiFillCar />,
    title: "Express",
    url: "/express"
  },
  {
    id: 4,
    icon: <AiFillCar />,
    title: "Cargo",
    url: "/cargo"
  },
  {
    id: 5,
    icon: <AiFillCar />,
    title: "Services",
    url: "/other-services"
  },

]

const Allservices = () => {
  return (
    <div className="text-red-800">
      {links.map(link => (
        <Link key={link.id} href={link.url} >
          {link.title}

        </Link>
      ))}
    </div>
  )
}

export default Allservices;