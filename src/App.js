
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSerch from './components/FileSearch';
import FileList from './components/FileList'
import defaultFiles from './units/defaultFiles'
import BottomBtn from './components/BottomBtn'
function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col left-panel">
          {/* <h1>this is the left</h1> */}
          <FileSerch
            title='我的云文档'
            onFileSearch={(value) => { console.log(value); }}
          />

          <FileList
            files={defaultFiles}
            onFileClick={(id) => { console.log(id); }}
            onFileDelete={(id) => { console.log(id); }}
            onSaveEdit={(id, value) => {
              console.log(id, value);
            }}
          />
          <div className="row">
            <div className="col">
              <BottomBtn
                icon={faSearch}
              />
            </div>

            <div className="col">
              <BottomBtn
                icon={faSearch}
              />
            </div>


          </div>

        </div>


        <div className="col bg-primary right-panel">
          <h1>this is the right</h1>
        </div>
      </div>

    </div>
  );
}

export default App;
