import punchFour from "../../js/punch/punchFour.js";
const FourCol = ({handleClickOpenFocus}) => {
  return (
    <>
      {punchFour.map((column, iColumn) => {
        return (
          <div key={iColumn} className="fourCol">
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
export default FourCol;