const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Carla', 'Rafael', 'Juliana'];

export function aleatorio(lista){
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);