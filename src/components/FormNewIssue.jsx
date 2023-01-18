import { useState } from 'react';

const FormNewIssue = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const contentOnChange = (e) => {
    setContent(e.target.value);
  };

  const formOnClick = () => {
    setFormOpen(!formOpen);
  };

  const postOnClick = () => {
    setFormOpen(false);
  };
  return (
    <div className={`w-full ring-2 ring-slate-900 focus-within:ring-sky-500 ${formOpen ? 'rounded-lg' : 'rounded-full'}`}>
      {!formOpen ? (
        <div className="flex justify-between">
          <input type="text" className="bg-transparent outline-none p-3" placeholder="What's on your mind..?" value={title} onChange={titleOnChange} />
          <button className="m-1 p-3 bg-sky-500 rounded-full font-semibold text-white" onClick={formOnClick}>
            Create
          </button>
        </div>
      ) : undefined}
      {formOpen ? (
        <div className="px-4 flex flex-col py-5">
          <h2 className="font-bold text-xl text-sky-500">New Issue</h2>
          <div className="flex flex-col mt-5 mb-2">
            <label className="font-semibold mb-1">Title</label>
            <input type="text" className="bg-transparent outline-none ring-2 ring-slate-900 p-2 rounded-lg mb-3 focus-within:ring-sky-500" placeholder="Title" value={title} onChange={titleOnChange} />
            <label className="font-semibold mb-1">Content</label>
            <textarea className="bg-transparent outline-none ring-2 ring-slate-900 p-2 rounded-lg mb-3 focus-within:ring-sky-500" rows={10} placeholder="Content" value={content} onChange={contentOnChange}></textarea>
          </div>
          <div className="flex justify-end gap-3">
            <button className="px-3 py-2 bg-red-500 font-semibold text-white rounded-lg" onClick={formOnClick}>
              Cancel
            </button>
            <button className="px-3 py-2 bg-sky-500 font-semibold text-white rounded-lg" onClick={postOnClick}>
              Post
            </button>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default FormNewIssue;
