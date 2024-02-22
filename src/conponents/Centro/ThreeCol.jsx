import centroThree from "../../js/centro/centroThree.js";
const ThreeCol = ({handleClickOpenFocus}) => {
  return (
    <>
      <div className="threeCol">
        {
          centroThree[0].map((item, i) => {
            return (
              <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        } 
      </div>
      <div className="threeCol">
        {
          centroThree[1].map((item, i) => {
            return (
              <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        } 
      </div>
      <div className="threeCol">
        {
          centroThree[2].map((item, i) => {
            return (
              <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        } 
      </div>
    </>
  )
}
export default ThreeCol;