import React from "react";

export default class Image1 extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <img
          src="https://mms.businesswire.com/media/20210216006039/en/859393/23/vercel.jpg"
          alt="placeholder"
          style={{
            height: "150px",
          }}
        />
        <img
          src="https://media.suara.com/pictures/970x544/2019/05/28/36601-logo-bytedance-bytedance.jpg"
          alt="placeholder"
          style={{
            height: "150px",
          }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa67PuHPnXq6FZgehGGqSKNLTMng_fPzhgg&usqp=CAU"
          alt="placeholder"
          style={{
            height: "150px",
          }}
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2018/10/Tencent-Logo.jpg"
          alt="placeholder"
          style={{
            height: "150px",
          }}
        />
        <img
          src="https://miro.medium.com/max/1000/1*KDMx1YspSrBcFJG-NDZgDg.png"
          alt="placeholder"
          style={{
            height: "150px",
          }}
        />
      </div>
    );
  }
}
