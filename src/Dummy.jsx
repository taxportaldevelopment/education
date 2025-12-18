import "./SpreadFx.css";

const images = [
  "https://img.freepik.com/premium-photo/desktop-wallpaper_1158775-3064.jpg?semt=ais_hybrid&w=740&q=80",
  "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-art-1080p-2k-4k-5k-hd-wallpapers-free-download-background-image_16123072.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/049/855/871/small/stunning-high-resolution-nature-and-landscape-backgrounds-breathtaking-scenery-in-hd-photo.jpg",
  "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?cs=srgb&dl=pexels-pixabay-36762.jpg&fm=jpg",
  "https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/81EhZofH2RL._AC_UF1000,1000_QL80_.jpg"
];

const Dummy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container">
        <div className="title">Spread Fx</div>

        <div className="gallery">
          {images.map((img, i) => (
            <ul key={i}>
              {Array.from({ length: 9 }).map((_, idx) => (
                <li
                  key={idx}
                  style={{ backgroundImage: `url(${img})` }}
                ></li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dummy;
