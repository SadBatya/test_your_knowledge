export default function Container({ children }) {
  return (
    <div className='h-screen relative'>
      <div className='flex flex-col justify-center max-w-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {children}
      </div>
    </div>
  );
}
