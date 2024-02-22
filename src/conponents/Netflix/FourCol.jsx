import netflixFour from "../../js/netflix/netflixFour.js";
const FourCol = ({handleClickOpenFocus}) => {
  return (
    <>
      <div className="fourCol">
        {
          netflixFour[0].map((item, i) => {
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
          netflixFour[1].map((item, i) => {
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
          netflixFour[2].map((item, i) => {
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
          netflixFour[3].map((item, i) => {
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