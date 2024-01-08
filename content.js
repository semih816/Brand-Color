import Search from "./search";
import Brand from './brand';
import MainContext from "../mainContext";
import { useContext } from "react";

function Content() {

    const {brands} = useContext(MainContext)
 
    return (
      <>
      <main className="content">
          <header className="header">
            <Search/>
          </header>
          <section className="brands">
                  {brands.map(brand =>( 
                  <Brand brand={brand} />
                  ))}
          </section>
        </main>
      </>
    );
  }
  
  export default Content;
  