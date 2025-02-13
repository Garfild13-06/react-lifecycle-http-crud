import { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../api.js";

const NotesList = ({ onRefresh }) => {
    const [notes, setNotes] = useState([]);

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
            <button onClick={loadNotes}>🔄 Обновить</button>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        {note.content}
                        <button onClick={() => deleteNote(note.id).then(loadNotes)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
