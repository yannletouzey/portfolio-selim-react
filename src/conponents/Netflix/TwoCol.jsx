import netflixTwo from "../../js/netflix/netflixTwo.js";
const TwoCol = ({handleClickOpenFocus}) => {
  return (
    <>
      <div className="twoCol">
        {
          netflixTwo[0].map((item, i) => {
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
          netflixTwo[1].map((item, i) => {
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