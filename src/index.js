import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	SmlsModal
} from '@smiles/smiles-ui-kit-react';

ReactDOM.render(
  <React.StrictMode>
    <SmlsModal
					isOpen={true}
					type="right"
					//toggle={() => setModalIsOpen(false)}
					//onExit={() => setModalIsOpen(false)}
					className="modal-password"
				>

					<h4 id="lbl_titlePasswordAlert">Teste Modal</h4>


				</SmlsModal>
  </React.StrictMode>,
  document.getElementById('root')
);

