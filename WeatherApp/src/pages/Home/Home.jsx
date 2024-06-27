import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import unidecode from 'unidecode';
import clsx from 'clsx';


function Home ()  {

  const dispatch = useDispatch();

  const [listWeatherOfDay, setListWeatherOfDay] = useState();
  const [cityName, setCityName] = useState("Hà Nội");
  const [currentCityName, setCurrentCityName] = useState("Hà Nội");
  const data = useSelector((state) => state.weather.data);
  const error = useSelector((state)=> state.weather.error)
  const loading = useSelector((state)=> state.weather.loading)

  console.log(error)

  useEffect(()=>{
    dispatch({ type: 'FETCH_WEATHER_REQUEST', payload: convertVietnameseToAscii(cityName) });
  }, [])

  useEffect(()=>{
    setListWeatherOfDay(data?.list);
  },[data])


  function convertVietnameseToAscii(city) {
    // Chuyển đổi thành phần không dấu
    return unidecode(city).toLowerCase().replace(/\s/g, '');
  }

  const handleSearchCity = ()=>{
    dispatch({ type: 'FETCH_WEATHER_REQUEST', payload: cityName });
    setCurrentCityName(cityName);
  }

  const getTime = (dateString) =>{
    const dateTime = new Date(dateString);
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();
    return `${hour}:${minute}`;
  }


  return (
    <div className='text-3xl bg-[#242529] h-screen flex'>
      <div className='m-auto flex-col '>
      <div className='flex m-auto mb-10'>
        <div className='mx-auto'>
        <input value={cityName} onChange={(e)=>{
          setCityName(e.target.value);
        }
        } placeholder='Tên Thành Phố' className='bg-transparent border-2 border-[#bfc1c4] p-2 text-[#bfc1c4]' />
        <button className='bg-[#5f9aee] h-full text-[#bfc1c4] ml-3 p-2' onClick={handleSearchCity}>Tìm kiếm</button>
        </div>
      </div>
      <div className='text-[#bfc1c4] mb-10'>Thành Phố: {currentCityName}</div>
      {loading ? (
          <div className='text-[#bfc1c4]'>Loading...</div>
        ) : error ? (
          <div className='text-[#f44336]'>{error}</div>
        ) : (
          <ul className="grid md:grid-cols-3 lg:grid-cols-7 gap-5 m-auto">
            {listWeatherOfDay?.map((item, index) => (
              <div
                key={index}
                className={clsx('text-[#bfc1c4] border-l-2 border-l-[#bfc1c4] px-2 flex-shrink-0', {
                  'border-r-2 border-r-[#bfc1c4]': index === listWeatherOfDay.length - 1,
                })}
              >
                <div className='mt-2'>Giờ: {getTime(item.dt_txt)}</div>
                <img
                  className='w-40 h-40 m-auto'
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt=''
                />
                <div className='mt-2 flex'>Nhiệt Độ: {item.main.temp} </div>
                <div className='mt-2'>Độ Ẩm: {item.main.humidity}%</div>
                <div className='mt-2'>Tốc độ gió: {item.wind.speed}</div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
