import "./singlePageFeatureVer.scss";

function SinglePageFeatureVer({ textS, textP, img }) {
  return (
    <div className="feature">
      <img src={`/${img}.png`} alt="" />
      <div className="featureText">
        <span>{textS}</span>
        <p>{textP}</p>
      </div>
    </div>
  );
}

export default SinglePageFeatureVer;
