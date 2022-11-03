import React from 'react'
import DropdownsWithIcons from './DropdownsWithIcons'
import Center from '../Center/Center'
// import './sidebar.css'

export default {
  title: 'Tailwindui/DropdownsWithIcons',
  component: DropdownsWithIcons
}

// export const Small = () => <Sidebar size='small' placeholder='Small size' />
export const Medium = () => <Center><DropdownsWithIcons size='medium' placeholder='Medium size' /></Center>
// export const Large = () => <Sidebar size='large' placeholder='Large size' />