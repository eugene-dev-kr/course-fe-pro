import { useState } from 'react'

import MyButton from './components/MyButton';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import HandleClick from './components/HandleClick';
import StateCounter from './components/State';
import Counters from './components/Counters';
import Counters2 from './components/Counters2';
import Game from './components/TicTacToe';
import FilterProducts from './components/FilterableProductsTable';

export default function App() {
    return(
        <>
            <MyButton />
            <Profile />
            <ShoppingList />
            <HandleClick />
            <br />
            <br />
            <StateCounter />
            <Counters />
            <Counters2 />
             <br />
            <br />
            <Game />
             <br />
            <br />
            <FilterProducts />
        </>
    )
}