'use client';

import { useState } from 'react';
import clsx from 'clsx';

type SizeProps = {
  sizes: {
    value: string;
    label: string;
  }[];
};

export function SizeSelector({ sizes }: SizeProps) {
  const [selectedColor, setSelectedColor] = useState(sizes[0].value);

  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium'>Selecione um tamanho:</label>
      <div className='mt-3 flex gap-4'>
        {sizes.map((size) => (
          <button
            key={size.value}
            onClick={() => setSelectedColor(size.value)}
            aria-label={`Selecionar ${size.value}`}
            className={clsx(
              `h-10 w-auto rounded-full px-3 transition-all focus:outline-none`,
              selectedColor === size.value
                ? 'border-black ring-2 ring-black ring-offset-2'
                : 'border-gray-300'
            )}
          >
            {size.value}
          </button>
        ))}
      </div>
    </div>
  );
}
