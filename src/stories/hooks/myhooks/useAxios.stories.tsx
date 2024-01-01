import useAxios from '@/myhooks/useAxios';

export default {
  title: 'MyHook/useAxios',
};

export const LoginSuccess = () => {
  const [{ isLoading, error, data }] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/login',
    method: 'post',
    data: {
      email: 'sonhomin98@naver.com',
      password: 'm40a1mst100!',
    },
  });

  return (
    <pre>
      {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
      {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
    </pre>
  );
};

export const SingupSuccess = () => {
  const [{ isLoading, error, data }] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/signup',
    method: 'post',
    data: {
      email: 'sonhomin98@naver.com',
      fullName: 'sonhomin',
      password: 'ddjsfks1004',
    },
  });

  return (
    <pre>
      {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
      {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
    </pre>
  );
};

export const AuthUser = () => {
  const [{ isLoading, error, data }, refetch] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/auth-user',
    method: 'post',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ODcwODQ3YjAzNTcyMWYyMzM1ODA2MiIsImVtYWlsIjoic29uaG9taW45OEBuYXZlci5jb20ifSwiaWF0IjoxNzAzMzQ4Mjk1fQ.m3mYBXsAdzJhvvyde3PJy9lbYYPIFMx_PJBMtYMTWKw',
    },
  });

  return (
    <>
      <button onClick={refetch}>refetch</button>
      <pre>
        {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
        {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
      </pre>
    </>
  );
};

export const User = () => {
  const [{ isLoading, error, data }] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/users/get-users',
    method: 'get',
  });

  return (
    <pre>
      {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
      {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
    </pre>
  );
};

export const UserDetail = () => {
  const [{ isLoading, error, data }] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/users/65870847b035721f23358062',
    method: 'get',
  });

  return (
    <pre>
      {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
      {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
    </pre>
  );
};

export const UserDataUpdate = () => {
  const [{ isLoading, error, data }] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/settings/update-user',
    method: 'PUT',
    data: {
      fullName: '호벌',
      username: '호벌입니다. 이것은 한줄 설명 입니다.',
    },
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ODcwODQ3YjAzNTcyMWYyMzM1ODA2MiIsImVtYWlsIjoic29uaG9taW45OEBuYXZlci5jb20ifSwiaWF0IjoxNzAzMzQ4Mjk1fQ.m3mYBXsAdzJhvvyde3PJy9lbYYPIFMx_PJBMtYMTWKw',
    },
  });

  return (
    <pre>
      {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
      {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
    </pre>
  );
};

export const ChannelList = () => {
  const [{ isLoading, error, data }] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/channels',
    method: 'get',
  });

  return (
    <pre>
      {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
      {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
    </pre>
  );
};

export const CreatePost = () => {
  const titleJSON = {
    title: '여러분 오늘',
    content: '저 오늘 밥을 먹었는데요 ~',
    voteTitle: '저녁메뉴 추천도 받습니다.',
    voteArray: ['한식', '중식', '일식', '양식'],
  };
  const [{ isLoading, error, data }] = useAxios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/posts/create',
    method: 'post',
    data: {
      title: JSON.stringify(titleJSON),
      image: null,
      channelID: '6587c45f20aed670b6053a16',
    },
  });

  return (
    <pre>
      {!isLoading && data && <div>{JSON.stringify(data, null, 2)}</div>}
      {!isLoading && error && <div>{JSON.stringify(error, null, 2)}</div>}
    </pre>
  );
};
