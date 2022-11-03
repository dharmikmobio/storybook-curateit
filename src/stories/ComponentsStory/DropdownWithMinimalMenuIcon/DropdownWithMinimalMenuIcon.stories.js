import React from 'react'
import DropdownWithMinimalMenuIcon from './DropdownWithMinimalMenuIcon'
import Center from '../Center/Center'
// import './sidebar.css'

export default {
  title: 'Tailwindui/DropdownWithMinimalMenuIcon',
  component: DropdownWithMinimalMenuIcon
}

// export const Small = () => <Sidebar size='small' placeholder='Small size' />
export const Medium = () => <Center><DropdownWithMinimalMenuIcon size='medium' placeholder='Medium size' /></Center>
// export const Large = () => <Sidebar size='large' placeholder='Large size' />