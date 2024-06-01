import React from 'react'
import Card from './Card'
import list from "../../public/list.json"
import {Link} from "react-router-dom"

export const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl'>
        <div className='pt-32 justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>Welcome to all book page : </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quasi saepe ipsa illum maiores qui atque assumenda, harum aperiam laboriosam ipsum maxime recusandae ut aut facilis laborum porro repudiandae iusto!</p>
            <Link to="/">
                <button className='px-5 py-2 bg-purple-600 rounded-md mt-5 hover:bg-purple-900'>back</button>
            </Link>
        </div>
        <div className='flex flex-wrap justify-center gap-8 mt-10 z-50'>
            {
               list.map((item)=>(
                <Card key={item.id} item={item} />
               ) )
            }
        </div>
    </div>
    </>
  )
}
