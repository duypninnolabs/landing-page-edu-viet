import React from 'react'

const BannerSection = () => {
  return (
      <section className="w-full">
      <img src={'/banner.png'} className="w-full hidden sm:block" alt="Hero" />
      <img src={'/banner-mb.png'} className="w-full sm:hidden" alt="Hero" />
    </section>
  )
}

export default BannerSection