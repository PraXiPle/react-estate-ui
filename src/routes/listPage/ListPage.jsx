import "./listPage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((data) => {
            return <Card item={data} key={data.id} />;
          })}
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
}

export default ListPage;
