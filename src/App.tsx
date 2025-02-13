import { useState } from "react";
import NotesList from './components/NotesList.tsx';
import AddNoteForm from './components/AddNoteForm';
import "./App.css"; // Подключаем стили

const App = () => {
    const [refresh, setRefresh] = useState(false);

    return (
        <div>
            <h1>CRUD Notes</h1>
            <AddNoteForm onNoteAdded={() => setRefresh((r) => !r)} />
            <NotesList onRefresh={refresh} />
        </div>
    );
};

export default App;
