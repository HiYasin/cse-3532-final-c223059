import React, { useEffect, useState } from 'react';
import Videos from './Videos';

const Content = () => {
    const [ categories, setCategories ] = useState([]);
    const [ currentCategory, setCurrentCategory] = useState('1000');
    const handleCategory = (category, id) =>{
        setCurrentCategory(id);
    }
    useEffect(()=>{
        async function fetchData(url) {
            try {
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();

                setCategories(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData('https://openapi.programming-hero.com/api/videos/categories');
    }, [])
    //console.log(categories);
    return (
        <div>
            <div className='flex justify-center gap-4'>
                {
                    categories.map(category =><button key={category.category_id} className='btn' onClick={()=>{handleCategory(category.category, category.category_id)}}>{category.category}</button>)
                }
            </div>
            <Videos category={currentCategory}></Videos>
        </div>
    );
};

export default Content;