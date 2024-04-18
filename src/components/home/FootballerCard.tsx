import { EyeIcon } from "@heroicons/react/24/solid";
import { Futbolista } from "../../interface/interfaces";
import { Link } from "react-router-dom";

interface FootballerCardProps {
  futbolistas?: Futbolista[];
}

export const FootballerCard = ({ futbolistas }: FootballerCardProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg-grid-cols-3 xl:grid-cols-3">
      {futbolistas?.map((futbolista, index) => (
        <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl transition delay-150">
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-200 rounded-lg">
            {futbolista.posicion.nombre}
          </h2>
          <h4 className="my-2 text-gray-500">{index}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <h2 className="my-1 font-semibold">
              {futbolista.nombres} {futbolista.apellidos}
            </h2>
          </div>
          <div className="flex justify-start items-center gap-x-2 flex-wrap">
            <p>Caracteristicas:</p>
            <p className="my-1">{futbolista.caracteristicas}</p>
          </div>

          <div className="flex justify-end items-center gap-x-2 mt-4 p-4">
            <Link to={`/futbolistas/${futbolista.id}`}>
              <EyeIcon className="h-8 w-8 text-blue-600 hover:text-blue-500 transition" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
