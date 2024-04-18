import { useEffect, useState } from "react";
import { FootballerTable, FootballerCard } from "../components/home";
import { AppLayout } from "../layout/AppLayout";
import { Futbolista } from "../interface/interfaces";
import { getAllFutbolistas } from "../services/futbolista";

export const HomePage = () => {
  const [showType, setShowType] = useState("table");

  const [futbolistas, setFutbolistas] = useState<Futbolista[]>();

  useEffect(() => {
    const getFutbolistas = async () => {
      const data = await getAllFutbolistas();
      if (data) {
        setFutbolistas(data);
      }
    };

    getFutbolistas();
  }, []);

  return (
    <AppLayout>
      <div className="p-4">
        <div className="flex justify-end items-center gap-x-4">
          <button
            className="bg-gray-100 hover:bg-gray-300 border border-slate-700 transition px-4 py-1 rounded-md"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-300 border border-slate-700 px-4 py-1 rounded-md"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>
      </div>

      {showType === "table" ? (
        <FootballerTable futbolistas={futbolistas} />
      ) : (
        <FootballerCard futbolistas={futbolistas} />
      )}
    </AppLayout>
  );
};
