import { ChannelImage, Container, ImageBanner, TitleContainer, TextContainer, Title, TextCard } from "./styles";

function videoComponent( { video }: any) {

  return (
    <Container
        onClick={() => video.url && window.open(video.url, '_blank')}
        style={{ cursor: video.url ? 'pointer' : 'default' }}
    >
        <ImageBanner src={video.thumbnail || "https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"} />
        <TitleContainer>
            <ChannelImage>
                {video.channel?.charAt(0).toUpperCase()}
            </ChannelImage>
            <TextContainer>
                <Title>{video.title}</Title>
                <TextCard>{video.channel}</TextCard>
                <TextCard>{video.views} de visualizações - há {video.time}</TextCard>
            </TextContainer>
        </TitleContainer>     
    </Container>
  );
}

export default videoComponent;