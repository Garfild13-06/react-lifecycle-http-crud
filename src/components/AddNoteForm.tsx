import { useState } from "react";
import { addNote } from "../api.js";

const AddNoteForm = ({ onNoteAdded }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        await addNote(content);
        setContent("");
        onNoteAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddNoteForm;
