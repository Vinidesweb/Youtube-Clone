import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import VideoComponent from "../../components/videoComponent";
import { toCard } from "../../services/youtube";
import { Container, Title, Grid, EmptyText } from "./styles";
import { useMenu } from "../../Context/menuContext";

function Search() {
  const { openMenu } = useMenu();
  const [params] = useSearchParams();
  const term = params.get('q') ?? '';
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!term) return;

    setLoading(true);
    api.get('/videos/search', { params: { search: term } })
      .then(({ data }) => setVideos(data.videos.map((v: any) => toCard(v, 'Canal'))))
      .catch((error) => console.log('Erro na pesquisa', error))
      .finally(() => setLoading(false));
  }, [term]);

  return (
    <Container>
      <Title>Resultados para "{term}"</Title>

      {loading ? (
        <EmptyText>Buscando...</EmptyText>
      ) : videos.length === 0 ? (
        <EmptyText>Nenhum vídeo encontrado.</EmptyText>
      ) : (
        <Grid $openMenu={openMenu}>
          {videos.map((item) => (
            <VideoComponent key={item.id} video={item} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Search;