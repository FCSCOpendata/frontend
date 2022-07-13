import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Topic: React.FC<any> = () => {
  const router = useRouter();

  useEffect(() => {
    //  TODO: fix this static parameter
    router.push({ pathname: '/topic/economy' });
  });

  return <></>;
};
export default Topic;
