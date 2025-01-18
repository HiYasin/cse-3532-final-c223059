import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import empty from '../assets/Icon.png'
const Videos = ({category}) => {
    console.log(category);
    const [ videos, setVideos ] = useState([]);

    useEffect(()=>{
        async function fetchData(url) {
            try {
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();

                setVideos(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData(`https://openapi.programming-hero.com/api/videos/category/${category}`);
    }, [category])
    //console.log(videos)
    return (
        <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 justify-between gap-5 mt-10'>
            {
                videos.length>0?videos.map(video=><VideoCard videoInfo={video}></VideoCard>)
                :
                <div className='flex flex-col items-center justify-center md:col-span-2 mt-10 lg:col-span-4'>
                    <img src={empty} alt="" />
                    <p className='text-2xl font-semibold'>Ops! Sorry, there isn't any content.</p>
                </div>
            }
        </div>
    );
};

export default Videos;