import { useState, useEffect, useContext } from "react";
import "./style/gridContoller.css";
import NotesGrid from "./NotesGrid";
import AddNotesColumnButton from "./AddNotesColumnButton";
import RempveNotesCulumnButton from "./RempveNotesColumnButton";
import { PlayContext, type Player } from "../PlayController";

function GridController({
  musicalNotes,
  defultCulomns,
  maxColumns,
}: {
  musicalNotes: string[];
  defultCulomns?: number;
  maxColumns?: number;
}) {
  const player = useContext(PlayContext) as Player;
  const [gridColumns, setGridColumns] = useState(defultCulomns || 20);
  const maxGridColumns = maxColumns || 25;
  

  useEffect(() => {
    const melodyNotes = player.melodyNotes;
    const lenMelodyNotes = player.melodyNotes.length;
    if (lenMelodyNotes > gridColumns) {
      player.melodyNotes.splice(gridColumns);
    } else {
      for (let i = lenMelodyNotes; i < gridColumns; i++) {
        melodyNotes.push([]);
      }
    }
  }, [musicalNotes, gridColumns]);

  useEffect(() => {
    if (player.melodyNotes.length > 0){
      setGridColumns(player.melodyNotes.length);
    }else{
      setGridColumns(defultCulomns || 20);
    }
  }, [player.melodyNotes])

  return (
    <div className="part grid-controller">
      <NotesGrid musicalNotes={musicalNotes} gridColumns={gridColumns} />
      <div className="controll-buttons">
        {gridColumns < maxGridColumns && (
          <AddNotesColumnButton
            gridColumns={gridColumns}
            setGridColumns={setGridColumns}
          ></AddNotesColumnButton>
        )}
        {gridColumns > 0 && (
          <RempveNotesCulumnButton
            gridColumns={gridColumns}
            setGridColumns={setGridColumns}
          ></RempveNotesCulumnButton>
        )}
      </div>
    </div>
  );
}

export default GridController;
