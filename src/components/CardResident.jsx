import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import './styles/CardResident.css'

export const CardResident = ({ url }) => {
  const [resident, getResident] = useFetch(url);

  useEffect(() => {
    getResident();
  }, []);
  console.log(resident);

  return (
    <article className="resident">
      <header className="resident_header">
        <img className= "resident_image" src={resident?.image} alt="" />
        <div className="resident_status">
          <div className={`resident_status-circle ${resident?.status}`}></div>
          <span className="resident_status-value">{resident?.status}</span>
        </div>
      </header>
      <section className="resident_body">
        <h3 className="resident_name">{resident?.name}</h3>
        <hr className="resident_separador"/>
        <ul className="resident_stats">
          <li className="resident_stat_item">
            <span className="resident_stat_label">Specie:</span>
            <span className="resident_stat_value">{resident?.species}</span>
          </li>
          <li className="resident_stat_item">
            <span className="resident_stat_label">Origin:</span>
            <span className="resident_stat_value">{resident?.origin.name}</span>
          </li>
          <li className="resident_stat_item">
            <span className="resident_stat_label">Eppisodes where appear:</span>
            <span className="resident_stat_value">{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};
export default CardResident;
