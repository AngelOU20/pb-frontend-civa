import { getEnvVariables } from '../helpers/getEnvVariables';
import { Futbolista } from '../interface/interfaces';

const { VITE_API_URL } = getEnvVariables();

export const getAllFutbolistas = async (): Promise<Futbolista[] | null> => {
  try {
    const resp = await fetch(VITE_API_URL);

    if (!resp.ok) {
      throw new Error('Error al obtener la lista de futbolistas');
    }

    const data = await resp.json();

    return data;
  } catch (error) {
    throw new Error('Error al buscar los futbolistas');
  }
};

export const getFutbolistaById = async (id: number): Promise<Futbolista | null> => {
  try {
    const resp = await fetch(`${VITE_API_URL}${id}`);

    if (!resp.ok) {
      throw new Error('Error al obtener el futbolista');
    }

    const data = await resp.json();

    return data;
  } catch (error) {
    throw new Error('Error al buscar el futbolista por ID');
  }
};