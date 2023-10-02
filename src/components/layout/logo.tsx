import Image from 'next/image';

export const Logo = ({ expanded = false, color = 'default' }) => {
  var variant = '';
  if (!expanded) {
    variant += 'Short';
  }
  if (color == 'black') {
    variant += 'Black';
  }
  if (color == 'white') {
    variant += 'White';
  }
  return (
    <Image
      height={24}
      width={176}
      src={`/logo/Logo${variant}.svg`}
      alt="Revolancer"
      priority
    />
  );
};
