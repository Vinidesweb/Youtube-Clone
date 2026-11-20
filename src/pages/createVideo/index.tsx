import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { UserContext } from "../../Context/userContext";
import Logo from "../../assets/YouTube-Logo.png";
import {
  Page, Card, LogoImage, Title, Subtitle, Field, Input, Label,
  Actions, LinkButton, PrimaryButton, ErrorText,
} from "../login/styles";

function CreateVideo() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/login');
  }, [navigate]);

    const handleCreate = async () => {
      if (!url) {
        setError('Cole a URL do vídeo.');
        return;
      }
      if (!user?.id) {
        setError('Carregando seu usuário. Tente de novo em instantes.');
        return;
      }

      setError('');
      try {
        await api.post(
          '/videos/create-video',
          { url },
          { headers: { Authorization: localStorage.getItem('token') as string } }
        );
        navigate('/your-video');
      } catch (error: any) {
        setError(error.response?.data?.error ?? 'Não foi possível enviar o vídeo.');
      }
    };

  return (
    <Page>
      <Card>
        <LogoImage alt="YouTube" src={Logo} />
        <Title>Enviar vídeo</Title>
        <Subtitle>Cole o link do vídeo do YouTube</Subtitle>

        <Field>
          <Input id="url" type="url" placeholder=" " value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()} />
          <Label htmlFor="url">URL do vídeo</Label>
        </Field>

        {error && <ErrorText>{error}</ErrorText>}

        <Actions>
          <LinkButton type="button" onClick={() => navigate('/your-video')}>
            Cancelar
          </LinkButton>
          <PrimaryButton type="button" onClick={handleCreate}>
            Enviar
          </PrimaryButton>
        </Actions>
      </Card>
    </Page>
  );
}

export default CreateVideo;