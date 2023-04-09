import * as Dialog from "@radix-ui/react-dialog";

import * as S from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay />

                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </S.HeaderContent>
        </S.HeaderContainer>
    );
};