import {useState} from "react";
import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";
import "./App.css";

const App: React.FC = () => {
    const [refresh, setRefresh] = useState<boolean>(false);

    return (
        <div className="container">
            <h1>CRUD Notes</h1>
            <AddNoteForm onNoteAdded={() => setRefresh((r) => !r)}/>
            <NotesList onRefresh={refresh}/>
        </div>
    );
};

export default App;
