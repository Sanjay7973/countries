
import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Api = 'https://restcountries.com/v3.1/independent?status=true'
const Countries = () => {
  const [apiData, setApiData] = useState([])
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [currentPage, setCurrentPage] = useState(1); // pagination
  const [loader, SetLoader] = useState(false)
  const itemPerPage = 12;

  // function to get api data 
  const getApiData = async (api) => {
    SetLoader(true) //start loader
    try {
      const response = await fetch(api)
      const countryData = await response.json()
      setApiData(countryData)
      SetLoader(false)
    } catch (error) {
      console.log(error)
    }

  }
  // use useeffect for api 
  useEffect(() => {
    getApiData(Api)
  }, [])

  // filter section
  const FilterData = apiData.filter((country) => (
    country.name.common.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  ))
  // pagination logic 
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItem = FilterData.slice(firstItemIndex, lastItemIndex)

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
    console.log(value)
  }
  return (
    <div>
      {/* // sorting array */}
      <div className='flex justify-between px-16 mt-3 mb-[-30px]'>
        <div>
          <span className='text-2xl'>All Countries</span>
        </div>
        <div>
          <input onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }} value={searchQuery} placeholder='search....' className='border-2 rounded p-2' type="search"
          />
        </div>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-auto justify-around p-7 sm:p-10  '>
        {
          currentItem.length > 0 ? (
            currentItem.map((countriesValue, index) => {
              return (
                <div key={index} className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={countriesValue.flags.png} alt="blog" />
                  <div className="p-3">
                    <h2 className="tracking-widest text-xl title-font font-medium mb-1">{countriesValue.name.common}</h2>
                    <h1 className="title-font text-lg font-medium  mb-1">Region:{countriesValue.region}</h1>
                    <p className="leading-relaxed mb-1">Capital: {countriesValue.capital}</p>
                    <div className="flex items-center ">
                      <span className=" border-gray-200">population: {countriesValue.population}
                      </span>
                    </div>
                    <a target='_blank' href={countriesValue.maps.googleMaps} className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 text-xl">see in map
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })) : (
            <p className="text-center text-xl col-span-full"><Backdrop
              sx={(theme) => ({ color: 'red', zIndex: theme.zIndex.drawer + 1 })}
              open={loader}
            >
              <CircularProgress color="inherit" />
            </Backdrop></p>
          )
        }
      </div>
      {/* pagination */}
      <div className='flex justify-end mr-[2%]'>
        <Stack className='flex justify-center py-5'>
          <Pagination
            count={Math.ceil(FilterData.length / itemPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color='primary'
          />
        </Stack>
      </div>

    </div>
  )
}

export default Countries
