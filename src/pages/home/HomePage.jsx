import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Reviews from '../../components/reviews/Reviews'

export default function HomePage() {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Reviews/>
    </Layout>
  )
}
