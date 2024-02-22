import punch from "../../js/punch/punch.js";
const OneCol = ({handleClickOpenFocus}) => {
  return (
    <>
      {punch.map((column, iColumn) => {
        return (
          <div key={iColumn} className="oneCol">
            {
              column.map((image, iImage) => {
                return (
                  <div key={iImage} className="img_container" onClick={handleClickOpenFocus}>
                    <img src={image.img} alt="" />
                  </div>
                )
              })
            } 
          </div>
        )
      })}
    </>
  )
}
export default OneCol;