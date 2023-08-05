import GalleryItem from "./GalleryItem";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
//GALLERY HANDLES THE GALLERY ITEM COMPONENT, WILL BE RENDERED WITH GALLERY SO NO NEED TO IMPORT TO APP
//GALLERY WITH CONTEXT NO LONGER NEEDS PROPS
export default function Gallery() {
  const data = useContext(DataContext);

  const display = data.map(
    (song, index) => <GalleryItem song={song} key={index} /> //song = PROP
  );
  return <div>{display}</div>;
}
