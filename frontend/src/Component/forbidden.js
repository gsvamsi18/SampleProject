import { Image } from '@mantine/core';

function Forbidden() {
  return (
    <div style={{  width: 800,marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="md"
        src="https://www.awardspace.com/wp-content/uploads/2021/01/403-forbidden-1.jpg"
        alt="Random unsplash image"
        // fit="contain"
      />
    </div>
  );
}
export default Forbidden;