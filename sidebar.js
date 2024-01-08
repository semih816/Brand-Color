import { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

function Sidebar() {
    const [modalIsOpen , setModalIsOpen] = useState (false)


    const toggleModal = () =>{
        setModalIsOpen(!modalIsOpen)
    }
    return (
      <>
        <aside className="sidebar">
            <div className="logo">
                <a href="#" >Focus<b>Colors</b></a>
            </div>
            <div className="descrpiton">
            The biggest collection of official Focus Colors codes around. Curated by @focuscolors.
            </div>
            <nav className="menu">
                <ul>
                    <li>
                        <a onClick={toggleModal}>About FocusColors</a>
                        
                    </li>
                </ul>
            </nav>
        </aside>

        <Modal isOpen={modalIsOpen}
        className="about-modal"
        overlayClassName="about-modal-overlay"
        onRequestClose={toggleModal}>
        <button className="modal-close-btn" onClick={toggleModal}><GrClose /></button>
        <h3>About FocusColors</h3>
        <p>
        FocusColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.
        </p>
        <p>
        It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing. 
        </p>
      </Modal>
      </>
    );
  }
  
  export default Sidebar;
  