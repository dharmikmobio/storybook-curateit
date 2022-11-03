import React from 'react'
import EmptyStatesWithRecommendations from './EmptyStatesWithRecommendations'
// import './sidebar.css'

export default {
  title: 'Tailwindui/EmptyStatesWithRecommendations',
  component: EmptyStatesWithRecommendations
}

// export const Small = () => <Sidebar size='small' placeholder='Small size' />
export const Medium = () => <EmptyStatesWithRecommendations size='medium' placeholder='Medium size' />
// export const Large = () => <Sidebar size='large' placeholder='Large size' />