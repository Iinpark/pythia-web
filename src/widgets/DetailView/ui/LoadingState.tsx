import Loader from '@shared/ui/Loader/Loader';

const LoadingState = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Loader />
    </div>
  );
};

export default LoadingState;
