import React ,{useState,useEffect}from 'react'
import newsApi from './app/api/newsApi'
import Screen from  './app/components/Screen'
import SearchBar from './app/components/SearchBar'
import FeaturedNews from './app/components/FeaturedNews'
import BreakingNews from './app/components/BreakingNews'
import PoliticalNews from './app/components/PoliticalNews'
import TechNews from './app/components/TechNews'
import EntertainmentNews from './app/components/EntertainmentNews'

const App = () => {
  const [featuredNews,setFeaturedNews]=useState({});
  const [breakingNews,setBreakingNews]=useState([]);
  const [politicalNews,setPoliticalNews]=useState([]);
  const [techNews,setTechNews]=useState([]);
  const [entertainmentNews,setEntertainmentNews]=useState([]);


const filterFeatured=(data)=>{
 return [...data].filter(item=>item.featured==='on').reverse()[0]
}

const filterByCategory=(data,category)=>{
  return [...data].filter(item=>item.category===category)
 }


const filterMultipleNews= async ()=>{
  const allNews= await newsApi.getAll()
 
  setFeaturedNews(filterFeatured(allNews));

  setBreakingNews(filterByCategory(allNews,'breaking-news'));
  setPoliticalNews(filterByCategory(allNews,'political'));
  setEntertainmentNews(filterByCategory(allNews,'entertainment'));
  setTechNews(filterByCategory(allNews,'tech'));

}

useEffect(()=>{

  filterMultipleNews()
},[])

return (
  <Screen>
    <SearchBar/>
    <FeaturedNews item={featuredNews}/>
    <BreakingNews data={breakingNews}/>
    <PoliticalNews data={politicalNews}/>
    <TechNews data={techNews}/>
    <EntertainmentNews data={entertainmentNews}/>
  </Screen>
)
};
export default App;
