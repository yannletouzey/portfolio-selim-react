import centro from "../../js/centro/centro.js";
const OneCol = ({handleClickOpenFocus}) => {
  return (
    <div className="oneCol">
      {
        centro.map((item, i) => {
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