import ImgContainer from './ImgContainer.jsx'
import data from '../js/data.js'
const Main = () => {
    return (
        <main className="main">
            {data[0].map((item, i) => {
                return (
                    <ImgContainer key={i} img={item.img} />
                )
            })}
        </main>
    )
}
export default Main;