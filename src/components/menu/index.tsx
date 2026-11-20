import { useMenu } from "../../Context/menuContext";
import { ButtonIcon, Container, MenuItem, SectionTitle, Divider, Backdrop } from "./styles";
import HomeIcon from "../../assets/home.png";
import ShortsIcon from "../../assets/shorts.png";
import SubscribeIcon from "../../assets/subscribe.png";
import UserIcon from "../../assets/user.png";
import HistoryIcon from "../../assets/history.png";
import PlaylistIcon from "../../assets/playlist.png";
import WatchIcon from "../../assets/watch.png";
import LikedIcon from "../../assets/liked.png";
import YourIcon from "../../assets/youtube.png";
import MusicIcon from "../../assets/music.png";
import MovieIcon from "../../assets/movie.png";
import ShoppingIcon from "../../assets/shopping-bag.png";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    showWhenClosed: true,
    items: [
      { name: "Início", link: "/", icon: HomeIcon },
      { name: "Shorts", link: "/shorts", icon: ShortsIcon },
      { name: "Subscrições", link: "/subscriptions", icon: SubscribeIcon },
      { name: "Eu", link: "/user", icon: UserIcon },
    ]
  },
  {
    title: "Eu",
    showWhenClosed: false,
    items: [
      { name: "Histórico", link: "/history", icon: HistoryIcon },
      { name: "Playlists", link: "/playlists", icon: PlaylistIcon },
      { name: "Assistir mais tarde", link: "/watch-later", icon: WatchIcon },
      { name: "Vídeos com 'Gostei'", link: "/liked", icon: LikedIcon },
      { name: "Seus vídeos", link: "/your-video", icon: YourIcon },
    ]
  },
  {
    title: "Explorar",
    showWhenClosed: false,
    items: [
      { name: "Música", link: "/music", icon: MusicIcon },
      { name: "Filmes", link: "/movies", icon: MovieIcon },
      { name: "Shopping", link: "/shopping", icon: ShoppingIcon },
    ]
  },
];

function Menu() {
  const { openMenu, setOpenMenu, isMobile } = useMenu();
  const expanded = isMobile ? true : openMenu;
  const navigate = useNavigate();

  return (
    <>
      {isMobile && openMenu && <Backdrop onClick={() => setOpenMenu(false)} />}

      <Container $openMenu={expanded} $mobileOpen={openMenu}>
        {sections.map((section, sectionIndex) => (
          (!expanded && !section.showWhenClosed) ? null : (
            <div key={sectionIndex} style={{ width: '100%' }}>
              {section.title && expanded && (
                <SectionTitle>{section.title}</SectionTitle>
              )}

              {section.items.map((item) => (
                <MenuItem
                  key={item.link}
                  $openMenu={expanded}
                  onClick={() => {
                    navigate(item.link);
                    if (isMobile) setOpenMenu(false);
                  }}
                >
                  <ButtonIcon alt={item.name} src={item.icon} />
                  <span>{item.name}</span>
                </MenuItem>
              ))}

              {sectionIndex < sections.length - 1 && expanded && <Divider />}
            </div>
          )
        ))}
      </Container>
    </>
  );
}

export default Menu;