import { useEffect, useState } from "react";
import { getNotes, deleteNote, Note } from "../api";

interface NotesListProps {
  onRefresh: boolean;
}

const NotesList: React.FC<NotesListProps> = ({ onRefresh }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error("Ошибка загрузки:", error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, [onRefresh]);

  return (
    <div>
      <button className="refresh-btn" onClick={loadNotes}>🔄 Обновить</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.content}</span>
            <button onClick={() => deleteNote(note.id).then(loadNotes)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
