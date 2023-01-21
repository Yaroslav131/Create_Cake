import React from "react";
import Header from '../src/components/header/Header'
import Block from '../src/components/block/blockCom'
import CarouselBox from './components/slider/Slider'
import Constructor from './components/cakeConstructor/Constructor'
import InputBox from './components/InputBox/InputBox'
import CakeLayuts from "./components/cakeLayuts/cakeLayuts";
import SendReqestBlock from "./components/SendReqestBlock/SendReqesrBlock"
import './App.css'
import Footer from './components/Footer/Foter'

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>СОБЕРИ СВОЙ ТОРТ</h1>
        <Block text={'ВЫБЕРИТЕ ДИЗАЙН:'} body={<CarouselBox />} />
        <Block text={'КОЛИЧЕСТВО УРОВНЕЙ:'} body={<Constructor />} />
        <InputBox headLine={'НАДПИСЬ'} className={"inscription-input"} description={"Мы можем разместить на торте любую надпись, например: «С днем рождения!»:"} />
        <InputBox headLine={'КОМЕНТАРИЙ'} className={"comment-input"} description={"Дополнительные пожелания по украшению, начинке, декору и пр."} />
        <CakeLayuts/>
        <SendReqestBlock/>
      </main>
      <Footer/>
    </div>

  )
}

export default App;