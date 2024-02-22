import netfllix from "../../js/netflix/netflix.js";
const OneCol = ({handleClickOpenFocus}) => {
  return (
    <div className="oneCol">
      {
        netfllix.map((item, i) => {
          return (
            <div key={i} className="img_container" onClick={handleClickOpenFocus}>
              <img src={item.img} alt="" />
            </div>
          )
        })
      } 
    </div>
  )
}
export default OneCol;