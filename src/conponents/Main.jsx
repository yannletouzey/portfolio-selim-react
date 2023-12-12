import HomeImg from './HomeImg.jsx'
import homeImg from '../js/HomeImg.js'
const Main = () => {
    return (
        <main className="main">
            {homeImg[0].map((item, i) => {
                return (
                    <HomeImg key={i} img={item.img} />
                )
            })}
        </main>
    )
}
export default Main;