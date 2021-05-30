import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Container = styled.div`
  width: 100%;
  height: 650px;
  margin-top: 0.5rem;
`;

interface IProps {
  value: string;
  submitValue: React.Dispatch<React.SetStateAction<string>>;
}

const DescriptionInput = ({ value, submitValue }: IProps) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      [{ align: [] }, { color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <Container>
      <ReactQuill
        style={{ height: '600px' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ''}
        onChange={(content, delta, source, editor) =>
          submitValue(editor.getHTML())
        }
      />
    </Container>
  );
};

export default DescriptionInput;
