import { Link } from "react-router-dom";
import { Futbolista } from "../../interface/interfaces";

interface FootballerTableProps {
  futbolistas?: Futbolista[];
}

export const FootballerTable = ({ futbolistas }: FootballerTableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              N°
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellidos
            </th>
            <th scope="col" className="px-6 py-3">
              Posición
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {futbolistas?.map((futbolista, index) => (
            <tr
              key={futbolista.nombres}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index}
              </th>
              <td className="px-6 py-4">{futbolista.nombres}</td>
              <td className="px-6 py-4">{futbolista.apellidos}</td>
              <td className="px-6 py-4">{futbolista.posicion.nombre}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  to={`/futbolistas/${futbolista.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Ver detalle
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
