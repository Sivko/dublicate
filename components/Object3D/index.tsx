"use client";

import Spline from '@splinetool/react-spline';

export default function Object3D({ className = "", style = {}, url = "" }) {
  return (
    <>
      {url && (<div className={className} style={style}>
        <Spline scene={url} />
      </div>)}
    </>
  );
}