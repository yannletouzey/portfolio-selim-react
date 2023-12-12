import Header from './Header.jsx'
import ImgContainer from './ImgContainer.jsx'
import '../scss/style.scss'
import data from '../js/data.js'

function App() {

  return (
    <>
      <Header />
      {data[0].map((item, i) => {
        return (
          <ImgContainer key={i} img={item.img} />
        )
      })}
    </>
  )
}

export default App
