import punchTwo from "../../js/punch/punchTwo.js";
const TwoCol = ({handleClickOpenFocus}) => {
  return (
    <>
      {punchTwo.map((column, iColumn) => {
        return (
          <div key={iColumn} className="twoCol">
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
export default TwoCol;