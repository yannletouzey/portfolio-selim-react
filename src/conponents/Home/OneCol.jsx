import photos from "../../js/photos.js";
const OneCol = ({handleClickOpenFocus}) => {
  return (
    <div className="oneCol">
      {
        photos.map((item, i) => {
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