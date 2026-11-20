import { useContext, useState, useRef, useEffect } from "react";
import { useMenu } from "../../Context/menuContext";
import { Container, LogoContainer, ButtonContainer, UserAvatar, 
    ButtonIcon, SearchContainer, SearchInputContainer, SearchInput, 
    SearchButton, HeaderButton, LoginButton, UserArea, Dropdown, DropdownHeader, DropdownItem, YoutubeLogo, HideOnMobile } from "./styles";
import HamburguerIcon from "../../assets/menu-hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

function UserCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
         stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3.2" />
      <path d="M5.8 18.6c1.5-2.4 3.6-3.4 6.2-3.4s4.7 1 6.2 3.4" />
    </svg>
  );
}

function Header(){
 const { openMenu, setOpenMenu } = useMenu();
 const { login, logOut, user } = useContext(UserContext);

 const [openDropdown, setOpenDropdown] = useState(false);
 const userAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (userAreaRef.current && !userAreaRef.current.contains(e.target as Node)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

 const navigate = useNavigate();

 const [searchText, setSearchText] = useState('');

 const handleSearch = () => {
    const term = searchText.trim();
    if (term) navigate(`/search?q=${encodeURIComponent(term)}`);
 };

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <YoutubeLogo alt="YouTube" src={Logo} onClick={() => navigate('/')} />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput
                        placeholder="Pesquisar"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </SearchInputContainer>
                <SearchButton onClick={handleSearch}>
                    <ButtonIcon alt="Pesquisar" src={SearchIcon} />
                </SearchButton>
                <HideOnMobile>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={MicIcon} />
                    </ButtonContainer>
                </HideOnMobile>
            </SearchContainer>
            <HeaderButton>
                {login ? (
                    <>
                        <HideOnMobile>
                            <ButtonContainer margin='' onClick={() => navigate('/create-video')}>
                                <ButtonIcon alt="Enviar vídeo" src={VideoIcon} />
                            </ButtonContainer>
                        </HideOnMobile>
                         <HideOnMobile>
                            <ButtonContainer margin='0 0 0 10px'>
                                <ButtonIcon alt="" src={NotificationIcon} />
                            </ButtonContainer>
                        </HideOnMobile>
                        <UserArea ref={userAreaRef}>
                            <UserAvatar onClick={() => setOpenDropdown(!openDropdown)}>
                                {user?.nome?.charAt(0).toUpperCase()}
                            </UserAvatar>

                            {openDropdown && (
                                <Dropdown>
                                    <DropdownHeader>
                                        <UserAvatar style={{ margin: 0 }}>
                                            {user?.nome?.charAt(0).toUpperCase()}
                                        </UserAvatar>
                                        <div>
                                            <strong>{user?.nome}</strong>
                                            <span>{user?.email}</span>
                                        </div>
                                    </DropdownHeader>

                                    <DropdownItem onClick={() => { setOpenDropdown(false); navigate('/your-video'); }}>
                                        Seus vídeos
                                    </DropdownItem>
                                    <DropdownItem onClick={() => { setOpenDropdown(false); logOut(); }}>
                                        Sair
                                    </DropdownItem>
                                </Dropdown>
                            )}
                        </UserArea>
                    </>
                ) : (
                    <LoginButton onClick={() => navigate('/login')}>
                        <UserCircleIcon />
                        <span>Fazer login</span>
                    </LoginButton>
                )}
            </HeaderButton>
        </Container>
    )
}

export default Header;