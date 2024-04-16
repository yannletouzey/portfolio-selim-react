export default function Template({ handleClickOpenFocus, dataImg, cl }) {
  return (
    <>
      {dataImg.map((column, iColumn) => (
        <div key={iColumn} className={cl}>
          {column.map((image, iImage) => (
            <div key={iImage} className="img_container" onClick={handleClickOpenFocus}>
              <img src={image.img} alt="" />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}