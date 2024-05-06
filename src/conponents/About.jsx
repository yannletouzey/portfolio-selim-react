import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function About({ setTitleCurrent }) {
  useEffect(() => {
    setTitleCurrent("Selim-DM - About me");
  }, []);
  return (
    <main className="main main__about">
      <h2>Coming soon</h2>
      <Link to="/" className="return-home">HOME</Link>
    </main>
  )
}
