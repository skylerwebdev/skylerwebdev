import React from 'react'
import { Route as R, Switch} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Classes from '../pages/Classes'
import Update from '../pages/Update'
import Upgrade from '../pages/Upgrade'
import Website from '../pages/Website'
import Managed from '../pages/Managed'
import Portfolio from '../pages/Portfolio'
import Freelance from '../pages/Freelance'
import Logo from '../components/Logo'
const AppRouter = () => {
    return (
        <div>
            <Switch>
    <R exact path ='/'>{Home}</R>
<R path='/classes'>{Classes}</R>
            <R path="/about">{About}</R>
    <R path ='/website'>{Website}</R>
   <R path ='/update'>{Update}</R>
    <R path ='/upgrade'>{Upgrade}</R>
    <R path ='/managed'>{Managed}</R>
    <R path ='/portfolio'>{Portfolio}</R>
    <R path = '/freelance'>{Freelance}</R>
<R path = '/logo'>{Logo}</R>



    </Switch>
        </div>
    )
}

export default AppRouter
