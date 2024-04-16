import React, { useEffect } from 'react'

export default function About({ setTitleCurrent }) {
  useEffect(() => {
    setTitleCurrent("Selim-DM - About me");
  }, []);
  return (
    <div className="about">
      <h2>Coming soon</h2>
    </div>
  )
}
