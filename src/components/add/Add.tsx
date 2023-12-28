import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import React from 'react';
type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const { slug, columns, setOpen } = props;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Add submit');
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((col) => (
              <div className="item" key={Math.random()}>
                <label htmlFor="">{col.headerName}</label>
                <input type={col.type} placeholder={col.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
