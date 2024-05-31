// export default function Template({ handleClickOpenFocus, dataImg, cl }) {
//   return (
//     <>
//       {dataImg.map((column, iColumn) => (
//         <div key={iColumn} className={cl}>
//           {column.map((image, iImage) => (
//             <div key={iImage} className="img_container" onClick={handleClickOpenFocus}>
//               <img src={image.img} alt="" />
//             </div>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// }
import React, { useState } from 'react';

export default function Template({ handleClickOpenFocus, dataImg, cl }) {
  return (
    <>
      {dataImg.map((column, iColumn) => (
        <div key={iColumn} className={cl}>
          {column.map((image, iImage) => (
            <ImageContainer
              key={iImage}
              src={image.img}
              handleClickOpenFocus={handleClickOpenFocus}
            />
          ))}
        </div>
      ))}
    </>
  );
}

function ImageContainer({ src, handleClickOpenFocus }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="img_container" onClick={handleClickOpenFocus} style={{position: 'relative'}}>
      {loading && <div className="skeleton" style={{width: '100%', aspectRatio: '1/1', background: '#e0e0e0', animation: 'skeleton-loading 1.2s infinite linear'}}></div>}
      <img
        src={src}
        alt=""
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}


