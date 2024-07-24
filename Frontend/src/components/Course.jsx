import React, { useEffect, useState } from 'react'
import Card from './Card'
// import list from "../../public/list.json"
import {Link, redirect} from "react-router-dom"
import axios from 'axios'

export const Course = () => {
  // backend ki api ko call karege
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book")   // api ka URL
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])



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
               book.map((item)=>(
                <Card key={item.id} item={item} />
               ) )
            }
        </div>
    </div>
    </>
  )
}
