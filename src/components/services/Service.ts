import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function, header?: Record<string, string>) => {
    const resposta = await api.get(url, { headers: header });
    setDados(resposta.data);
};

export const cadastrar = async (url: string, dados: Object, setDados: Function, header?: Record<string, string>) => {
    console.log (dados);
    const resposta = await api.post(url, dados, { headers: header });
    setDados(resposta.data);
};

export const atualizar = async (url: string, dados: Object, setDados: Function, header?: Record<string, string>) => {
    const resposta = await api.put(url, dados, { headers: header });
    setDados(resposta.data);
};

export const deletar = async (url: string, header?: Record<string, string>) => {
    await api.delete(url, { headers: header });
};
