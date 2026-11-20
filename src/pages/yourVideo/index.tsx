import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { UserContext } from "../../Context/userContext";
import VideoComponent from "../../components/videoComponent";
import { Container, Header, PageTitle, CreateButton, Grid, EmptyText } from "./styles";
import { toCard } from "../../services/youtube";
import { useMenu } from "../../Context/menuContext";

function YourVideo() {
  const { openMenu } = useMenu();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
  }, [navigate]);

  useEffect(() => {
    if (!user?.id) return;

    api.get('/videos/get-videos', {
      headers: { Authorization: localStorage.getItem('token') as string },
    })
      .then(({ data }) => setVideos(data.videos.map((v: any) => toCard(v, user?.nome))))
      .catch((error) => console.log('Erro ao buscar vídeos', error));
  }, [user?.id, user?.nome]);

  return (
    <Container>
      <Header>
        <PageTitle>Seus vídeos</PageTitle>
        <CreateButton onClick={() => navigate('/create-video')}>
          Criar vídeo
        </CreateButton>
      </Header>

      {videos.length === 0 ? (
        <EmptyText>Você ainda não enviou nenhum vídeo.</EmptyText>
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

export default YourVideo;