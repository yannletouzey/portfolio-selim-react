import punchFour from "../../js/punch/punchFour.js";
const FourCol = ({handleClickOpenFocus}) => {
  return (
    <>
      <div className="fourCol">
        {
          punchFour[0].map((item, i) => {
            return (
              <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        } 
      </div>
      <div className="fourCol">
        {
          punchFour[1].map((item, i) => {
            return (
              <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        } 
      </div>
      <div className="fourCol">
        {
          punchFour[2].map((item, i) => {
            return (
              <div key={i} className="img_container" onClick={handleClickOpenFocus}>
                <img src={item.img} alt="" />
              </div>
            )
          })
        } 
      </div>
      <div className="fourCol">
        {
          punchFour[3].map((item, i) => {
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
export default FourCol;