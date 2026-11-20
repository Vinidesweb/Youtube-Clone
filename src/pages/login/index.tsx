import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import Logo from "../../assets/Google-Logo.png";
import {
  Page, Card, LogoImage, Title, Subtitle, Field, Input, Label,
  Actions, LinkButton, PrimaryButton,
} from "./styles";

function Login() {
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page>
      <Card>
        <LogoImage alt="Google" src={Logo} />
        <Title>Fazer login</Title>
        <Subtitle>Prosseguir no YouTube</Subtitle>

        <Field>
          <Input
            id="email" type="email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Label htmlFor="email">E-mail</Label>
        </Field>

        <Field>
          <Input id="password" type="password" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin(email, password)}/>
          <Label htmlFor="password">Senha</Label>
        </Field>

        <Actions>
          <LinkButton type="button" onClick={() => navigate("/signup")}>
            Criar conta
          </LinkButton>
          <PrimaryButton type="button" onClick={() => handleLogin(email, password)}>
            Entrar
          </PrimaryButton>
        </Actions>
      </Card>
    </Page>
  );
}

export default Login;