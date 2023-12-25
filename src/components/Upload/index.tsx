import styled from 'styled-components';
import { useRef, useState } from 'react';

interface UploadContainerProps {
  onClick?: () => void;
  onDrop?: (e: DragEvent) => void;
  onDragEnter?: (e: DragEvent) => void;
  onDragLeave?: (e: Event) => void;
  onDragOver?: (e: Event) => void;
}

const UploadContainer = styled.div<UploadContainerProps>`
  display: inline-block;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

interface UploadProps {
  droppable?: boolean;
  name: string;
  accept: string;
  value?: File;
  onChange?: (file: File) => void;
  [key: string]: any;
}

const Upload = ({
  children,
  droppable,
  name,
  accept,
  value,
  onChange,
  ...props
}: UploadProps) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
  };

  const handleChooseFile = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleDragEnter = (e: DragEvent) => {
    if (!droppable || !e.dataTransfer) return;

    e.preventDefault(); // 브라?��? 기본 ?�벤?��? 막는??
    e.stopPropagation(); // 부모나 ?�식 컴포?�트�??�벤?��? ?�파?�는 것을 막는??

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragLeave = (e: Event) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };
  const handleDragOver = (e: Event) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileDrop = (e: DragEvent) => {
    if (!droppable || !e.dataTransfer) return;

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    const changedFile = files[0];
    setFile(changedFile);
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <UploadContainer
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}>
      <Input
        ref={inputRef}
        type='file'
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, dragging) : children}
    </UploadContainer>
  );
};

export default Upload;
