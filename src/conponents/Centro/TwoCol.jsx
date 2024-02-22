import centroTwo from "../../js/centro/centroTwo.js";
const TwoCol = ({handleClickOpenFocus}) => {
  return (
    <>
      {centroTwo.map((column, iColumn) => {
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