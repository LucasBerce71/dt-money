import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import * as S from "./styles";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    // type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
    });

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    };

    return (
        <Dialog.Portal>
            <S.Overlay />

            <S.Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <S.CloseButton>
                    <X size={24} />
                </S.CloseButton>

                <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        {...register('description')}
                    />

                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />

                    <input
                        type="text"
                        placeholder="Categoria"
                        required
                        {...register('category')}
                    />

                    <S.TransactionType>
                        <S.TransactionTypeButton value="income" variant="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </S.TransactionTypeButton>

                        <S.TransactionTypeButton value="outcome" variant="outcome">
                            <ArrowCircleDown size={24} />
                            Saída
                        </S.TransactionTypeButton>
                    </S.TransactionType>

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </S.Content>
        </Dialog.Portal>
    );
};