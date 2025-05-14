'use client';

import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';

type RatingProps = {
  value: number; // nota, ex: 4
  max?: number; // valor máximo (default 5)
  size?: 'sm' | 'md' | 'lg';
};

export default function Rating({ value, max = 5, size = 'md' }: RatingProps) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className='flex items-center gap-1'>
      {[...Array(max)].map((_, i) => {
        const Icon = i < value ? StarFilledIcon : StarIcon;
        return <Icon key={i} className={`${sizes[size]} text-yellow-400`} />;
      })}
      <span className='ml-1 text-sm text-gray-600'>{`${value}/${max}`}</span>
    </div>
  );
}
