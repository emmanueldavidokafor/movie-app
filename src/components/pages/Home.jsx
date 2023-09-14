import React from 'react'
import Navbar from '../temps/Navbar';
import Featured from './Featured';
import List from './List';

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Featured type="movie"/>  
        <List/>      
        <List/>      
        <List/>      
    </div>
  )
}
