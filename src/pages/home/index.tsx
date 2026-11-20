import { useState, useEffect } from "react";
import api from "../../api";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { toCard } from "../../services/youtube";
import { useMenu } from "../../Context/menuContext";

function Home() {
  const { openMenu } = useMenu();
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    api.get('/videos/all-videos')
      .then(({ data }) => setVideos(data.videos.map((v: any) => toCard(v, 'Canal'))))
      .catch((error) => console.log('Erro ao buscar vídeos', error));
  }, []);

  return (
    <Container $openMenu={openMenu}>
      {videos.map((item) => (
        <VideoComponent key={item.id} video={item} />
      ))}
    </Container>
  );
}

export default Home;