import punchThree from "../../js/punch/punchThree.js";
const ThreeCol = ({handleClickOpenFocus}) => {
  return (
    <>
      {punchThree.map((column, iColumn) => {
        return (
          <div key={iColumn} className="threeCol">
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
export default ThreeCol;