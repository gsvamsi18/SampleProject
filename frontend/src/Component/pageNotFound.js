import { Image } from '@mantine/core';

function PageNotFound() {
  return (
    <div style={{  width: 800,marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="md"
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
        alt="Random unsplash image"
        // fit="contain"
      />
    </div>
  );
}
export default PageNotFound;