import React from 'react'
import EmptyStates from './EmptyStates'
// import './sidebar.css'

export default {
  title: 'Tailwindui/EmptyStates',
  component: EmptyStates
}

// export const Small = () => <Sidebar size='small' placeholder='Small size' />
export const Medium = () => <EmptyStates size='medium' placeholder='Medium size' />
// export const Large = () => <Sidebar size='large' placeholder='Large size' />