import { useState } from "react";
import { addNote } from "../api";

interface AddNoteFormProps {
  onNoteAdded: () => void;
}

const AddNoteForm: React.FC<AddNoteFormProps> = ({ onNoteAdded }) => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    await addNote(content);
    setContent("");
    onNoteAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Введите заметку..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddNoteForm;
