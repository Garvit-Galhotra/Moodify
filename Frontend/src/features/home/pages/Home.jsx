import FaceExpression from "../../expression/component/FaceExpression";
import SongPlayer from "../components/SongPlayer";

import { useSong } from "../hooks/useSong";

const Home = () => {
  const { handleGetSong } = useSong();

  return (
    <>
      <FaceExpression
        onClick={(expression) => {
          handleGetSong({ mood: expression });
        }}
      />
      <SongPlayer />
    </>
  );
};

export default Home;
