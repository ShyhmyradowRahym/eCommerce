import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import 'material-icons/iconfont/material-icons.css';
import H3 from "@material-tailwind/react/Heading3";
import H5 from "@material-tailwind/react/Heading6";
import Cart from '../../components/Cart';

export default function products(props) {
    // const [data, setData]=useState(null)

    // useEffect(()=>{
    //     fetch('http://localhost:3000/api/products')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
    const [a,setA]=useState(0)
    const filters=(e)=>{
        setA(e)
    }
    console.log(a);
    return (
        <div>
            <Head>
                <title>RB Shopping | products</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='container mx-auto md:mt-20 mt-5'>
                <div className='text-center md:mb-10 mb-1'>
                    <H3 color="blueGray">Products</H3>
                    {/* {showCart && <p>Show cart</p>} */}
                </div>
                <div className='flex md:mt-10 mt-5'>
                    <div className='w-1/4 hidden lg:block' style={{ backround: 'rgba(33, 150, 243, 0.5)' }}>
                        <div class="flex justify-center cursor-pointer">
                            <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                                <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-500 text-white">
                                    <H5 color='white'  >Filters</H5>
                                </li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full" onClick={()=>filters(0)}><p className={a===0 && 'border-b border-red-500 w-1/3'}>All</p></li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full" onClick={()=>filters(1)}><p className={a===1 && 'border-b border-red-500 w-1/3'}>Computers</p></li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full" onClick={()=>filters(2)}><p className={a===2 && 'border-b border-red-500 w-1/3'}>Phones</p></li>
                                <li className="px-6 py-2 w-full rounded-b-lg" onClick={()=>filters(3)}><p className={a===3 && 'border-b border-red-500 w-1/3'}>Watches</p></li>
                            </ul>
                        </div>
                        <div class="flex justify-center cursor-pointer mt-5">
                            <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                                <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-500 text-white">
                                    <H5 color='white'>Prices</H5>
                                </li>
                                <li class="px-6 py-2 border-b border-gray-200 w-full">0.00TMT-500TMT</li>
                                <li class="px-6 py-2 border-b border-gray-200 w-full">500TMT-1000TMT</li>
                                <li class="px-6 py-2 border-b border-gray-200 w-full">1000TMT-2000TMT</li>
                                <li class="px-6 py-2 w-full rounded-b-lg">2000TMT-5000TMT</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full grid md:grid-cols-3 md:gap-3 grid-cols-2 gap-2'>
                        {props.products && props.products.map(e => (
                            <Cart product={e} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = async () => {
    // await new Promise(resolve=>{
    //     setTimeout(resolve, 2000);
    // })
    const products = await fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .catch(() => loading = true)
    return {
        props: {
            products
        }
    }
}
