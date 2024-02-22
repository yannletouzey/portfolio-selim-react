import netflixThree from "../../js/netflix/netflixThree.js";
const ThreeCol = ({handleClickOpenFocus}) => {
  return (
    <>
      {netflixThree.map((column, iColumn) => {
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