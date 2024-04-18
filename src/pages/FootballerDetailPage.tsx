import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { Futbolista } from "../interface/interfaces";
import { getFutbolistaById } from "../services/futbolista";
import { format } from "date-fns";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const FootballerDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [futbolista, setFutbolista] = useState<Futbolista | null>(null);

  useEffect(() => {
    const getFutbolista = async () => {
      try {
        if (id !== undefined) {
          const data = await getFutbolistaById(parseInt(id));
          setFutbolista(data);
        }
      } catch (error) {
        console.error("Error al obtener el futbolista:", error);
      }
    };

    getFutbolista();
  }, [id]);

  if (!futbolista) {
    return <div>Cargando...</div>;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  const fechaNacimiento = new Date(futbolista.fechaNacimiento);

  return (
    <AppLayout>
      <button
        type="button"
        onClick={onNavigateBack}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-8"
      >
        <ArrowLeftIcon className="h-6 w-6" />
        <span className="sr-only">Volver</span>
      </button>
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-full w-full object-cover md:w-48"
              src="https://via.placeholder.com/150"
              alt="Futbolista"
            />
          </div>
          <div className="flex flex-col gap-y-4 p-8">
            <div className="text-sm text-indigo-500 font-semibold">
              {futbolista.posicion.nombre}
            </div>
            <h2 className="mt-1 text-2xl font-bold text-gray-800">
              {futbolista.nombres} {futbolista.apellidos}
            </h2>
            <p className="mt-2 text-gray-600">
              Fecha de Nacimiento: {format(fechaNacimiento, "dd/MM/yyyy")}
            </p>
            <p className="mt-2 text-gray-600">
              Características: {futbolista.caracteristicas}
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
