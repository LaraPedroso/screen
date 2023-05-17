import { MdEmail, MdLock } from "react-icons/md";
import { Header } from "../../components/Header";
import {
    Container,
    Title,
    Column,
    SubtitleLogin,
    ContainerMain,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
export function Register() {
    const {
        control,
        formState: { errors },
    } = useForm({
        reValidateMode: "onChange",
        mode: "onChange",
    });

    return (
        <>
            <Header />
            <Container>
                <Title>
                    A plataforma para você aprender com experts, dominar as
                    principais tecnologias entrar mais rápido nas empresas mais
                    desejadas.
                </Title>
                <Column>
                    <ContainerMain>
                        <h1>Comece agora grátis</h1>
                        <SubtitleLogin>
                            Crie sua conta e make the change._
                        </SubtitleLogin>
                        <form>
                            <Input
                                placeholder="Nome completo"
                                name="name"
                                control={control}
                            />
                            <Input
                                placeholder="E-mail"
                                leftIcon={<MdEmail />}
                                name="email"
                                control={control}
                            />
                            {errors.email && <span>E-mail é obrigatório</span>}

                            <Input
                                type="password"
                                placeholder="Senha"
                                leftIcon={<MdLock />}
                                name="senha"
                                control={control}
                            />
                            <Button
                                title="Criar minha conta"
                                variant="secondary"
                                type="submit"
                            />
                        </form>
                        <SubtitleLogin>
                            Ao clicar em "criar minha conta grátis", declaro que
                            aceito as Políticas de Privacidade e os Termos de
                            Uso da DIO.{" "}
                        </SubtitleLogin>
                        <p>
                            Ja tenho conta.{" "}
                            <span style={{ color: "#23DD7A" }}>
                                Fazer login
                            </span>
                        </p>
                    </ContainerMain>
                </Column>
            </Container>
        </>
    );
}
