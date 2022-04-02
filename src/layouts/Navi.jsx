import React from 'react'
import CartSummary from './CartSummary'
import { Button, Container,  Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SingedIn from './SingedIn'

export default function Navi() {
  return (
    <div>
         <Menu inverted fixed="top">
           <Container>
           <Menu.Item
          name='home'
          
        />
        <Menu.Item
          name='messages'
          
        />

        <Menu.Menu position='right'>
          <CartSummary/>
          <SignedOut/>
          <SingedIn/>

          
        </Menu.Menu>
           </Container>
        
      </Menu>
    </div>
  )
}
