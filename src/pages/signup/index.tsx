import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import Logo from "../../assets/Google-Logo.png";
import {
  Page, Card, LogoImage, Title, Subtitle, Field, Input, Label,
  Actions, LinkButton, PrimaryButton, ErrorText,
} from "../login/styles"; 

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    setError('');
    api.post('/user/sign-up', { name, email, password })
      .then(() => navigate('/login'))
      .catch((error) => setError(error.response?.data?.error ?? 'Não foi possível criar a conta.'));
  };

  return (
    <Page>
      <Card>
        <LogoImage alt="Google" src={Logo} />
        <Title>Criar conta</Title>
        <Subtitle>Prosseguir no YouTube</Subtitle>

        <Field>
          <Input id="name" type="text" placeholder=" " value={name}
            onChange={(e) => setName(e.target.value)} />
          <Label htmlFor="name">Nome Sobrenome</Label>
        </Field>

        <Field>
          <Input id="email" type="email" placeholder=" " value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Label htmlFor="email">E-mail</Label>
        </Field>

        <Field>
          <Input id="password" type="password" placeholder=" " value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSignup()} />
          <Label htmlFor="password">Senha</Label>
        </Field>

        {error && <ErrorText>{error}</ErrorText>}

        <Actions>
          <LinkButton type="button" onClick={() => navigate('/login')}>
            Fazer login
          </LinkButton>
          <PrimaryButton type="button" onClick={handleSignup}>
            Criar conta
          </PrimaryButton>
        </Actions>
      </Card>
    </Page>
  );
}

export default Signup;