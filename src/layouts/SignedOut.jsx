import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut() {
  return (
    <div>
        <Menu.Item>
            <Button primary>giriş yap</Button>
             <button primary style={{marginleft:"0.5em"}}>kayıt ol</button>
        </Menu.Item>
        
        

    </div>
  )
}
