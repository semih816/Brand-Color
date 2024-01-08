import MainContext from './mainContext';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Copied from './components/copied';
import BrandsData from './brands.json';
import { useEffect, useState } from "react";


function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key =>{
    brandsArray.push(BrandsData[key])
  })
  const [brands , setBrands] = useState(brandsArray)
  const [selectedBrands , setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    console.log(selectedBrands)
  },[selectedBrands])

  useEffect(()=>{
    if(copied){
     const timeout = setTimeout(()=>{
        setCopied(false)
      },900)
      return ()=>{
        clearTimeout(timeout)
      }
    }
  },[copied])

  useEffect(()=>{
   setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  },[search])
  

  const data ={
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  return (
    <>
    {copied && <Copied color={copied} />}
    <MainContext.Provider value={data}>
      <Sidebar />
      <Content />
    </MainContext.Provider>
    
    </>
  );
}

export default App;
