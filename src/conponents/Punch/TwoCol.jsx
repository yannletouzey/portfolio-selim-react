import punchTwo from "../../js/punch/punchTwo.js";
const TwoCol = ({handleClickOpenFocus}) => {
  return (
    <>
      <div className="twoCol">
        {
          punchTwo[0].map((item, i) => {
            return (
              <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        } 
      </div>
      <div className="twoCol">
        {
          punchTwo[1].map((item, i) => {
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
export default TwoCol;