import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SingedIn() {
  return (
    <div>
        <Menu.Item>
            <Image avatar  spaced="right" src=""/>
            <Dropdown pointing="top left" text='ugur'>
                <Dropdown.Menu>
                    <Dropdown.Item text="bilgilerim" icon="info"/>
                    <Dropdown.Item text="cıkıs yap" icon="sing-out"/>
                 
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
