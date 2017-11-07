import React, { PureComponent } from 'react'
import Posts from './components/Posts'
import {WOW} from 'wowjs'

window.addEventListener('DOMContentLoaded',(e) => {
  document.querySelector('.header-title').classList.add('header-title-vis')
  new WOW().init()
})

export default class App extends PureComponent{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <section className="app">
        <Posts/>
      </section>
    )
  }
}
