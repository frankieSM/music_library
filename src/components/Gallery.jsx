import GalleryItem from "./GalleryItem";
//GALLERY HANDLES THE GALLERY ITEM COMPONENT, WILL BE RENDERED WITH GALLERY SO NO NEED TO IMPORT TO APP
export default function Gallery(props) {
  const display = props.data.map(
    (song, index) => <GalleryItem song={song} key={index} /> //song = PROP
  );
  return <div>{display}</div>;
}
