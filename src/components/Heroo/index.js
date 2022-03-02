import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HerooContainer , HerooContent, HerooItem, HerooH1, Heroop, HerooBtn} from'./HerooElement'

const Heroo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
        <HerooContainer>
          <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <HerooContent>
            <HerooItem>
              <HerooH1>Greatest Pizza Ever</HerooH1>
              <Heroop>Ready in 60 seconds</Heroop>
              <HerooBtn>Place Order</HerooBtn>
            </HerooItem>
          </HerooContent>
        </HerooContainer>
    </div>
  );
};

export default Heroo;