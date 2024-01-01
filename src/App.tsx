import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '@/slices/post';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);

  const handleAddPost = () => {
    dispatch(addPost({ id: '3', title: '제목1', content: '내용1' }));
  };

  console.log(posts);

  return (
    <div>
      <button onClick={handleAddPost}>포스트 추가</button>
      <pre>{JSON.stringify(posts)}</pre>
    </div>
  );
};

export default App;
